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
							<VInlineSwitch
								v-model="item.raw.active"
								:align-items="componentOptions.alignItems"
								api-route="api/posts"
								:cancel-button-color="componentOptions.cancelButtonColor"
								:cancel-button-variant="componentOptions.cancelButtonVariant"
								:cancel-icon="componentOptions.cancelIcon"
								:cancel-icon-color="componentOptions.cancelIconColor"
								:cancel-icon-text="componentOptions.cancelIconText"
								:close-siblings="componentOptions.closeSiblings"
								:color="componentOptions.color"
								:density="componentOptions.density"
								:disabled="componentOptions.disabled"
								:do-not-save="componentOptions.doNotSave"
								:field-only="componentOptions.fieldOnly"
								:icon-false="componentOptions.iconFalse"
								:icon-false-title="componentOptions.iconFalseTitle"
								:icon-true="componentOptions.iconTrue"
								:icon-true-title="componentOptions.iconTrueTitle"
								:item="item"
								:label="componentOptions.label"
								name="active"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								@error="showError = $event"
								@loading="loading = $event"
								@update="updatedValue($event, 'switch')"
							/>
						</template>
						<template #[`item.userId`]="{ item }">
							<VInlineSelect
								v-model="item.raw.user"
								:align-items="componentOptions.alignItems"
								api-route="api/posts"
								:cancel-button-color="componentOptions.cancelButtonColor"
								:cancel-button-variant="componentOptions.cancelButtonVariant"
								:cancel-icon-color="componentOptions.cancelIconColor"
								:cancel-icon-text="componentOptions.cancelIconText"
								:close-siblings="componentOptions.closeSiblings"
								:color="componentOptions.color"
								:density="componentOptions.density"
								:disabled="componentOptions.disabled"
								:do-not-save="componentOptions.doNotSave"
								:empty-text="componentOptions.emptyText"
								:field-only="componentOptions.fieldOnly"
								:hide-details="componentOptions.hideDetails"
								:hide-selected="componentOptions.hideSelected"
								:item="item"
								item-title="name"
								item-value="id"
								:items="users"
								:label="componentOptions.label"
								:menu="componentOptions.menu"
								name="active"
								:return-object="true"
								:save-button-color="componentOptions.saveButtonColor"
								:save-icon="componentOptions.saveIcon"
								:save-icon-color="componentOptions.saveIconColor"
								:save-icon-text="componentOptions.saveIconText"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								:variant="componentOptions.variant"
								@error="showError = $event"
								@loading="loading = $event"
								@update="updatedValue($event, 'select')"
							>
							</VInlineSelect>
						</template>

						<template #[`item.title`]="{ item }">
							<VInlineTextField
								v-model="item.raw.title"
								:align-items="componentOptions.alignItems"
								api-route="api/posts"
								:cancel-button-color="componentOptions.cancelButtonColor"
								:cancel-button-variant="componentOptions.cancelButtonVariant"
								:cancel-icon-color="componentOptions.cancelIconColor"
								:cancel-icon-text="componentOptions.cancelIconText"
								:close-siblings="componentOptions.closeSiblings"
								:color="componentOptions.color"
								:density="componentOptions.density"
								:disabled="componentOptions.disabled"
								:do-not-save="componentOptions.doNotSave"
								:field-only="componentOptions.fieldOnly"
								:hide-details="componentOptions.hideDetails"
								:item="item"
								:label="componentOptions.label"
								name="title"
								required
								:save-button-color="componentOptions.saveButtonColor"
								:save-icon-color="componentOptions.saveIconColor"
								:save-icon-text="componentOptions.saveIconText"
								:truncate-length="componentOptions.truncateTextFieldLength"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								:variant="componentOptions.variant"
								@error="showError = $event"
								@loading="loading = $event"
								@update="updatedValue($event, 'text-field')"
							/>
						</template>

						<template #[`item.body`]="{ item }">
							<VInlineTextarea
								v-model="item.raw.body"
								:align-items="componentOptions.alignItems"
								api-route="api/posts"
								:cancel-button-color="componentOptions.cancelButtonColor"
								:cancel-button-variant="componentOptions.cancelButtonVariant"
								:cancel-icon-color="componentOptions.cancelIconColor"
								:cancel-icon-text="componentOptions.cancelIconText"
								:close-siblings="componentOptions.closeSiblings"
								:color="componentOptions.color"
								:density="componentOptions.density"
								:disabled="componentOptions.disabled"
								:do-not-save="componentOptions.doNotSave"
								:field-only="componentOptions.fieldOnly"
								:hide-details="false"
								:item="item"
								:label="componentOptions.label"
								name="body"
								:rules="[componentOptions.rules.required, componentOptions.rules.minLength]"
								:save-button-color="componentOptions.saveButtonColor"
								:save-icon-color="componentOptions.saveIconColor"
								:save-icon-text="componentOptions.saveIconText"
								:truncate-length="componentOptions.truncateTextareaLength"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								:variant="componentOptions.variant"
								@error="showError = $event"
								@loading="loading = $event"
								@update="updatedValue($event, 'textarea')"
							/>
						</template>

						<template #[`item.reviewed`]="{ item }">
							<VInlineCheckbox
								v-model="item.raw.reviewed"
								:align-items="componentOptions.alignItems"
								api-route="api/posts"
								:cancel-button-color="componentOptions.cancelButtonColor"
								:cancel-button-variant="componentOptions.cancelButtonVariant"
								:cancel-icon-color="componentOptions.cancelIconColor"
								:cancel-icon-text="componentOptions.cancelIconText"
								:close-siblings="componentOptions.closeSiblings"
								:color="componentOptions.color"
								:density="componentOptions.density"
								:disabled="componentOptions.disabled"
								:do-not-save="componentOptions.doNotSave"
								:field-only="componentOptions.fieldOnly"
								:icon-false-title="componentOptions.iconFalseTitle"
								:icon-true-title="componentOptions.iconTrueTitle"
								:item="item"
								name="reviewed"
								:underline-color="componentOptions.underlineColor"
								:underline-style="componentOptions.underlineStyle"
								:underline-width="componentOptions.underlineWidth"
								:underlined="componentOptions.underlined"
								@error="showError = $event"
								@loading="loading = $event"
								@update="updatedValue($event, 'checkbox')"
							/>
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
	alignItems: 'center',
	cancelButtonColor: 'default',
	cancelButtonVariant: 'text',
	cancelIcon: undefined,
	cancelIconColor: 'default',
	cancelIconText: 'Cancel',
	closeSiblings: false,
	color: 'primary',
	density: 'compact',
	disabled: false,
	doNotSave: false,
	emptyText: 'empty',
	fieldOnly: false,
	hideDetails: true,
	hideSelected: false,
	iconFalse: undefined,
	iconFalseTitle: undefined,
	iconTrue: undefined,
	iconTrueTitle: undefined,
	label: '',
	menu: true,
	rules: {
		minLength(value) {
			return value?.length >= 5 || 'Min 5 characters';
		},
		required: value => !!value || 'Field is required',
	},
	saveButtonColor: 'default',
	saveIcon: undefined,
	saveIconColor: 'primary',
	saveIconText: 'Save',
	truncateTextFieldLength: 25,
	truncateTextareaLength: 75,
	underlineColor: 'primary',
	underlineStyle: 'dotted',
	underlineWidth: '2px',
	underlined: true,
	variant: 'underlined',
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
		width: 125,
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
			users.value = json.users.map((user) => ({
				id: user.id,
				name: user.name,
			}));
		});
};

/**
 * ? You can use this function to update the value in the database.
 * ? Instead of using the internal axios call.
 *
 * @param {any} val
 * @param {string} field
 */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function updatedValue(val, field) {
	// Save updated values
	console.log('updatedValue', val, field);
}
</script>

<style lang="scss" scoped>
:deep(.v-data-table__td) {
	align-items: center;
}
</style>
