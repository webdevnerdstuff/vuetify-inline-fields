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
	</v-col>

	<v-col cols="12">
		<v-card>
			<v-card-title>Component</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="2">
						<VInlineTextarea
							v-model="values.textField"
							align-items="flex-start"
							:density="density"
							do-not-save
							rows="1"
							:table-field="true"
							:variant="variant"
						></VInlineTextarea>
					</v-col>

					<v-col cols="2">
						<div>

							<v-textarea
								v-model="values.textField"
								:density="density"
								hide-details
								:variant="variant"
							></v-textarea>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-col>

	<v-col cols="12">
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

const density = ref('compact');
const variant = ref('underlined');

const values = reactive({
	boolean: true,
	select: {
		abbr: 'FL',
		state: 'Florida',
	},
	textField: 'Hello World',
});
</script>

<style lang="scss" scoped>
</style>
