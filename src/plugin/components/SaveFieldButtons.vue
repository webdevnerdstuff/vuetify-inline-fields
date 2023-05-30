<template>
	<div
		:class="saveFieldsContainerClass"
		v-bind="$attrs"
	>
		<v-btn
			class="ms-1"
			:color="settings.saveButtonColor"
			:disabled="hasErrors"
			icon
			:size="settings.saveButtonSize"
			:title="loading ? 'Loading' : settings.saveButtonTitle"
			:variant="settings.saveButtonVariant"
			@click="saveValue"
		>
			<v-icon
				v-if="!loading && !settings.hideSaveIcon"
				:color="hasErrors ? 'error' : settings.saveIconColor"
				:icon="saveIcon"
			/>
			<v-icon
				v-else-if="!settings.hideSaveIcon"
				:color="settings.loadingIconColor"
				:icon="loadingIcon"
			/>
		</v-btn>
		<v-btn
			class="ms-1"
			:color="settings.cancelButtonColor"
			icon
			:size="settings.cancelButtonSize"
			:title="settings.cancelButtonTitle"
			:variant="settings.cancelButtonVariant"
			@click="closeField"
		>
			<v-icon
				class="text-default"
				:color="settings.cancelIconColor"
				:icon="cancelIcon"
			/>
		</v-btn>
	</div>
</template>

<script setup lang="ts">
import { SaveFieldButtons } from '@/types';
import { useSaveFieldsContainerClass } from '../composables/classes';

const attrs = useAttrs();
const emit = defineEmits([
	'close',
	'save',
]);

const props = withDefaults(defineProps<SaveFieldButtons>(), {});

const settings = reactive({ ...attrs, ...props });

const hasErrors = computed<boolean>(() => props.error);
const saveFieldsContainerClass = computed<object>(() => useSaveFieldsContainerClass());

function closeField() {
	emit('close');
}

function saveValue() {
	emit('save');
}
</script>
