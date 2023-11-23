<template>
	<div
		:class="saveFieldsContainerClass"
		v-bind="$attrs"
	>
		<v-btn
			v-if="!settings.hideSaveIcon"
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
				v-if="!loading"
				:color="hasErrors ? 'error' : settings.saveIconColor"
				:icon="theSaveIcon"
			/>
			<v-icon
				v-else
				:class="loadingIconClasses"
				:color="settings.loadingIconColor"
				:icon="theLoadingIcon"
			/>
		</v-btn>

		<v-btn
			v-if="!settings.hideCancelIcon"
			:class="cancelButtonClasses"
			:color="settings.cancelButtonColor"
			icon
			:size="settings.cancelButtonSize"
			:title="settings.cancelButtonTitle"
			:variant="settings.cancelButtonVariant"
			@click="closeField"
		>
			<v-icon
				v-if="settings.hideSaveIcon && loading"
				:class="loadingIconClasses"
				:color="settings.loadingIconColor"
				:icon="theLoadingIcon"
			/>
			<v-icon
				v-else
				class="text-default"
				:color="settings.cancelIconColor"
				:icon="theCancelIcon"
			/>
		</v-btn>
	</div>
</template>

<script setup lang="ts">
import { SaveFieldButtons } from '@/types';
import type { IconOptions } from 'vuetify';
import {
	useCancelButtonClass,
	useSaveFieldsContainerClass,
} from '../composables/classes';
import { useGetIcon } from '../composables/icons';

const attrs = useAttrs();
const emit = defineEmits([
	'close',
	'save',
]);

const props = withDefaults(defineProps<SaveFieldButtons>(), {});
const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const hasErrors = computed<boolean>(() => props.error);
const saveFieldsContainerClass = computed<object>(() => useSaveFieldsContainerClass());
const loading = computed(() => props.loading);

const settings = reactive({ ...attrs, ...props });

const loadingIconClasses = computed(() => {
	if (iconOptions?.defaultSet === 'fa') {
		return 'fa-spin';
	}

	if (iconOptions?.defaultSet === 'mdi') {
		return 'mdi-spin';
	}

	return '';
});

const cancelButtonClasses = computed(() => {
	return useCancelButtonClass({
		cancelButtonVariant: settings.cancelButtonVariant,
	});
});

const theCancelIcon = computed(() => {
	return useGetIcon({
		icon: props.cancelIcon,
		iconOptions,
		name: 'false',
	});
});

const theLoadingIcon = computed(() => {
	return useGetIcon({
		icon: props.loadingIcon,
		iconOptions,
		name: 'loading',
	});
});

const theSaveIcon = computed(() => {
	return useGetIcon({
		icon: props.saveIcon,
		iconOptions,
		name: 'save',
	});
});

function closeField() {
	emit('close');
}

function saveValue() {
	emit('save');
}
</script>
