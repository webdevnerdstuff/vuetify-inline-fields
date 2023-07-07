<template>
	<v-col cols="12">
		<v-card elevation="5">
			<v-data-table
				density="default"
				:headers="headers"
				:items="posts"
				:items-per-page="tableOptions.itemsPerPage"
				:loading="tableOptions.loading"
			>
				<template #[`item.active`]="{ item }">
					<VInlineSwitch
						v-model="item.raw.active"
						:cancel-button-color="componentOptions.cancelButtonColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon="componentOptions.cancelIcon"
						:cancel-icon-color="componentOptions.cancelIconColor"
						:cancel-icon-text="componentOptions.cancelIconText"
						:close-siblings="componentOptions.closeSiblings"
						:color="componentOptions.color"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:field-only="componentOptions.fieldOnly"
						:icon-false="componentOptions.iconFalse"
						:icon-false-title="componentOptions.iconFalseTitle"
						:icon-true="componentOptions.iconTrue"
						:icon-true-title="componentOptions.iconTrueTitle"
						:item="item"
						:loading="item.raw.loading"
						:loading-wait="componentOptions.loadingWait"
						name="active"
						:underline-color="componentOptions.underlineColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						@error="showError = $event"
						@update="updatedValue(item.raw, 'reviewed')"
					/>
				</template>

				<template #[`item.userId`]="{ item }">
					<VInlineSelect
						v-model="item.raw.user"
						:cancel-button-color="componentOptions.cancelButtonColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="componentOptions.cancelIconColor"
						:clearable="componentOptions.clearable"
						:close-siblings="componentOptions.closeSiblings"
						:color="componentOptions.color"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="componentOptions.displayAppendIconColor"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="componentOptions.displayAppendInnerIconColor"
						:empty-text="componentOptions.emptyText"
						:field-only="componentOptions.fieldOnly"
						:hide-selected="componentOptions.hideSelected"
						:item="item"
						item-title="name"
						item-value="id"
						:items="users"
						:loading="item.raw.loading"
						:loading-wait="componentOptions.loadingWait"
						:menu="componentOptions.menu"
						name="userId"
						return-object
						:save-button-color="componentOptions.saveButtonColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-icon="componentOptions.saveIcon"
						:save-icon-color="componentOptions.saveIconColor"
						:underline-color="componentOptions.underlineColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item.raw, 'userId')"
					>
					</VInlineSelect>
				</template>

				<template #[`item.title`]="{ item }">
					<VInlineTextField
						v-model="item.raw.title"
						:append-icon="componentOptions.appendIcon"
						:append-inner-icon="componentOptions.appendIcon"
						:cancel-button-color="componentOptions.cancelButtonColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="componentOptions.cancelIconColor"
						:clearable="componentOptions.clearable"
						:close-siblings="componentOptions.closeSiblings"
						:color="componentOptions.color"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="componentOptions.displayAppendIconColor"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="componentOptions.displayAppendInnerIconColor"
						:display-prepend-icon="componentOptions.displayPrependIcon"
						:display-prepend-iconColor="componentOptions.displayPrependIconColor"
						:display-prepend-inner-icon="componentOptions.displayPrependInnerIcon"
						:display-prepend-inner-icon-color="componentOptions.displayPrependInnerIconColor"
						:field-only="componentOptions.fieldOnly"
						:item="item"
						:loading="item.raw.loading"
						:loading-wait="componentOptions.loadingWait"
						name="title"
						:prepend-icon="componentOptions.appendIcon"
						:prepend-inner-icon="componentOptions.appendIcon"
						required
						:rules="[componentOptions.rules.required, componentOptions.rules.minLength]"
						:save-button-color="componentOptions.saveButtonColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-button-variant="componentOptions.saveButtonVariant"
						:save-icon-color="componentOptions.saveIconColor"
						:save-icon-text="componentOptions.saveIconText"
						:truncate-length="componentOptions.truncateTextFieldLength"
						:underline-color="componentOptions.underlineColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item.raw, 'title')"
					>
						<template #[`display-append-icon`]>foo</template>
					</VInlineTextField>
				</template>

				<template #[`item.body`]="{ item }">
					<VInlineTextarea
						v-model="item.raw.body"
						:cancel-button-color="componentOptions.cancelButtonColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="componentOptions.cancelIconColor"
						:close-siblings="componentOptions.closeSiblings"
						:color="componentOptions.color"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="componentOptions.displayAppendIconColor"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="componentOptions.displayAppendInnerIconColor"
						:field-only="componentOptions.fieldOnly"
						:item="item"
						:loading="item.raw.loading"
						:loading-wait="componentOptions.loadingWait"
						name="body"
						:rules="[componentOptions.rules.required, componentOptions.rules.minLength]"
						:save-button-color="componentOptions.saveButtonColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-icon-color="componentOptions.saveIconColor"
						:save-icon-text="componentOptions.saveIconText"
						:truncate-length="componentOptions.truncateTextareaLength"
						:underline-color="componentOptions.underlineColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item.raw, 'body')"
					/>
				</template>

				<template #[`item.range`]="{ item }">
					<VInlineCustomField
						v-model="item.raw.range"
						:loading="item.raw.loading"
						@update="updatedValue(item.raw, 'range')"
					>
						<template #default="">
							<v-slider
								v-model="item.raw.range"
								show-ticks
								step="10"
							></v-slider>
						</template>
					</VInlineCustomField>
				</template>

				<template #[`item.reviewed`]="{ item }">
					<VInlineCheckbox
						v-model="item.raw.reviewed"
						:cancel-button-color="componentOptions.cancelButtonColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="componentOptions.cancelIconColor"
						:close-siblings="componentOptions.closeSiblings"
						:color="componentOptions.color"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:field-only="componentOptions.fieldOnly"
						:icon-false-title="componentOptions.iconFalseTitle"
						:icon-true-title="componentOptions.iconTrueTitle"
						:item="item"
						:loading="item.raw.loading"
						:loading-wait="componentOptions.loadingWait"
						name="reviewed"
						:underline-color="componentOptions.underlineColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						@error="showError = $event"
						@update="updatedValue(item.raw, 'reviewed')"
					/>
				</template>
			</v-data-table>
		</v-card>
	</v-col>
</template>


<script setup>
// ? Components are already loaded via the configs/playground.ts file //

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
	// appendIcon: 'mdi:mdi-cog',
	cancelButtonColor: 'default',
	cancelButtonTitle: 'Cancel',
	cancelButtonVariant: 'text',
	cancelIcon: undefined,
	cancelIconColor: 'default',
	clearable: false,
	closeSiblings: false,
	color: 'primary',
	density: 'compact',
	disabled: false,
	// displayAppendIcon: 'mdi:mdi-pencil',
	// displayAppendIconColor: 'primary',
	// displayAppendIconSize: 'x-small',
	// displayAppendInnerIcon: 'mdi:mdi-pencil',
	// displayAppendInnerIconColor: 'secondary',
	// displayAppendInnerIconSize: 'x-small',
	// displayPrependIcon: 'mdi:mdi-pencil',
	// displayPrependIconColor: 'danger',
	// displayPrependIconSize: 'x-small',
	// displayPrependInnerIcon: 'mdi:mdi-pencil',
	// displayPrependInnerIconColor: 'success',
	// displayPrependInnerIconSize: 'x-small',
	emptyText: 'empty',
	fieldOnly: false,
	hideSelected: false,
	iconFalse: undefined,
	iconFalseTitle: undefined,
	iconTrue: undefined,
	iconTrueTitle: undefined,
	loadingWait: true,
	menu: true,
	rules: {
		minLength(value) {
			return value?.length >= 5 || 'Min 5 characters';
		},
		required: value => !!value || 'Field is required',
	},
	saveButtonColor: 'default',
	saveButtonTitle: 'Save',
	saveButtonVariant: 'text',
	saveIcon: undefined,
	saveIconColor: 'primary',
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
	// ? "Range" is used for the VInlineCustomField example
	// ? Comment out the body field above to use this one (so it fits)  //
	// {
	// 	align: 'start',
	// 	key: 'range',
	// 	title: 'Range',
	// },
	{
		align: 'start',
		key: 'reviewed',
		title: 'Reviewed',
	},
];

let posts = ref();
const users = ref(null);
const showError = ref(false);
const apiPostsRoute = 'api/posts';
const apiUsersRoute = 'api/users';

function getPosts() {
	tableOptions.loading = true;

	fetch(apiPostsRoute)
		.then((response) => response.json())
		.then((json) => {
			posts = [...json.posts];
			tableOptions.loading = false;
		});
};

function getUsers() {
	fetch(apiUsersRoute)
		.then((response) => response.json())
		.then((json) => {
			users.value = json.users.map((user) => ({
				id: user.id,
				name: user.name,
			}));
		});
};


/**
 * ? This is where you would save the item in the database.
 * @param {object} item The item being updated.
 * @param {string} field The field being updated.
 */
function updatedValue(item) {
	item.loading = true;

	// ? Simulate a delay while item is saving.
	setTimeout(() => {
		item.loading = false;
	}, 1500);
}
</script>

<style lang="scss" scoped>
:deep(.v-data-table__td) {
	align-items: center;
}
</style>
