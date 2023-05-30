<template>
	<div
		v-if="!showField && !settings.fieldOnly"
		class="d-inline-flex align-center justify-center"
	>
		<span
			class="pb-1 d-inline-flex align-center justify-center"
			:class="fieldDisplayClass"
			:style="fieldDisplayStyle"
			@click="toggleField"
		>
			{{ displayValue }}
		</span>
	</div>

	<div
		v-else
		:class="fieldContainerClass"
	>
		<v-textarea
			v-bind="$attrs"
			v-model="modelValue"
			:auto-grow="settings.autoGrow"
			:autofocus="!settings.fieldOnly || settings.autofocus"
			class="my-2"
			:color="settings.color"
			:density="settings.density"
			:disabled="loading"
			:error="error"
			:error-messages="internalErrorMessages"
			:hide-details="settings.hideDetails"
			:label="settings.label"
			:loading="loading"
			:variant="settings.variant"
			width="100%"
			@keyup.esc="closeField"
		>
			<!-- Pass on all scoped slots -->
			<template
				v-for="(_, slot) in slots"
				#[slot]="scope"
			>
				<slot
					:name="slot"
					v-bind="{ ...scope }"
				/>
			</template>

			<template
				v-if="!slots.append"
				#append
			>
				<SaveFieldButtons
					:cancel-button-color="settings.cancelButtonColor"
					:cancel-button-size="settings.cancelButtonSize"
					:cancel-button-title="settings.cancelButtonTitle"
					:cancel-button-variant="settings.cancelButtonVariant"
					:cancel-icon="settings.cancelIcon"
					:cancel-icon-color="settings.cancelIconColor"
					:error="error"
					:field-only="settings.fieldOnly"
					:hide-save-icon="settings.hideSaveIcon"
					:loading="loading"
					:loading-icon="settings.loadingIcon"
					:loading-icon-color="settings.loadingIconColor"
					:save-button-color="settings.saveButtonColor"
					:save-button-size="settings.saveButtonSize"
					:save-button-title="settings.saveButtonTitle"
					:save-button-variant="settings.saveButtonVariant"
					:save-icon="settings.saveIcon"
					:save-icon-color="settings.saveIconColor"
					@close="closeField"
					@save="saveValue"
				/>
			</template>
		</v-textarea>
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	UseSaveValue,
	VInlineTextareaProps,
} from '@/types';
import { textareaProps } from './utils/props';
import { SaveFieldButtons } from './components/index';
import {
	useCheckForErrors,
	useSaveValue,
	useToggleField,
	useTruncateText,
} from './composables/methods';
import {
	useFieldContainerClass,
	useDisplayContainerClass,
} from './composables/classes';
import { useFieldDisplayStyles } from './composables/styles';
import inlineEmits from './utils/emits';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);
const props = withDefaults(defineProps<VInlineTextareaProps>(), { ...textareaProps });
let settings = reactive({ ...attrs, ...props });

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);
let originalValue = modelValue.value;


// ------------------------------------------------ The displayed value //
const displayValue = computed(() => {
	if (modelValue.value) {
		empty.value = false;

		if (settings.truncateLength) {
			return useTruncateText({
				length: settings.truncateLength,
				suffix: settings.truncateSuffix,
				text: modelValue.value,
			});
		}

		return modelValue.value;
	}

	empty.value = true;
	return settings.emptyText;
});


// ------------------------------------------------ Class & Styles //
const fieldContainerClass = computed(() => useFieldContainerClass('textarea', showField.value));
const fieldDisplayClass = computed(() => useDisplayContainerClass(
	'textarea',
	settings.valueColor,
	{
		disabled: settings.disabled,
		empty,
		error,
	}
));
const fieldDisplayStyle = computed(() => useFieldDisplayStyles({
	color: settings.color,
	error,
	underlineColor: settings.underlineColor,
	underlineStyle: settings.underlineStyle,
	underlineWidth: settings.underlineWidth,
	underlined: settings.underlined,
}));


// ------------------------------------------------ Key event to cancel/close field //
function closeField() {
	error.value = false;
	modelValue.value = originalValue;
	toggleField();
}


// ------------------------------------------------ Toggle the field //
function toggleField() {
	if (settings.disabled) {
		return;
	}

	const response = useToggleField({
		attrs,
		closeSiblings: settings.closeSiblings,
		fieldOnly: settings.fieldOnly,
		props,
		showField,
		timeOpened: timeOpened.value,
	});

	settings = { ...settings, ...response.settings };
	showField.value = response.showField;
	timeOpened.value = response.timeOpened;

	if (closeSiblingsBus !== null && settings.closeSiblings && showField.value && !settings.fieldOnly) {
		closeSiblingsBus.emit(response.timeOpened);
	}
}


// ------------------------------------------------ Check for errors //
const internalErrors = ref();
const internalErrorMessages = computed(() => internalErrors.value);

watch(() => showField.value, () => {
	if (showField.value) {
		checkInternalErrors();
	}
});

watch(() => modelValue.value, () => {
	if (showField.value) {
		checkInternalErrors();
	}
});

function checkInternalErrors() {
	const response = useCheckForErrors({
		required: settings.required,
		rules: settings.rules,
		value: modelValue,
	});

	error.value = response.errors;

	internalErrors.value = response.results;
	return response.results;
}


// ------------------------------------------------ Save the value / Emit update //
function saveValue() {
	originalValue = modelValue.value;
	loading.value = true;
	emit('loading', loading.value);

	useSaveValue({
		emit: emit as keyof UseSaveValue,
		name: settings.name,
		settings,
		value: modelValue.value as keyof UseSaveValue,
	})
		.then((response) => {
			error.value = response?.error as boolean ?? false;
			loading.value = false;
			emit('loading', loading.value);
			toggleField();
		});
}


// ------------------------------------------------ Close siblings bus event //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let closeSiblingsBus: unknown | any;
let unsubscribeBus: () => void;

if (settings.closeSiblings) {
	import('@vueuse/core').then(({ useEventBus }) => {
		closeSiblingsBus = useEventBus(CloseSiblingsBus);
		unsubscribeBus = closeSiblingsBus.on(closeSiblingsListener);
	});
}

function closeSiblingsListener(identifier: TimeOpened) {
	emit('update:closeSiblingFields', timeOpened);

	if (showField.value && timeOpened.value !== identifier) {
		closeField();
	}
}

onUnmounted(() => {
	if (typeof unsubscribeBus !== 'undefined') {
		closeSiblingsBus.off(closeSiblingsListener);
	}
});
</script>

<style lang="scss" scoped>
:deep(.v-input__append) {
	padding: 0 !important;
}

.icons-container {
	height: 100%;
}
</style>
