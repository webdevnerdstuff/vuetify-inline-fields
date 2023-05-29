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
		<v-select
			v-bind="$attrs"
			v-model="modelValue"
			:autofocus="!settings.fieldOnly || settings.autofocus"
			:clear-icon="settings.clearIcon"
			:clearable="settings.clearable"
			:color="settings.color"
			:density="settings.density"
			:disabled="loading"
			:error="error"
			:hide-details="settings.hideDetails"
			:hide-selected="settings.hideSelected"
			:item-title="settings.itemTitle"
			:item-value="settings.itemValue"
			:items="items"
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
		</v-select>
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	UseSaveValue,
	VInlineSelectProps,
} from '@/types';
import type { VSelect } from 'vuetify/components';
import { selectProps } from './utils/props';
import { SaveFieldButtons } from './components/index';
import {
	useSaveValue,
	useToggleField,
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
const props = withDefaults(defineProps<VInlineSelectProps>(), { ...selectProps });
let settings = reactive({ ...attrs, ...props });

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
const items = ref();
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);
let originalValue = modelValue.value;


// ------------------------------------------------ The displayed value //
const displayValue = computed(() => {
	if (modelValue.value && modelValue.value[settings.itemTitle as string]) {
		empty.value = false;
		return modelValue.value[settings.itemTitle as string];
	}

	modelValue.value = '';
	empty.value = true;

	return settings.emptyText;
});


// ------------------------------------------------ Watch the items //
watchEffect(() => {
	items.value = settings.items || [] as VSelect['$props']['items'];
});


// ------------------------------------------------ Class & Styles //
const fieldContainerClass = computed(() => useFieldContainerClass('select', showField.value));
const fieldDisplayClass = computed(() => useDisplayContainerClass(
	'select',
	settings.valueColor,
	settings.disabled,
	error.value,
	empty.value,
));
const fieldDisplayStyle = computed(() => useFieldDisplayStyles(
	settings.underlineColor,
	settings.underlineStyle,
	settings.underlineWidth,
	settings.color,
	error.value,
	settings.underlined,
));


// ------------------------------------------------ Key event to cancel/close field //
function closeField() {
	modelValue.value = originalValue;
	toggleField();
}


// ------------------------------------------------ Toggle the field //
function toggleField() {
	if (settings.disabled) {
		return;
	}

	const response = useToggleField(
		settings.item.id as number,
		showField.value,
		attrs,
		props,
		timeOpened.value,
		settings.closeSiblings,
		settings.fieldOnly,
	);

	settings = { ...settings, ...response.settings };
	showField.value = response.showField;
	timeOpened.value = response.timeOpened;

	if (closeSiblingsBus !== null && settings.closeSiblings && showField.value && !settings.fieldOnly) {
		closeSiblingsBus.emit(response.timeOpened);
	}
}


// ------------------------------------------------ Save the value / Emit update //
function saveValue() {
	originalValue = modelValue.value;
	loading.value = true;
	emit('loading', loading.value);

	useSaveValue(settings, emit as keyof UseSaveValue, settings.name, modelValue.value as keyof UseSaveValue)
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
:deep(.v-field__append-inner) {
	padding: 0 !important;
}

.icons-container {
	height: 100%;
}
</style>
