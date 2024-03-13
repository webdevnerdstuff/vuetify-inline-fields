<template>
	<div
		ref="inlineFieldsContainer"
		:class="inlineFieldsContainerClass"
		:style="inlineFieldsContainerStyle"
	>
		<div
			v-if="(!showField && !settings.fieldOnly) || cardField"
			:class="displayContainerClass"
		>
			<div :class="displayInputControlClasses">
				<DisplayedValue
					v-bind="bindingDisplay"
					@toggleField="toggleField"
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
				</DisplayedValue>
			</div>
		</div>

		<div
			v-if="showField || settings.fieldOnly || cardField"
			:class="fieldContainerClass"
		>
			<Teleport
				:disabled="!cardField"
				:to="cardFieldRef"
			>
				<v-autocomplete
					v-bind="bindingSettings"
					v-model="modelValue"
					:autofocus="!settings.fieldOnly || settings.autofocus"
					:clear-icon="theClearIcon"
					:clearable="settings.clearable"
					:color="color"
					:density="settings.density"
					:disabled="loadingProp || disabled"
					:error="error"
					:error-messages="internalErrorMessages"
					:hide-details="hideDetails"
					:hide-selected="settings.hideSelected"
					:item-title="settings.itemTitle"
					:item-value="settings.itemValue"
					:items="items"
					:label="settings.label"
					:loading="loadingProp"
					:menu="settings.menu && !settings.fieldOnly && showField"
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
							:cancel-button-color="cancelButtonColor"
							:cancel-button-size="cancelButtonSize"
							:cancel-button-title="cancelButtonTitle"
							:cancel-button-variant="cancelButtonVariant"
							:cancel-icon="cancelIcon"
							:cancel-icon-color="cancelIconColor"
							:error="error"
							:field-only="fieldOnly"
							:hide-cancel-icon="hideCancelIcon"
							:hide-save-icon="hideSaveIcon"
							:loading="loadingProp"
							:loading-icon="loadingIcon"
							:loading-icon-color="loadingIconColor"
							:save-button-color="saveButtonColor"
							:save-button-size="saveButtonSize"
							:save-button-title="saveButtonTitle"
							:save-button-variant="saveButtonVariant"
							:save-icon="saveIcon"
							:save-icon-color="saveIconColor"
							@close="closeField"
							@save="saveValue"
						/>
					</template>
				</v-autocomplete>
			</Teleport>
		</div>

		<!-- Card Field-->
		<div
			v-if="cardField"
			:class="cardContainerClass"
			:style="cardContainerStyle"
		>
			<v-card v-bind="bindingCard">
				<v-card-text>
					<div ref="cardFieldRef"></div>
				</v-card-text>
			</v-card>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	SharedProps,
	TimeOpened,
} from '@/plugin/types';
import type { VInlineAutocompleteProps } from './';
import { IconOptions } from 'vuetify';
import type { VSelect } from 'vuetify/components';
import {
	autocompleteProps,
	defaultCardProps,
} from '@utils/props';
import DisplayedValue from '@components/common/DisplayedValue.vue';
import SaveFieldButtons from '@components/common/SaveFieldButtons.vue';
import {
	useCheckForErrors,
	useToggleField,
} from '@composables/methods';
import {
	useCardContainerClass,
	useDisplayContainerClass,
	useDisplayInputControlClasses,
	useFieldContainerClass,
	useInlineFieldsContainerClass,
} from '@composables/classes';
import {
	useCardContainerStyle,
	useInlineFieldsContainerStyle,
} from '@composables/styles';
import inlineEmits from '@utils/emits';
import { useBindingSettings } from '@composables/bindings';
import { useGetIcon } from '@composables/icons';
import { globalOptions } from '../../';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);
const injectedOptions = inject(globalOptions, {});

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const props = withDefaults(defineProps<VInlineAutocompleteProps>(), { ...autocompleteProps });
const settings = reactive({ ...attrs, ...props, ...injectedOptions });

watchEffect(() => {
	Object.assign(settings, { ...attrs, ...props, ...injectedOptions });
});

const { cancelButtonColor,
	cancelButtonSize,
	cancelButtonTitle,
	cancelButtonVariant,
	cancelIcon,
	cancelIconColor,
	cardField,
	closeSiblings,
	color,
	fieldOnly,
	hideCancelIcon,
	hideDetails,
	hideSaveIcon,
	loadingIcon,
	loadingIconColor,
	saveButtonColor,
	saveButtonSize,
	saveButtonTitle,
	saveButtonVariant,
	saveIcon,
	saveIconColor,
	valueColor } = toRefs(settings);

const disabled = computed(() => props.disabled);
const loadingProp = computed(() => props.loading);

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
const items = ref();
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);
let originalValue = modelValue.value;


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
		setEmptyValue(false);
		return modelValue.value[settings.itemTitle as string];
	}

	if (modelValue.value) {
		return modelValue.value;
	}

	setEmptyValue(true);
	return settings.emptyText;
});

function setEmptyValue(val) {
	empty.value = val;
}


// ------------------------------------------------ Binding Events & Props //
const bindingSettings = computed(() => useBindingSettings(settings));

const bindingDisplay = computed(() => {
	return {
		color: settings.color,
		displayAppendIcon: settings.displayAppendIcon,
		displayAppendIconColor: settings.displayAppendIconColor,
		displayAppendIconSize: settings.displayAppendIconSize,
		displayAppendInnerIcon: settings.displayAppendInnerIcon,
		displayAppendInnerIconColor: settings.displayAppendInnerIconColor,
		displayAppendInnerIconSize: settings.displayAppendInnerIconSize,
		displayPrependIcon: settings.displayPrependIcon,
		displayPrependIconColor: settings.displayPrependIconColor,
		displayPrependIconSize: settings.displayPrependIconSize,
		displayPrependInnerIcon: settings.displayPrependInnerIcon,
		displayPrependInnerIconColor: settings.displayPrependInnerIconColor,
		displayPrependInnerIconSize: settings.displayPrependInnerIconSize,
		displayValue: displayValue.value,
		empty: empty.value,
		error: error.value,
		field: 'v-text-field',
		underlineColor: settings.underlineColor,
		underlineStyle: settings.underlineStyle,
		underlineWidth: settings.underlineWidth,
		underlined: settings.underlined,
		valueColor: valueColor.value,
	};
});

const bindingCard = computed(() => ({
	...defaultCardProps,
	...props.cardProps,
}) as SharedProps['cardProps']);


// ------------------------------------------------ Watch the items //
watchEffect(() => {
	items.value = settings.items || [] as VSelect['$props']['items'];
});


// ------------------------------------------------ Class & Styles //
const inlineFieldsContainerClass = computed(() => useInlineFieldsContainerClass({
	cell: settings.cell && !showField.value,
	density: settings.density,
	disabled: disabled.value,
	field: 'v-select',
	iconSet: iconOptions?.defaultSet,
	loading: loadingProp.value,
	loadingWait: settings.loadingWait,
	tableField: settings.tableField,
	variant: settings.variant,
}));

const displayContainerClass = computed(() => useDisplayContainerClass({
	cell: settings.cell,
	cellUnderlineFullWidth: settings.cellUnderlineFullWidth,
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

const cardContainerClass = computed(() => useCardContainerClass({
	name: 'select',
	showField: showField.value,
}));

const inlineFieldsContainerStyle = computed(() => useInlineFieldsContainerStyle());
const cardContainerStyle = computed(() => fieldCoordinates.value);


// ------------------------------------------------ Key event to cancel/close field //
function closeField() {
	error.value = false;
	modelValue.value = originalValue;
	toggleField();
}


// ----------------------------------------------- Card Field//
const fieldCoordinates = ref<CSSProperties>();
const inlineFieldsContainer = ref<HTMLElement | null>(null);
const cardFieldRef = ref<HTMLElement | string | null>('body');


// ------------------------------------------------ Toggle the field //
function toggleField() {
	if (disabled.value || (settings.loadingWait && loadingProp.value)) {
		return;
	}

	fieldCoordinates.value = useCardContainerStyle({
		cardMinWidth: settings.cardProps?.minWidth,
		cardOffsetX: settings.cardOffsetX,
		cardOffsetY: settings.cardOffsetY,
		cardWidth: settings.cardProps?.width,
		field: inlineFieldsContainer.value,
	});

	const response = useToggleField({
		attrs,
		closeSiblings: closeSiblings.value,
		fieldOnly: settings.fieldOnly,
		props,
		showField,
		timeOpened: timeOpened.value,
	});

	showField.value = response.showField;
	timeOpened.value = response.timeOpened;

	if (closeSiblingsBus !== null && closeSiblings.value && showField.value && !settings.fieldOnly) {
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

if (closeSiblings.value) {
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
