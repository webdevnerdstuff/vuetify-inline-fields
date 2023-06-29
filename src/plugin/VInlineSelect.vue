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
			<v-select
				v-bind="bindingSettings"
				v-model="modelValue"
				:autofocus="!settings.fieldOnly || settings.autofocus"
				:clear-icon="theClearIcon"
				:clearable="settings.clearable"
				:color="settings.color"
				:density="settings.density"
				:disabled="loadingProp"
				:error="error"
				:error-messages="internalErrorMessages"
				:hide-details="settings.hideDetails"
				:hide-selected="settings.hideSelected"
				:item-title="settings.itemTitle"
				:item-value="settings.itemValue"
				:items="items"
				:label="settings.label"
				:loading="loadingProp"
				:menu="settings.menu && !settings.fieldOnly"
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
						:loading="loadingProp"
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
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	VInlineSelectProps,
} from '@/types';
import type { IconOptions } from 'vuetify';
import type { VSelect } from 'vuetify/components';
import { selectProps } from './utils/props';
import { SaveFieldButtons } from './components/index';
import {
	useCheckForErrors,
	useToggleField,
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
import { useGetIcon } from './composables/icons';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const emit = defineEmits([...inlineEmits]);
const slots = useSlots();

const props = withDefaults(defineProps<VInlineSelectProps>(), { ...selectProps });
const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
let settings = reactive({ ...attrs, ...props });
const loadingProp = computed(() => props.loading);

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
const items = ref();
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);
let originalValue = modelValue.value;


// ------------------------------------------------ Binding Events & Props //
const bindingSettings = computed(() => settings);


// ------------------------------------------------ Loading //
watch(() => loadingProp.value, (newVal, oldVal) => {
	if (!newVal && oldVal && showField.value) {
		toggleField();
	}
});


// ------------------------------------------------ Icons //
const theClearIcon = computed(() => {
	return useGetIcon({
		icon: props.clearIcon,
		iconOptions,
		name: 'clear',
	});
});


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
const inlineFieldsContainerClass = computed(() => useInlineFieldsContainerClass({
	density: settings.density,
	disabled: settings.disabled,
	field: 'v-select',
	iconSet: iconOptions?.defaultSet,
	loading: loadingProp.value,
	loadingWait: settings.loadingWait,
	tableField: settings.tableField,
}));

const displayContainerClass = computed(() => useDisplayContainerClass({
	density: settings.density,
	field: 'v-select',
}));

const displayInputControlClasses = useDisplayInputControlClasses({
	density: settings.density,
	variant: settings.variant,
});

const fieldContainerClass = computed(() => useFieldContainerClass({
	active: showField.value,
	name: 'select',
}));

const displayValueClass = computed(() => useDisplayValueClass(
	'select',
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
	if (settings.disabled || (settings.loadingWait && loadingProp.value)) {
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
:deep(.v-field__field) {
	align-items: flex-end !important;
}
</style>
