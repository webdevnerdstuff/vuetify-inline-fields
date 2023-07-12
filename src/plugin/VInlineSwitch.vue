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
			<div :class="displaySelectionControlClasses">
				<div class="v-selection-control__wrapper">
					<div
						v-if="icons"
						:class="displayValueClass"
						:style="displayValueStyle"
						@click="toggleField"
					>
						<BooleanIcons
							v-model="truthyModelValue"
							:icon-false="settings.iconFalse"
							:icon-false-color="settings.iconFalseColor"
							:icon-false-title="settings.iconFalseTitle"
							:icon-true="settings.iconTrue"
							:icon-true-color="settings.iconTrueColor"
							:icon-true-title="settings.iconTrueTitle"
						/>
					</div>

					<div
						v-else
						class="d-inline-flex align-center justify-center"
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
			<Teleport
				:disabled="!settings.cardField"
				:to="cardFieldRef"
			>
				<v-switch
					v-bind="bindingSettings"
					:color="settings.color"
					:density="settings.density"
					:disabled="loadingProp"
					:error="error"
					:false-icon="settings.falseIcon"
					:false-value="settings.falseValue"
					:hide-details="settings.hideDetails"
					:label="settings.label"
					:loading="loadingProp"
					:model-value="truthyModelValue"
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
						<v-btn
							v-if="!settings.fieldOnly"
							class="ms-3"
							:color="settings.cancelButtonColor"
							icon
							:size="settings.cancelButtonSize"
							:title="settings.cancelButtonTitle"
							:variant="settings.cancelButtonVariant"
							@click="toggleField"
						>
							<v-icon
								:color="settings.cancelIconColor"
								:icon="theCancelIcon"
							/>
						</v-btn>
					</template>
				</v-switch>
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
	VInlineSwitchProps,
} from '@/types';
import { IconOptions, useTheme } from 'vuetify';
import { switchProps } from './utils/props';
import { BooleanIcons } from './components/index';
import { useTruthyModelValue } from './composables/helpers';
import { useToggleField } from './composables/methods';
import { useGetIcon } from './composables/icons';
import {
	useDisplayContainerClass,
	useDisplaySelectionControlClasses,
	useDisplayValueClass,
	useFieldContainerClass,
	useInlineFieldsContainerClass,
} from './composables/classes';
import {
	useDisplayValueStyles,
	useCardContainerStyle,
	useInlineFieldsContainerStyle,
} from './composables/styles';
import inlineEmits from './utils/emits';
import { useBindingSettings } from './composables/bindings';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const theme = useTheme();

const props = withDefaults(defineProps<VInlineSwitchProps>(), { ...switchProps });
let settings = reactive({ ...attrs, ...props });
const loadingProp = computed(() => props.loading);

const error = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);


// ------------------------------------------------ Binding Events & Props //
const bindingSettings = computed(() => useBindingSettings(settings));
const bindingCard = computed(() => settings.cardProps);


// ------------------------------------------------ Loading //
watch(() => loadingProp.value, (newVal, oldVal) => {
	if (!newVal && oldVal && showField.value) {
		toggleField();
	}
});


// ------------------------------------------------ Icons //
const theCancelIcon = computed(() => {
	return useGetIcon({
		icon: settings.cancelIcon,
		iconOptions,
		name: 'false',
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
	density: settings.density,
	disabled: settings.disabled,
	field: 'v-switch',
	loading: loadingProp.value,
	loadingWait: settings.loadingWait,
	tableField: settings.tableField,
}));

const displayContainerClass = computed(() => useDisplayContainerClass({
	density: settings.density,
	field: 'v-switch',
}));

const displaySelectionControlClasses = useDisplaySelectionControlClasses({
	density: settings.density,
});

const fieldContainerClass = computed(() => useFieldContainerClass({
	active: showField.value,
	name: 'switch',
}));

const displayValueClass = computed(() => useDisplayValueClass(
	'switch',
	settings.valueColor,
	{
		error,
	}
));

const inlineFieldsContainerStyle = computed(() => useInlineFieldsContainerStyle());

const displayValueStyle = computed(() => useDisplayValueStyles({
	color: settings.color,
	error,
	theme,
	underlineColor: settings.underlineColor,
	underlineStyle: settings.underlineStyle,
	underlineWidth: settings.underlineWidth,
	underlined: settings.underlined,
}));

const cardContainerStyle = computed(() => fieldCoordinates.value);


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
		showField: showField.value,
		timeOpened: timeOpened.value,
	});

	settings = { ...settings, ...response.settings };
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

<style lang="scss" scoped>
</style>
