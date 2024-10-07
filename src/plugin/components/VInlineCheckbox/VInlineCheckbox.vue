<template>
	<div
		ref="inlineFieldsContainer"
		:class="inlineFieldsContainerClass"
		:style="inlineFieldsContainerStyle"
	>
		<div
			v-if="(!showField && !settings.fieldOnly) || settings.cardField"
			:class="displayContainerClass"
			@click="settings.cell ? toggleField() : undefined"
		>
			<div
				:class="displaySelectionControlClasses"
				@click="!settings.cell ? toggleField() : undefined"
			>
				<div class="v-selection-control__wrapper">
					<div
						v-if="settings.icons"
						class="v-inline-fields--boolean-icons-container"
						:class="displayValueClass"
						:style="displayValueStyle"
					>
						<BooleanIcons
							v-model="truthyModelValue"
							:false-value="settings.falseValue"
							:icon-false="settings.iconFalse"
							:icon-false-color="settings.iconFalseColor"
							:icon-false-title="settings.iconFalseTitle"
							:icon-true="settings.iconTrue"
							:icon-true-color="settings.iconTrueColor"
							:icon-true-title="settings.iconTrueTitle"
							:true-value="settings.trueValue"
						/>
					</div>

					<div
						v-else
						class="d-inline-flex align-center justify-center"
						:class="displayValueClass"
						:style="displayValueStyle"
					>
						{{ displayValue }}
					</div>
				</div>
			</div>
		</div>

		<div
			v-if="showField || settings.fieldOnly || settings.cardField"
			:class="fieldContainerClass"
		>
			<Teleport
				:disabled="!settings.cardField"
				:to="cardFieldRef"
			>
				<v-checkbox
					v-bind="bindingSettings"
					:color="settings.color"
					:density="settings.density"
					:disabled="loadingProp || disabled"
					:error="error"
					:false-icon="theFalseIcon"
					:false-value="settings.falseValue"
					:hide-details="settings.hideDetails"
					:label="settings.label"
					:model-value="truthyModelValue"
					:true-icon="theTrueIcon"
					:true-value="settings.trueValue"
					@update:model-value="saveValue"
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
							:hide-cancel-icon="settings.hideCancelIcon"
							:hide-save-icon="true"
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
				</v-checkbox>
			</Teleport>
		</div>

		<!-- Card Field-->
		<div
			v-if="settings.cardField"
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
import type { VInlineCheckboxProps } from './';
import { IconOptions, useTheme } from 'vuetify';
import {
	checkboxProps,
	defaultCardProps,
} from '@utils/props';
import SaveFieldButtons from '@components/common/SaveFieldButtons.vue';
import BooleanIcons from '@components/common/BooleanIcons.vue';
import { useTruthyModelValue } from '@composables/helpers';
import { useToggleField } from '@composables/methods';
import { useGetIcon } from '@composables/icons';
import {
	useCardContainerClass,
	useDisplayContainerClass,
	useDisplaySelectionControlClasses,
	useDisplayValueClass,
	useFieldContainerClass,
	useInlineFieldsContainerClass,
} from '@composables/classes';
import {
	useDisplayValueStyles,
	useCardContainerStyle,
	useInlineFieldsContainerStyle,
} from '@composables/styles';
import inlineEmits from '@utils/emits';
import { useBindingSettings } from '@composables/bindings';
import { useWindowSize } from '@vueuse/core';
import { globalOptions } from '../../';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);
const injectedOptions = inject(globalOptions, {});

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const theme = useTheme();

const props = withDefaults(defineProps<VInlineCheckboxProps>(), { ...checkboxProps });
const settings = reactive({ ...attrs, ...props, ...injectedOptions });

watchEffect(() => {
	Object.assign(settings, { ...attrs, ...props, ...injectedOptions });
});

const disabled = computed(() => props.disabled);
const loadingProp = computed(() => props.loading);
const underlineColor = computed(() => settings.underlineColor);

const error = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);


// ------------------------------------------------ Binding Events & Props //
const bindingSettings = computed(() => useBindingSettings(settings));
const bindingCard = computed(() => ({
	...defaultCardProps,
	...props.cardProps,
}) as SharedProps['cardProps']);


// ------------------------------------------------ Loading //
watch(() => loadingProp.value, (newVal, oldVal) => {
	if (!newVal && oldVal && showField.value) {
		toggleField();
	}
});


// ------------------------------------------------ Icons //
const theFalseIcon = computed(() => {
	return useGetIcon({
		icon: props.trueIcon,
		iconOptions,
		name: 'checkboxFalse',
	});
});

const theTrueIcon = computed(() => {
	return useGetIcon({
		icon: props.iconTrue,
		iconOptions,
		name: 'checkboxTrue',
	});
});

// ------------------------------------------------ The displayed value //
const displayValue = computed(() => {
	return modelValue.value == settings.trueValue;
});

const truthyModelValue = computed(() => useTruthyModelValue({
	modelValue,
	trueValue: settings.trueValue,
}));


// ------------------------------------------------ Class & Styles //
const inlineFieldsContainerClass = computed(() => useInlineFieldsContainerClass({
	cell: settings.cell && !showField.value,
	density: settings.density,
	disabled: disabled.value,
	field: 'v-checkbox',
	loading: loadingProp.value,
	loadingWait: settings.loadingWait,
	tableField: settings.tableField,
}));

const displayContainerClass = computed(() => useDisplayContainerClass({
	cell: settings.cell,
	cellUnderlineFullWidth: settings.cellUnderlineFullWidth,
	density: settings.density,
	field: 'v-checkbox',
}));

const displaySelectionControlClasses = useDisplaySelectionControlClasses({
	density: settings.density,
});

const fieldContainerClass = computed(() => useFieldContainerClass({
	active: showField.value,
	name: 'checkbox',
}));

const displayValueClass = computed(() => useDisplayValueClass(
	'checkbox',
	settings.valueColor,
	{
		error,
	}
));

const cardContainerClass = computed(() => useCardContainerClass({
	name: 'checkbox',
	showField: showField.value,
}));

const inlineFieldsContainerStyle = computed(() => useInlineFieldsContainerStyle());

const displayValueStyle = computed(() => useDisplayValueStyles({
	color: settings.color,
	error,
	theme,
	underlineColor: underlineColor.value,
	underlineStyle: settings.underlineStyle,
	underlineWidth: settings.underlineWidth,
	underlined: settings.underlined,
}));

const cardContainerStyle = computed(() => fieldCoordinates.value);


// ------------------------------------------------ Key event to cancel/close field //
function closeField() {
	error.value = false;
	toggleField();
}


// ----------------------------------------------- Card Field//
const fieldCoordinates = ref<CSSProperties>();
const inlineFieldsContainer = ref<HTMLElement | null>(null);
const cardFieldRef = ref<HTMLElement | string | null>('body');

const windowSize = useWindowSize();

watch(() => windowSize, () => {
	fieldCoordinates.value = useCardContainerStyle({
		cardMinWidth: settings.cardProps?.minWidth,
		cardOffsetX: settings.cardOffsetX,
		cardOffsetY: settings.cardOffsetY,
		cardWidth: settings.cardProps?.width,
		field: inlineFieldsContainer.value,
		name: 'checkbox',
	});
}, { deep: true });



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
		name: 'checkbox',
	});

	const response = useToggleField({
		attrs,
		closeSiblings: settings.closeSiblings,
		fieldOnly: settings.fieldOnly,
		props,
		showField,
		timeOpened: timeOpened.value,
	});

	showField.value = response.showField;
	timeOpened.value = response.timeOpened;

	if (closeSiblingsBus !== null && settings.closeSiblings && showField.value && !settings.fieldOnly) {
		closeSiblingsBus.emit(response.timeOpened);
	}
}


// ------------------------------------------------ Save the value / Emit update //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveValue(value: any) {
	modelValue.value = value;

	emit('update', value);

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
		toggleField();
	}
}

onUnmounted(() => {
	if (typeof unsubscribeBus !== 'undefined') {
		closeSiblingsBus.off(closeSiblingsListener);
	}
});
</script>

<style lang="scss" scoped></style>
