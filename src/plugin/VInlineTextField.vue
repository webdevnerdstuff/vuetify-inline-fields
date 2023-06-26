<template>
	<div
		:class="inlineFieldsContainerClass"
		:style="inlineFieldsContainerStyle"
	>
		<div
			v-if="!showField && !settings.fieldOnly"
			:class="displayContainerClass"
		>
			<div :class="displayInputControlClasses">
				<div class="v-inline-fields--display-wrapper">
					<div
						class="d-inline-flex"
						:class="displayValueClass"
						:style="displayValueStyle"
						@click="toggleField"
					>
						{{ displayValue }}
					</div>
				</div>
			</div>
		</div>

		<div
			v-else
			:class="fieldContainerClass"
		>
			<v-text-field
				v-bind="$attrs"
				v-model="modelValue"
				:autofocus="!settings.fieldOnly || settings.autofocus"
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
				@keyup.enter="saveValue"
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
						v-model="modelValue"
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
						:required="settings.required"
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
			</v-text-field>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	VInlineTextFieldProps,
} from '@/types';
import { textFieldProps } from './utils/props';
import { SaveFieldButtons } from './components/index';
import {
	useCheckForErrors,
	useToggleField,
	useTruncateText,
} from './composables/methods';
import {
	useDisplayContainerClass,
	useDisplayInputControlClasses,
	useDisplayValueClass,
	useFieldContainerClass,
	useInlineFieldsContainerClass,
} from './composables/classes';
import {
	useDisplayValueStyles,
	useInlineFieldsContainerStyle,
} from './composables/styles';
import inlineEmits from './utils/emits';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);
const props = withDefaults(defineProps<VInlineTextFieldProps>(), { ...textFieldProps });
let settings = reactive({ ...attrs, ...props });

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);
let originalValue = modelValue.value;


watch(() => props.loading, (newVal, oldVal) => {
	if (!newVal && oldVal && showField.value) {
		toggleField();
	}
});


// ------------------------------------------------ The displayed value //
const displayValue = computed(() => {
	if (modelValue.value) {
		empty.value = false;

		if (settings.truncateLength) {
			return useTruncateText({
				length: settings.truncateLength,
				suffix: settings.truncateSuffix,
				text: modelValue.value as string,
			});
		}

		return modelValue.value;
	}

	empty.value = true;
	return settings.emptyText;
});


// ------------------------------------------------ Class & Styles //
const inlineFieldsContainerClass = computed(() => useInlineFieldsContainerClass({
	density: settings.density,
	disabled: settings.disabled,
	field: 'v-text-field',
	loading: props.loading,
	loadingWait: settings.loadingWait,
	tableField: settings.tableField,
}));

const displayContainerClass = computed(() => useDisplayContainerClass({
	density: settings.density,
	field: 'v-text-field',
}));

const displayInputControlClasses = useDisplayInputControlClasses({
	density: settings.density,
	variant: settings.variant,
});

const fieldContainerClass = computed(() => useFieldContainerClass({
	active: showField.value,
	name: 'text-field',
}));

const displayValueClass = computed(() => useDisplayValueClass(
	'text-field',
	settings.valueColor,
	{
		empty,
		error,
	}
));

const inlineFieldsContainerStyle = computed(() => useInlineFieldsContainerStyle({
	alignItems: settings.alignItems,
}));

const displayValueStyle = computed(() => useDisplayValueStyles({
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
	console.log('settings.loadingWait', settings.loadingWait);
	if (settings.disabled || (settings.loadingWait && props.loading)) {
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
	if (error.value) {
		error.value = true;
		return;
	}

	originalValue = modelValue.value;
	emit('update', modelValue.value);

	if (!settings.loadingWait) {
		toggleField();
	}
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

.truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 250px;
}

.icons-container {
	height: 100%;
}
</style>
