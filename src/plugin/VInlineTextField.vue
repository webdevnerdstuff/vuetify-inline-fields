<template>
	<div
		v-if="!showField && !settings.fieldOnly"
		class="d-inline-flex align-center justify-center"
	>
		<span
			class="pb-1 d-inline-flex align-center justify-center"
			:class="inlineFieldValueClass"
			:style="inlineFieldValueStyle"
			@click="toggleField"
		>
			{{ value }}
		</span>
	</div>

	<div v-else>
		<v-text-field
			v-bind="$attrs"
			v-model="modelValue"
			:autofocus="!settings.fieldOnly || settings.autofocus"
			:color="settings.color"
			:density="settings.density"
			:disabled="loading"
			:error="error"
			:hide-details="settings.hideDetails"
			:label="settings.label"
			:loading="loading"
			:variant="settings.variant"
			width="100%"
			@keyup.enter="saveValue"
			@keyup.esc="closeField"
		>
			<template #append>
				<SaveFieldButtons
					:cancel-icon="settings.cancelIcon"
					:field-only="settings.fieldOnly"
					:hide-save-icon="settings.hideSaveIcon"
					:loading="loading"
					:loading-icon="settings.loadingIcon"
					:loading-icon-color="settings.loadingIconColor"
					:save-icon="settings.saveIcon"
					:save-icon-color="settings.saveIconColor"
					@close="closeField"
					@save="saveValue"
				/>
			</template>
		</v-text-field>
	</div>
</template>

<script setup lang="ts">
import {
	FieldValue,
	TimeOpened,
	UseSaveValue,
} from '@/types';
import { SaveFieldButtons } from './components/index';
import { textFieldProps } from './utils/props';
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
	if (modelValue.value) {
		empty.value = false;
		return modelValue.value;
	}

	empty.value = true;
	return settings.emptyText;
});

const attrs = useAttrs();
const props = defineProps({ ...textFieldProps });
const emit = defineEmits([...inlineEmits]);
let settings = reactive({ ...attrs, ...props });

const empty = ref<boolean>(false);
const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const showField = ref<boolean>(false);
const timeOpened = ref<TimeOpened>(null);
let originalValue = modelValue.value;


const inlineFieldValueClass = computed(() => useInlineFieldValueClass(
	settings.valueColor,
	error.value,
	empty.value,
));
const inlineFieldValueStyle = computed(() => useInlineValueStyles(
	settings.underlineColor,
	settings.underlineStyle,
	settings.underlineWidth,
	settings.color,
	error.value,
	settings.underlined,
));

function closeField() {
	modelValue.value = originalValue;
	toggleField();
}

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

function saveValue() {
	originalValue = modelValue.value;
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
:deep(.v-field__append-inner) {
	padding: 0 !important;
}

.icons-container {
	height: 100%;
}
</style>
