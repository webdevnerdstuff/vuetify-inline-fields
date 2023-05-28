<template>
	<div
		v-if="!showField && !settings.fieldOnly"
		class="d-inline-flex align-center justify-center"
	>
		<span
			v-if="icons"
			class="inline-field-value-icons pb-1"
			:class="fieldDisplayClass"
			:style="fieldDisplayStyle"
			@click="toggleField"
		>
			<BooleanIcons
				v-model="value"
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
			{{ value }}
		</span>
	</div>

	<div
		v-else
		class="d-inline-flex align-center"
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
						:icon="settings.cancelIcon"
					/>
				</v-btn>
			</template>
		</v-checkbox>
	</div>
</template>

<script setup lang="ts">
import {
	FieldValue,
	TimeOpened,
	UseSaveValue,
	VInlineCheckboxProps,
} from '@/types';
import { checkboxProps } from './utils/props';
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
// import {
// 	inlineEmits,
// 	// inlineWatch,
// } from './shared';


const modelValue = defineModel<FieldValue>();

const value = computed(() => {
	return modelValue.value == settings.trueValue;
});

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...inlineEmits]);
const props = withDefaults(defineProps<VInlineCheckboxProps>(), { ...checkboxProps });
let settings = reactive({ ...attrs, ...props });


const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);


const fieldContainerClass = computed(() => useFieldContainerClass('checkbox', showField.value));
const fieldDisplayClass = computed(() => useDisplayContainerClass(
	'checkbox',
	settings.valueColor,
	settings.disabled,
	error.value,
));
const fieldDisplayStyle = computed(() => useFieldDisplayStyles(
	settings.underlineColor,
	settings.underlineStyle,
	settings.underlineWidth,
	settings.color,
	error.value,
	settings.underlined,
));

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
}


function saveValue(value: undefined) {
	modelValue.value = value;

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
</script>

<style lang="scss" scoped>
</style>
