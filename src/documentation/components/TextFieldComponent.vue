<template>
	<v-col
		id="components-v-inline-text-field"
		class="mb-5"
		cols="12"
	>
		<h2
			class="mb-0"
			:class="classes.h2"
		>
			<a
				:class="classes.headerA"
				href="#components-v-inline-text-field"
			>#</a>
			VInlineTextField
		</h2>

		<PropsTable
			:headers="propsStore.propsSupported.headers"
			:items="propsStore.vInlineTextFieldProps"
			section-id="inline-text-field-props"
			section-title="Props"
			subtitle="These are all props for the <code>VInlineTextField</code> component"
		/>
	</v-col>
</template>

<script setup>
import { inject } from 'vue';
import { usePropsStore } from '@/stores/props';
import PropsTable from '@/documentation/components/PropsTable.vue';

const classes = inject('classes');
const propsStore = usePropsStore();
</script>

<style lang="scss" scoped>
</style>
