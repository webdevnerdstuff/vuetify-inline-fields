<template>
	<div
		v-if="!showField && !settings.fieldOnly"
		class="d-inline-flex align-center justify-center"
	>
		<span
			v-if="icons"
			class="v-inline-field-value-icons pb-1"
			:class="fieldDisplayClass"
			:style="fieldDisplayStyle"
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
		</span>

		<span
			v-else
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
		class="d-inline-flex align-center"
		:class="fieldContainerClass"
	>
		<v-switch
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
			:loading="loading"
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
					class="ms-1"
					:color="settings.cancelButtonColor"
					icon
					:size="settings.cancelButtonSize"
					:title="settings.cancelButtonTitle"
					:variant="settings.cancelButtonVariant"
					@click="toggleField"
				>
					<v-icon
						v-if="!settings.fieldOnly"
						:color="settings.cancelIconColor"
						:icon="cancelIcon"
					/>
				</v-btn>
			</template>
		</v-switch>

	</div>
</template>

<script setup lang="ts">
import {
	CloseSiblingsBus,
	FieldValue,
	TimeOpened,
	UseSaveValue,
	VInlineSwitchProps,
} from '@/types';
import { switchProps } from './utils/props';
import { BooleanIcons } from './components/index';
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
const props = withDefaults(defineProps<VInlineSwitchProps>(), { ...switchProps });
let settings = reactive({ ...attrs, ...props });

const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);


// ------------------------------------------------ The displayed value //
const displayValue = computed(() => {
	return modelValue.value == settings.trueValue;
});


// ------------------------------------------------ Class & Styles //
const fieldContainerClass = computed(() => useFieldContainerClass('switch', showField.value));
const fieldDisplayClass = computed(() => useDisplayContainerClass(
	'switch',
	settings.valueColor,
	{
		disabled: settings.disabled,
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
function saveValue(value: undefined) {
	modelValue.value = value;

	loading.value = true;
	emit('loading', loading.value);

	useSaveValue({
		emit: emit as keyof UseSaveValue,
		name: settings.name,
		settings,
		value: value as keyof UseSaveValue,
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
