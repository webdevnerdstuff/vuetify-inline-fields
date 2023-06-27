<template>
	<v-row>
		<v-col
			id="props"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>

			<div>
				Most of the Vuetify props for each component work as intended. Any specified props below may have different
				default values. Please refer to the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation for each components specific props.
			</div>
		</v-col>
		<v-col cols="12">

			<PropsTable
				:headers="propsStore.propsSupported.headers"
				:items="propsStore.sharedProps"
				section-id="props-shared"
				section-title="Shared Props"
				subtitle="These props are used by all components"
			/>

			<PropsTable
				:headers="propsStore.propsSupported.headers"
				:items="propsStore.saveAndLoadingIconProps"
				section-id="props-save-and-loading-icon"
				section-title="Save &amp; Loading Props"
				subtitle="These are all props for the for the <code class='ic'>VInlineSelect</code>, <code class='ic'>VInlineTextarea</code>, and <code class='ic'>VInlineTextField</code> components"
			/>

			<PropsTable
				:headers="propsStore.propsSupported.headers"
				:items="propsStore.trueFalseIconProps"
				section-id="props-true-false-icon"
				section-title="True/False Icon Props"
				subtitle="These are all props for the for the <code class='ic'>VInlineCheckbox</code> and <code class='ic'>VInlineSwitch</code> components"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';
import PropsTable from '@/documentation/components/PropsTable.vue';

const classes = inject('classes');
const store = useCoreStore();
const propsStore = usePropsStore();
</script>

<style lang="scss" scoped>
</style>
