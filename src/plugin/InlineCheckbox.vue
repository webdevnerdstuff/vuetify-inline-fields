<template>
	<div
		v-if="!showField && !settings.fieldOnly"
		class="d-inline-flex align-center justify-center"
	>
		<span
			v-if="icons"
			class="inline-field-value inline-field-value-icons pb-1"
			:class="inlineFieldValueClass"
			:style="inlineFieldValueStyle"
			@click="toggleField"
		>
			<BooleanIcons v-model="value" />
		</span>

		<span
			v-else
			class="inline-field-value pb-1 d-inline-flex align-center justify-center"
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
		</v-checkbox>

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
import { BooleanIcons } from './components/index';
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
	checkboxProps,
	inlineEmits,
	// inlineMethods,
	// inlineWatch,
} from './shared';

const modelValue = defineModel<boolean | number>();

const value = computed(() => {
	console.log(modelValue.value, settings.trueValue);
	return modelValue.value == settings.trueValue;
});

const attrs = useAttrs();
const props = defineProps({ ...checkboxProps });
const emits = defineEmits([...inlineEmits]);
let settings = reactive({ ...attrs, ...props });


const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<unknown | null>(null);


const inlineFieldValueClass = computed(() => useInlineFieldValueClass(
	settings.valueColor,
	settings.error,
));
const inlineFieldValueStyle = computed(() => useInlineValueStyles(
	settings.underlineColor,
	settings.color,
	settings.error,
	settings.underlined,
));

function toggleField() {
	const response = useToggleField(
		settings.item.id,
		showField.value,
		attrs,
		props,
		timeOpened.value,
		settings.closeSiblings,
		settings.fieldOnly,
	);

	settings = response.settings;
	showField.value = response.showField;
	timeOpened.value = response.timeOpened;
}


function saveValue(value) {
	modelValue.value = value;

	loading.value = true;
	emits('loading', loading.value);

	useSaveValue(settings, emits, settings.name, value)
		.then((response) => {
			console.log('done', response);
			loading.value = false;
			emits('loading', loading.value);
			toggleField();
		});
}
</script>

<style lang="scss" scoped>
.inline-field-value {
	border-bottom-style: dotted;
	border-bottom-width: 1px;
	cursor: pointer;
}
</style>
