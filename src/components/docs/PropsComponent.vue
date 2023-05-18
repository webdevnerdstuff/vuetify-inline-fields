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

			<v-row>
				<v-col cols="12"> TBD </v-col>
			</v-row>

			<v-row id="additional-props">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a
							:class="classes.headerA"
							href="#additional-props"
						>#</a>
						Additional props
					</h3>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-card-title>
							<v-text-field
								v-model="search"
								append-icon="mdi-magnify"
								hide-details
								label="Search"
								single-line
								variant="underlined"
							></v-text-field>
						</v-card-title>

						<v-data-table
							:headers="propsSupported.headers"
							hide-default-footer
							:items="propsSupported.items"
							:search="search"
						>
							<template #[`item.name`]="{ item }">
								<td>
									<span
										:id="`props-${item.raw.name}`"
										class="name-item text-mono ml-n2"
									>
										<span class="text-primary">#</span>
										<a
											class="text-primary"
											:class="classes.appLink"
											:href="`#props-${item.raw.name}`"
										>{{ item.raw.name }}</a>
									</span>
								</td>
							</template>

							<template #[`item.type`]="{ item }">
								<td class="text-success">
									{{ item.raw.type }}
								</td>
							</template>

							<template #[`item.default`]="{ item }">
								<td
									class="text-accent"
									v-html="item.raw.default"
								></td>
							</template>

							<template #[`item.desc`]="{ item }">
								<td v-html="item.raw.desc"></td>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>

			<v-row id="props-not-supported">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a
							:class="classes.headerA"
							href="#props-not-supported"
						>#</a>
						Props with partial and/or no support
					</h3>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="propsNotSupported.headers"
							hide-default-footer
							:items="propsNotSupported.items"
							:search="search"
						>
							<template #[`item.name`]="{ item }">
								<td>
									<span
										:id="`props-${item.raw.name}`"
										class="name-item text-mono ml-n2"
									>
										<span class="text-primary">#</span>
										<a
											class="text-primary"
											:class="classes.appLink"
											:href="`#props-${item.raw.name}`"
										>{{ item.raw.name }}</a>
									</span>
								</td>
							</template>

							<template #[`item.status`]="{ item }">
								<td
									:class="{
											'text-warning': item.raw.status === 'pending',
											'text-error': item.raw.status === 'debugging',
											'text-secondary':
												item.raw.status !== 'debugging' &&
												item.raw.status !== 'pending',
										}"
									v-html="item.raw.status"
								></td>
							</template>

							<template #[`item.notes`]="{ item }">
								<td v-html="item.raw.notes"></td>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import {
	inject,
	// onMounted,
	reactive,
	ref,
	// watch,
} from 'vue';

const classes = inject('classes');

// const emit = defineEmits(['updateOptions']);

// const links: string[] = inject('links');
// const drawerOptions: DrawerOptions = inject('drawerOptions');
// const handleColor: string = ref('');

// const defaultOptions: DrawerOptions = {};
// const dialog: boolean = ref(false);
// const options: DrawerOptions = ref(drawerOptions);
const propsSupported = reactive({
	headers: [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: true,
			title: 'Name',
			width: '15%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'type',
			sortable: false,
			title: 'Type',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'default',
			sortable: false,
			title: 'Default',
		},
		{
			align: 'start',
			filterable: false,
			key: 'desc',
			sortable: false,
			title: 'Description',
		},
	],
	items: [
		{
			default: 'TBD',
			desc: 'TBD',
			name: 'TBD',
			type: 'TBD',
		},
	],
});
const propsNotSupported = reactive({
	headers: [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: false,
			title: 'Name',
			width: '15%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'status',
			sortable: false,
			title: 'Status',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'notes',
			sortable: false,
			title: 'Notes',
		},
	],
	items: [
		{
			name: 'TBD',
			notes: 'TBD',
			status: 'TBD',
		},
	],
});
const search = ref('');
</script>

<style lang="scss" scoped>
.type {
	color: #690;

	&__ {
		&default {
			color: #905;
		}
	}
}

:deep(code) {
	background-color: rgba(255, 255, 255, 0.1) !important;
	border-radius: 3px;
	font-size: 85%;
	font-weight: normal;
	padding: 0.2em 0.4em;
}

.v-theme--light {
	:deep(code) {
		background-color: rgba(0, 0, 0, 0.05) !important;
	}
}

:deep(.v-input__details) {
	max-height: 10px;
	min-height: 10px;
}

.switch-label {
	:deep(.v-label) {
		opacity: 1 !important;

		.boolean-color {
			font-weight: 500;
		}
	}
}
</style>
