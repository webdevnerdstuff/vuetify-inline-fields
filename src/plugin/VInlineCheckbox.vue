<template>
	<div
		:class="inlineFieldsContainerClass"
		:style="inlineFieldsContainerStyle"
	>
		<div
			v-if="!showField && !settings.fieldOnly"
			class="v-inline-fields--container-display-container"
			:class="displayContainerClass"
		>
			<div :class="displaySelectionControlClasses">
				<div class="v-selection-control__wrapper">
					<div
						v-if="icons"
						class="v-inline-fields--container-display-container-value-icons"
						:class="displayValueClass"
						:style="displayValueStyle"
						@click="toggleField"
					>
						<BooleanIcons
							v-model="displayValue"
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
			<v-checkbox
				v-bind="$attrs"
				v-model="modelValue"
				:color="settings.color"
				:density="settings.density"
				:disabled="loading"
				:error="error"
				:false-icon="settings.falseIcon"
				:false-value="settings.falseValue"
				:hide-details="settings.hideDetails"
				:label="settings.label"
				:true-icon="settings.trueIcon"
				:value="settings.trueValue"
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
						class="ms-1"
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
			</v-checkbox>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	VInlineCheckboxProps,
} from '@/types';
import type { IconOptions } from 'vuetify';
import { checkboxProps } from './utils/props';
import { BooleanIcons } from './components/index';
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
	useInlineFieldsContainerStyle,
} from './composables/styles';
import inlineEmits from './utils/emits';


const modelValue = defineModel<FieldValue>();

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);
const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const props = withDefaults(defineProps<VInlineCheckboxProps>(), { ...checkboxProps });
let settings = reactive({ ...attrs, ...props });

const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);


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


// ------------------------------------------------ Class & Styles //
const inlineFieldsContainerClass = computed(() => useInlineFieldsContainerClass({
	density: settings.density,
	disabled: settings.disabled,
	field: 'v-checkbox',
	tableField: settings.tableField,
}));

const displayContainerClass = computed(() => useDisplayContainerClass({
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


// ------------------------------------------------ Save the value / Emit update //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveValue(value: any) {
	modelValue.value = value;

	emit('update', value);
	toggleField();
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
