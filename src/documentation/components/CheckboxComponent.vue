<template>
	<v-col
		id="components-v-inline-checkbox"
		class="mb-5"
		cols="12"
	>
		<h2
			class="mb-0"
			:class="classes.h2"
		>
			<a
				:class="classes.headerA"
				href="#components-v-inline-checkbox"
			>#</a>
			VInlineCheckbox
		</h2>

		<PropsTable
			:headers="propsStore.propsSupported.headers"
			:items="propsStore.vInlineCheckboxProps"
			section-id="inline-checkbox-props"
			section-title="Props"
			subtitle="These are all props for the <code>VInlineCheckbox</code> component"
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
