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
	</v-col>

	<v-col cols="12">
		<v-card>
			<v-card-title>Component</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="2">
						<VInlineTextField
							v-model="values.textField"
							align-items="flex-end"
							:density="density"
							:loading-wait="false"
							:table-field="false"
							:variant="variant"
						></VInlineTextField>
					</v-col>

					<v-col cols="2">
						<div>
							<v-text-field
								v-model="values.textField"
								:density="density"
								hide-details
								:variant="variant"
							></v-text-field>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-col>

	<v-col cols="12">
		<PropsTable
			:headers="propsStore.propsSupported.headers"
			:items="propsStore.vInlineTextFieldProps"
			section-id="inline-text-field-props"
			section-title="Props"
			subtitle="These are all props for the <code class='ic'>VInlineTextField</code> component"
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
