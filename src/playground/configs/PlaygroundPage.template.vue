<template>
	<v-container>
		<v-row class="row my-4">
			<v-col cols="12">
				<v-card elevation="5">
					<v-data-table
						:headers="headers"
						:items="posts"
						:items-per-page="tableOptions.itemsPerPage"
						:loading="tableOptions.loading"
					>
						<template #[`item.active`]="{ item }">
							<div class="d-flex flex-align-center">
								<VInlineSwitch
									v-model="item.raw.active"
									api-route="api/posts"
									:color="componentOptions.color"
									:disabled="componentOptions.disabled"
									:do-not-save="false"
									:field-only="componentOptions.fieldOnly"
									:item="item"
									:label="componentOptions.label"
									name="active"
									:underline-color="componentOptions.underlineColor"
									:underline-style="componentOptions.underlineStyle"
									:underline-width="componentOptions.underlineWidth"
									:underlined="componentOptions.underlined"
									@error="showError = $event"
									@loading="loading = $event"
								/>
							</div>
						</template>
						<template #[`item.userId`]="{ item }">
							<VInlineSelect
								v-model="item.raw.user"
								api-route="api/posts"
								:color="componentOptions.color"
								:disabled="componentOptions.disabled"
								:do-not-save="false"
								:empty-text="componentOptions.emptyText"
								:field-only="componentOptions.fieldOnly"
								:hide-details="componentOptions.hideDetails"
								:hide-selected="componentOptions.hideSelected"
								:item="item"
								item-title="name"
								item-value="id"
								:items="users"
								:label="componentOptions.label"
								name="active"
								:return-object="true"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								@error="showError = $event"
								@loading="loading = $event"
							>
							</VInlineSelect>
						</template>
						<template #[`item.title`]="{ item }">
							<VInlineTextField
								v-model="item.raw.title"
								api-route="api/posts"
								:color="componentOptions.color"
								:disabled="componentOptions.disabled"
								:do-not-save="false"
								:field-only="componentOptions.fieldOnly"
								:item="item"
								:label="componentOptions.label"
								name="title"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								@error="showError = $event"
								@loading="loading = $event"
							/>
						</template>
						<template #[`item.body`]="{ item }">
							<VInlineTextarea
								v-model="item.raw.body"
								api-route="api/posts"
								:color="componentOptions.color"
								:disabled="componentOptions.disabled"
								:do-not-save="false"
								:field-only="componentOptions.fieldOnly"
								:item="item"
								:label="componentOptions.label"
								name="body"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								@error="showError = $event"
								@loading="loading = $event"
							/>
						</template>
						<template #[`item.reviewed`]="{ item }">
							<div class="d-flex flex-align-center">
								<VInlineCheckbox
									v-model="item.raw.reviewed"
									api-route="api/posts"
									:color="componentOptions.color"
									:disabled="componentOptions.disabled"
									:do-not-save="false"
									:field-only="componentOptions.fieldOnly"
									:item="item"
									name="reviewed"
									:underline-color="componentOptions.underlineColor"
									:underline-style="componentOptions.underlineStyle"
									:underline-width="componentOptions.underlineWidth"
									:underlined="componentOptions.underlined"
									@error="showError = $event"
									@loading="loading = $event"
								/>
							</div>
						</template>
					</v-data-table>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>


<script setup>
import {
	VInlineCheckbox,
	VInlineSelect,
	VInlineSwitch,
	VInlineTextField,
	VInlineTextarea,
} from '../';

onMounted(() => {
	getPosts();
});

onBeforeMount(() => {
	getUsers();
});

const tableOptions = reactive({
	itemsPerPage: 10,
	sortBy: [{ key: 'title', order: 'asc' }],
});

const componentOptions = reactive({
	color: 'primary',
	disabled: false,
	emptyText: 'empty',
	fieldOnly: false,
	hideDetails: true,
	hideSelected: true,
	label: '',
	underlineColor: 'primary',
	underlineStyle: 'dotted',
	underlineWidth: '1px',
	underlined: true,
});

const headers = [
	{
		align: 'start',
		key: 'id',
		title: 'ID',
		width: 56,
	},
	{
		align: 'start',
		key: 'active',
		title: 'Active',
		width: 100,
	},
	{
		align: 'start',
		key: 'userId',
		title: 'User ID',
		width: 325,
	},
	{
		align: 'start',
		key: 'title',
		title: 'Title',
	},
	{
		align: 'start',
		key: 'body',
		title: 'Body',
	},
	{
		align: 'start',
		key: 'reviewed',
		title: 'Reviewed',
	},
];

let posts = ref();
const users = ref(null);
const loading = ref(false);
const showError = ref(false);

function getPosts() {
	tableOptions.loading = true;
	fetch('api/posts')
		.then((response) => response.json())
		.then((json) => {
			posts = [...json.posts];
			tableOptions.loading = false;
		});
};

function getUsers() {
	fetch('api/users')
		.then((response) => response.json())
		.then((json) => {
			users.value = [...json.users];
		});
};
</script>

<style lang="scss" scoped>
:deep(.v-data-table__td) {
	align-items: center;
}
</style>
