<template>
	<v-row>
		<v-col
			id="events"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#events"
				>#</a>
				Events
			</h2>

			For component specific events, please refer to the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation.
		</v-col>

		<v-col cols="12">
			<v-row>
				<v-col cols="12">
					<v-card>
						<v-card-title>
							<v-text-field
								v-model="search"
								append-icon="mdi:mdi-magnify"
								hide-details
								label="Search"
								single-line
								variant="underlined"
							></v-text-field>
						</v-card-title>

						<v-data-table
							:headers="headers"
							hide-default-footer
							:items="items"
							:search="search"
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`events-${item.raw.name}`"
											class="name-item text-mono ml-n2"
										>
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												:href="`#events-${item.raw.name}`"
											>
												{{ item.raw.name }}
											</a>
										</span>
									</td>

									<td><span v-html="item.raw.desc"></span></td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				class="mb-6"
				:code="exampleCode"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label=""
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					<code class="ic">@update</code> Event Example
				</template>
			</CodeBlock>
		</v-col>
	</v-row>
</template>


<script setup>
import { computed, inject, ref } from 'vue';
import { useCoreStore } from '@/stores/index';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');
const store = useCoreStore();

const headers = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: false,
		title: 'Name',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];
const items = [
	{
		desc: 'Emitted when the save button is clicked. The value of the field is passed as the first argument and the field name is passed as the second argument',
		name: 'update',
	},
	{
		desc: 'Emitted when the close siblings event is triggered.<br />This is intended for internal use only',
		name: 'update:closeSiblingFields',
	},
];
const search = ref('');

const exampleCode = `<template>
  <VInlineCheckbox
    v-model="checkboxValue"
    name="reviewed"
    @update="updatedValue"
  />
<\/template>

<script setup>
import { ref } from 'vue';

const checkboxValue = ref(true);

function updatedValue(value, field) {
  // ...do something awesome
}
<\/script>`;
</script>
