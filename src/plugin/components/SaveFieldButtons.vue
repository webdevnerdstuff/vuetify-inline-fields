<template>
	<div
		class="icons-container d-flex align-center"
		v-bind="$attrs"
	>
		<v-btn
			class="ms-1"
			icon
			size="x-small"
			:title="loading ? 'Loading' : 'Save'"
			variant="text"
			@click="saveValue"
		>
			<v-icon
				v-if="!loading && !settings.hideSaveIcon"
				:color="settings.saveIconColor"
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
			icon
			size="x-small"
			variant="text"
			@click="closeField"
		>
			<v-icon
				v-if="!settings.fieldOnly"
				class="text-default"
				:icon="cancelIcon"
				title="Exit"
			/>
		</v-btn>
	</div>
</template>

<script setup lang="ts">

const attrs = useAttrs();
const emit = defineEmits([
	'close',
	'save',
]);

const props = defineProps({
	cancelIcon: {
		required: true,
		type: String,
	},
	fieldOnly: {
		required: true,
		type: Boolean,
	},
	hideSaveIcon: {
		required: true,
		type: Boolean,
	},
	loading: {
		required: true,
		type: Boolean,
	},
	loadingIcon: {
		required: true,
		type: String,
	},
	loadingIconColor: {
		required: true,
		type: String,
	},
	saveIcon: {
		required: true,
		type: String,
	},
	saveIconColor: {
		required: true,
		type: String,
	},
});

const settings = reactive({ ...attrs, ...props });

function closeField() {
	emit('close');
}

function saveValue() {
	emit('save');
}
</script>
