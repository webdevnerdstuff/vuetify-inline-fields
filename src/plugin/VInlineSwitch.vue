<template>
	<div
		v-if="!showField && !settings.fieldOnly"
		class="d-inline-flex align-center justify-center"
	>
		<span
			v-if="icons"
			class="inline-field-value-icons pb-1"
			:class="inlineFieldValueClass"
			:style="inlineFieldValueStyle"
			@click="toggleField"
		>
			<BooleanIcons v-model="value" />
		</span>

		<span
			v-else
			class="pb-1 d-inline-flex align-center justify-center"
			:class="inlineFieldValueClass"
			:style="inlineFieldValueStyle"
			@click="toggleField"
		>
			{{ value }}
		</span>
	</div>

	<div
		v-else
		class="d-inline-flex align-center"
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
		/>

		<v-icon
			v-if="!settings.fieldOnly"
			class="ms-4"
			:icon="cancelIcon"
			size="x-small"
			title="Exit"
			@click="toggleField"
		/>

	</div>
</template>

<script setup lang="ts">
import {
	FieldValue,
	TimeOpened,
	UseSaveValue,
} from '@/types';
import { BooleanIcons } from './components/index';
import { switchProps } from './utils/props';
import {
	useInlineFieldValueClass,
} from './composables/classes';
import {
	useSaveValue,
	useToggleField,
} from './composables/methods';
import {
	useInlineValueStyles,
} from './composables/styles';

import {
	inlineEmits,
	// inlineWatch,
} from './shared';


const modelValue = defineModel<FieldValue>();

const value = computed(() => {
	return modelValue.value == settings.trueValue;
});

const attrs = useAttrs();
const props = defineProps({ ...switchProps });
const emit = defineEmits([...inlineEmits]);
let settings = reactive({ ...attrs, ...props });

const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);


const inlineFieldValueClass = computed(() => useInlineFieldValueClass(
	settings.valueColor,
	error.value,
));
const inlineFieldValueStyle = computed(() => useInlineValueStyles(
	settings.underlineColor,
	settings.underlineStyle,
	settings.underlineWidth,
	settings.color,
	error.value,
	settings.underlined,
));

function toggleField() {
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

function saveValue(value) {
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
