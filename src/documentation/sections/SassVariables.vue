<template>
	<v-row>
		<v-col
			id="sass-variables"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#sass-variables"
				>#</a>
				SASS Variables
			</h2>

			<v-row>
				<v-col cols="12"> TBD </v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="headers"
							hide-default-footer
							:items="items"
							:search="search"
							variant="underlined"
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

									<td class="text-accent">{{ item.raw.default }}</td>
									<td>{{ item.raw.desc }}</td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject, ref } from 'vue';

const classes = inject('classes');
const headers = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: false,
		title: 'Name',
		width: '40%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
		width: '15%',
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
		default: 'TBD',
		desc: 'TBD',
		name: 'TBD',
	},
];
const search = ref('');
</script>
