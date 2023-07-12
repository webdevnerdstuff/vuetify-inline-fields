<template>
	<div
		ref="inlineFieldsContainer"
		:class="inlineFieldsContainerClass"
		:style="inlineFieldsContainerStyle"
	>
		<div
			v-if="!showField && !settings.fieldOnly"
			:class="displayContainerClass"
		>
			<div :class="displayInputControlClasses">
				<DisplayedValue
					v-bind="bindingDisplay"
					@toggleField="toggleField"
				/>
			</div>
		</div>

		<div
			v-else
			:class="fieldContainerClass"
		>
			<Teleport
				:disabled="!settings.cardField"
				:to="cardFieldRef"
			>
				<v-text-field
					v-bind="bindingSettings"
					v-model="modelValue"
					:autofocus="!settings.fieldOnly || settings.autofocus"
					:clear-icon="theClearIcon"
					:disabled="loadingProp"
					:error="error"
					:error-messages="internalErrorMessages"
					:label="settings.label"
					:loading="loadingProp"
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
							:loading="loadingProp"
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
			</Teleport>
		</div>

		<!-- Card Field-->
		<Teleport
			v-if="settings.cardField"
			to="body"
		>
			<div
				class="v-inline-fields--card-container"
				:class="!showField ? 'd-none' : ''"
				:style="cardContainerStyle"
			>
				<v-card v-bind="bindingCard">
					<v-card-text>
						<div ref="cardFieldRef"></div>
					</v-card-text>
				</v-card>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	VInlineTextFieldProps,
} from '@/types';
import { IconOptions } from 'vuetify';
import { textFieldProps } from './utils/props';
import { DisplayedValue, SaveFieldButtons } from './components/index';
import {
	useCheckForErrors,
	useToggleField,
	useTruncateText,
} from './composables/methods';
import {
	useDisplayContainerClass,
	useDisplayInputControlClasses,
	useFieldContainerClass,
	useInlineFieldsContainerClass,
} from './composables/classes';
import {
	useCardContainerStyle,
	useInlineFieldsContainerStyle,
} from './composables/styles';
import inlineEmits from './utils/emits';
import { useBindingSettings } from './composables/bindings';
import { useGetIcon } from './composables/icons';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const props = withDefaults(defineProps<VInlineTextFieldProps>(), { ...textFieldProps });
let settings = reactive({ ...attrs, ...props });
const loadingProp = computed(() => props.loading);

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
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
const theClearIcon = computed<string>(() => {
	return useGetIcon({
		icon: props.clearIcon,
		iconOptions,
		name: 'clear',
	});
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


// ------------------------------------------------ Binding Events & Props //
const bindingSettings = computed(() => useBindingSettings(settings));

const bindingDisplay = computed(() => {
	return {
		color: settings.color,
		displayAppendIcon: props.displayAppendIcon,
		displayAppendIconColor: props.displayAppendIconColor,
		displayAppendIconSize: props.displayAppendIconSize,
		displayAppendInnerIcon: props.displayAppendInnerIcon,
		displayAppendInnerIconColor: props.displayAppendInnerIconColor,
		displayAppendInnerIconSize: props.displayAppendInnerIconSize,
		displayPrependIcon: props.displayPrependIcon,
		displayPrependIconColor: props.displayPrependIconColor,
		displayPrependIconSize: props.displayPrependIconSize,
		displayPrependInnerIcon: props.displayPrependInnerIcon,
		displayPrependInnerIconColor: props.displayPrependInnerIconColor,
		displayPrependInnerIconSize: props.displayPrependInnerIconSize,
		displayValue: displayValue.value,
		empty: empty.value,
		error: error.value,
		field: 'v-text-field',
		underlineColor: settings.underlineColor,
		underlineStyle: settings.underlineStyle,
		underlineWidth: settings.underlineWidth,
		underlined: settings.underlined,
		valueColor: settings.valueColor,
	};
});

const bindingCard = computed(() => settings.cardProps);


// ------------------------------------------------ Class & Styles //
const inlineFieldsContainerClass = computed(() => useInlineFieldsContainerClass({
	density: settings.density,
	disabled: settings.disabled,
	field: 'v-text-field',
	iconSet: iconOptions?.defaultSet,
	loading: loadingProp.value,
	loadingWait: settings.loadingWait,
	tableField: settings.tableField,
	variant: settings.variant,
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
const cardFieldRef = ref<HTMLElement | null>(null);


// ------------------------------------------------ Toggle the field //
function toggleField() {
	if (settings.disabled || (settings.loadingWait && loadingProp.value)) {
		return;
	}

	fieldCoordinates.value = useCardContainerStyle({
		cardMinWidth: settings.cardProps?.minWidth,
		cardWidth: settings.cardProps?.width,
		field: inlineFieldsContainer.value,
	});

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
</style>
