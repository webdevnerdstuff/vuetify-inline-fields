<template>
	<v-col
		id="components-v-inline-textarea"
		class="mb-5"
		cols="12"
	>
		<h2
			class="mb-0"
			:class="classes.h2"
		>
			<a
				:class="classes.headerA"
				href="#components-v-inline-textarea"
			>#</a>
			VInlineTextarea
		</h2>

		<PropsTable
			:headers="propsStore.propsSupported.headers"
			:items="propsStore.vInlineTextareaProps"
			section-id="inline-textarea-props"
			section-title="Props"
			subtitle="These are all props for the <code>VInlineTextarea</code> component"
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
