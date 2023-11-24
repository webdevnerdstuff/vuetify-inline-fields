<template>
	<v-col
		id="components-v-inline-autocomplete"
		class="mb-5"
		cols="12"
	>
		<h2
			class="mb-0"
			:class="classes.h2"
		>
			<a
				:class="classes.headerA"
				href="#components-v-inline-autocomplete"
			>#</a>
			VInlineAutocomplete
		</h2>
	</v-col>

	<v-col cols="12">
		<v-card>
			<v-card-title>Component</v-card-title>
			<v-card-text>
				<v-row>
					<v-col
						class="d-flex align-end"
						cols="2"
					>
						<VInlineAutocomplete
							v-model="values.select"
							:density="density"
							item-title="state"
							item-value="abbr"
							:items="items"
							:loading-wait="false"
							return-object
							:table-field="false"
							:variant="variant"
						>
						</VInlineAutocomplete>
					</v-col>

					<v-col cols="2">
						<!-- <div style="border: 1px solid #f00;"> -->
						<div>
							<v-autocomplete
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
							></v-autocomplete>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-col>

	<v-col cols="12">
		<CodeBlock
			class="mb-6"
			:code="exampleCode"
			:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
			label="Basic Example"
			lang="html"
			:prismjs="codeBlockSettings.plugin === 'prismjs'"
			:theme="codeBlockSettings.theme"
		></CodeBlock>
	</v-col>

	<v-col cols="12">
		<PropsTable
			:headers="propsStore.propsSupported.headers"
			:items="propsStore.vInlineSelectProps"
			section-id="inline-autocomplete-props"
			section-title="Props"
			subtitle="These are all props for the <code class='ic'>VInlineAutocomplete</code> component"
		/>
	</v-col>
</template>

<script setup>
import { computed, inject, reactive, ref } from 'vue';
import { usePropsStore } from '@/stores/props';
import PropsTable from '@/documentation/components/PropsTable.vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
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

const exampleCode = `<template>
  <VInlineAutocomplete
  v-model="selectValue"
  item-title="state"
  item-value="abbr"
  :items="items"
  name="state"
  return-object
/>
<\/template>

<script setup>
import { reactive, ref } from 'vue';

const selectValue = ref({
  abbr: 'CA',
  state: 'California',
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

<\/script>`;

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
