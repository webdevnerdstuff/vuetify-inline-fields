<template>
	<v-col
		id="components-v-inline-select"
		class="mb-5"
		cols="12"
	>
		<h2
			class="mb-0"
			:class="classes.h2"
		>
			<a
				:class="classes.headerA"
				href="#components-v-inline-select"
			>#</a>
			VInlineSelect
		</h2>
	</v-col>

	<v-col cols="12">
		<v-card>
			<v-card-title>Component</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="2">
						<VInlineSelect
							v-model="values.select"
							align-items="flex-end"
							:density="density"
							item-title="state"
							item-value="abbr"
							:items="items"
							:loading-wait="false"
							return-object
							:table-field="false"
							:variant="variant"
						>
						</VInlineSelect>
					</v-col>

					<v-col cols="2">
						<!-- <div style="border: 1px solid #f00;"> -->
						<div>
							<v-select
								v-model="values.select"
								:density="density"
								hide-details
								item-title="state"
								item-value="abbr"
								:items="items"
								label="VSelect"
								return-object
								single-line
								:variant="variant"
							></v-select>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-col>

	<v-col cols="12">
		<PropsTable
			:headers="propsStore.propsSupported.headers"
			:items="propsStore.vInlineSelectProps"
			section-id="inline-select-props"
			section-title="Props"
			subtitle="These are all props for the <code class='ic'>VInlineSelect</code> component"
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
		abbr: 'CA',
		state: 'California',
	},
	textField: 'Hello World',
});

const items = reactive([
	{
		abbr: 'GA',
		state: 'Georgia',
	},
	{
		abbr: 'NE',
		state: 'Nebraska',
	},
	{
		abbr: 'CA',
		state: 'California',
	},
	{
		abbr: 'NY',
		state: 'New York',
	},
]);
</script>

<style lang="scss" scoped>
</style>
