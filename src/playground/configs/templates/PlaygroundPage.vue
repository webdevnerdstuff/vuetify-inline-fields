<template>
	<v-col
		v-if="isPlayground"
		cols="12"
	>
		<v-btn
			class="me-2"
			@click="componentOptions.disabled = !componentOptions.disabled"
		>
			Toggle Disabled: {{ componentOptions.disabled }}
		</v-btn>

		<ToggleColor @update="selectedColor = $event" />
	</v-col>

	<v-col cols="12">
		<v-card elevation="5">
			<v-data-table
				:key="tableOptions.tableKey"
				density="default"
				:headers="headers"
				:items="posts"
				:items-per-page="tableOptions.itemsPerPage"
				:loading="tableOptions.loading"
			>
				<template #[`item.active`]="{ item }">

					<VInlineSwitch
						v-model="item.active"
						:cancel-button-color="selectedColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon="componentOptions.cancelIcon"
						:cancel-icon-color="selectedColor"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:cell-underline-full-width="componentOptions.cellUnderlineFullWidth"
						:close-siblings="componentOptions.closeSiblings"
						:color="selectedColor"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:field-only="componentOptions.fieldOnly"
						:hide-cancel-icon="componentOptions.hideCancelIcon"
						:hide-save-icon="componentOptions.hideSaveIcon"
						:icon-false="componentOptions.iconFalse"
						:icon-false-title="componentOptions.iconFalseTitle"
						:icon-true="componentOptions.iconTrue"
						:icon-true-title="componentOptions.iconTrueTitle"
						:label="componentOptions.label"
						:loading="item.loading"
						:loading-wait="componentOptions.loadingWait"
						name="active"
						:underline-color="selectedColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						@error="showError = $event"
						@update="updatedValue(item, 'reviewed')"
					/>
				</template>

				<template #[`item.userId`]="{ item }">
					<VInlineSelect
						v-model="item.user"
						:cancel-button-color="selectedColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="selectedColor"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:cell-underline-full-width="componentOptions.cellUnderlineFullWidth"
						:clearable="componentOptions.clearable"
						:close-siblings="componentOptions.closeSiblings"
						:color="selectedColor"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="selectedColor"
						:display-append-icon-size="componentOptions.displayAppendIconSize"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="selectedColor"
						:display-prepend-icon="componentOptions.displayPrependIcon"
						:display-prepend-icon-color="selectedColor"
						:display-prepend-inner-icon="componentOptions.displayPrependInnerIcon"
						:display-prepend-inner-icon-color="selectedColor"
						:empty-text="componentOptions.emptyText"
						:field-only="componentOptions.fieldOnly"
						:hide-cancel-icon="componentOptions.hideCancelIcon"
						:hide-details="componentOptions.hideDetails"
						:hide-save-icon="componentOptions.hideSaveIcon"
						:hide-selected="componentOptions.hideSelected"
						item-title="name"
						item-value="id"
						:items="users"
						:label="componentOptions.label"
						:loading="item.loading"
						:loading-wait="componentOptions.loadingWait"
						:menu="componentOptions.menu"
						name="userId"
						return-object
						:save-button-color="selectedColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-icon="componentOptions.saveIcon"
						:save-icon-color="selectedColor"
						:underline-color="selectedColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item, 'userId')"
					>
					</VInlineSelect>
				</template>

				<!-- <template #[`item.userIdAutocomplete`]="{ item }">
					<VInlineAutocomplete
						v-model="item.user"
						:auto-select-first="componentOptions.autoSelectFirst"
						:cancel-button-color="selectedColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="selectedColor"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:clearable="componentOptions.clearable"
						:close-siblings="componentOptions.closeSiblings"
						:color="selectedColor"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="selectedColor"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="selectedColor"
						:empty-text="componentOptions.emptyText"
						:field-only="componentOptions.fieldOnly"
						:hide-details="componentOptions.hideDetails"
						:hide-selected="componentOptions.hideSelected"
						item-title="name"
						item-value="id"
						:items="users"
						:label="componentOptions.label"
						:loading="item.loading"
						:loading-wait="componentOptions.loadingWait"
						:menu="componentOptions.menu"
						name="userId"
						return-object
						:save-button-color="selectedColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-icon="componentOptions.saveIcon"
						:save-icon-color="selectedColor"
						:save-on-select="componentOptions.saveOnSelect"
						:underline-color="selectedColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item, 'userId')"
						@update:search="console.log(`searching: ${$event}`)"
					>
					</VInlineAutocomplete>
				</template> -->

				<template #[`item.title`]="{ item }">
					<VInlineTextField
						v-model="item.title"
						:cancel-button-color="selectedColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="selectedColor"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:cell-underline-full-width="componentOptions.cellUnderlineFullWidth"
						:clearable="componentOptions.clearable"
						:close-siblings="componentOptions.closeSiblings"
						:color="selectedColor"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="selectedColor"
						:display-append-icon-size="componentOptions.displayAppendIconSize"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="selectedColor"
						:display-prepend-icon="componentOptions.displayPrependIcon"
						:display-prepend-icon-color="selectedColor"
						:display-prepend-inner-icon="componentOptions.displayPrependInnerIcon"
						:display-prepend-inner-icon-color="selectedColor"
						:field-only="componentOptions.fieldOnly"
						:hide-cancel-icon="componentOptions.hideCancelIcon"
						:hide-details="componentOptions.hideDetails"
						:hide-save-icon="componentOptions.hideSaveIcon"
						:label="componentOptions.label"
						:loading="item.loading"
						:loading-wait="componentOptions.loadingWait"
						name="title"
						required
						:rules="[componentOptions.rules.required, componentOptions.rules.minLength]"
						:save-button-color="selectedColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-button-variant="componentOptions.saveButtonVariant"
						:save-icon-color="selectedColor"
						:truncate-length="componentOptions.truncateTextFieldLength"
						:underline-color="selectedColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item, 'title')"
					>
					</VInlineTextField>
				</template>

				<template #[`item.body`]="{ item }">
					<VInlineTextarea
						v-model="item.body"
						:cancel-button-color="selectedColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="selectedColor"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:cell-underline-full-width="componentOptions.cellUnderlineFullWidth"
						:clearable="componentOptions.clearable"
						:close-siblings="componentOptions.closeSiblings"
						:color="selectedColor"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:display-append-icon="componentOptions.displayAppendIcon"
						:display-append-icon-color="selectedColor"
						:display-append-icon-size="componentOptions.displayAppendIconSize"
						:display-append-inner-icon="componentOptions.displayAppendInnerIcon"
						:display-append-inner-icon-color="selectedColor"
						:display-prepend-icon="componentOptions.displayPrependIcon"
						:display-prepend-icon-color="selectedColor"
						:display-prepend-inner-icon="componentOptions.displayPrependInnerIcon"
						:display-prepend-inner-icon-color="selectedColor"
						:field-only="componentOptions.fieldOnly"
						:hide-cancel-icon="componentOptions.hideCancelIcon"
						:hide-details="componentOptions.hideDetails"
						:hide-save-icon="componentOptions.hideSaveIcon"
						:label="componentOptions.label"
						:loading="item.loading"
						:loading-wait="componentOptions.loadingWait"
						name="body"
						:rules="[componentOptions.rules.required, componentOptions.rules.minLength]"
						:save-button-color="selectedColor"
						:save-button-title="componentOptions.saveButtonTitle"
						:save-icon-color="selectedColor"
						:truncate-length="componentOptions.truncateTextareaLength"
						:underline-color="selectedColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						:variant="componentOptions.variant"
						@error="showError = $event"
						@update="updatedValue(item, 'body')"
					>
					</VInlineTextarea>
				</template>

				<template #[`item.range`]="{ item }">
					<VInlineCustomField
						v-model="item.range"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:cell-underline-full-width="componentOptions.cellUnderlineFullWidth"
						:loading="item.loading"
						@update="updatedValue(item, 'range')"
					>
						<template #default="">
							<v-slider
								v-model="item.range"
								hide-details
								show-ticks
								step="10"
							></v-slider>
						</template>
					</VInlineCustomField>
				</template>

				<template #[`item.reviewed`]="{ item }">
					<VInlineCheckbox
						v-model="item.reviewed"
						:cancel-button-color="selectedColor"
						:cancel-button-title="componentOptions.cancelButtonTitle"
						:cancel-button-variant="componentOptions.cancelButtonVariant"
						:cancel-icon-color="selectedColor"
						:card-field="cardFieldState"
						:card-offset-x="componentOptions.cardOffsetX"
						:card-offset-y="componentOptions.cardOffsetY"
						:card-props="componentOptions.cardProps"
						:cell="componentOptions.cell"
						:cell-underline-full-width="componentOptions.cellUnderlineFullWidth"
						:close-siblings="componentOptions.closeSiblings"
						:color="selectedColor"
						:density="componentOptions.density"
						:disabled="componentOptions.disabled"
						:field-only="componentOptions.fieldOnly"
						:hide-cancel-icon="componentOptions.hideCancelIcon"
						:hide-save-icon="componentOptions.hideSaveIcon"
						:icon-false-title="componentOptions.iconFalseTitle"
						:icon-true-title="componentOptions.iconTrueTitle"
						:label="componentOptions.label"
						:loading="item.loading"
						:loading-wait="componentOptions.loadingWait"
						name="reviewed"
						:underline-color="selectedColor"
						:underline-style="componentOptions.underlineStyle"
						:underline-width="componentOptions.underlineWidth"
						:underlined="componentOptions.underlined"
						@error="showError = $event"
						@update="updatedValue(item, 'reviewed')"
					/>
				</template>
			</v-data-table>
		</v-card>
	</v-col>

	<v-col
		class="mb-4"
		cols="12"
	>
		<v-switch
			v-model="isCardField"
			class="ms-2 align-center d-flex"
			color="primary"
			density="compact"
		>
			<template #label>
				<div class="switch-label">
					<div
						class="d-inline"
						:class="!isCardField ? 'text-primary' : ''"
					>Inline</div>
					/
					<div
						class="d-inline"
						:class="isCardField ? 'text-primary' : ''"
					>Card</div> Field
				</div>
			</template>
		</v-switch>
	</v-col>
</template>


<script setup lang="ts">
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { onMounted, onBeforeMount, reactive, ref, computed, watch } from 'vue';
import ToggleColor from '@/playground/configs/components/ToggleColor.vue';
import type { VDataTable, VDataTableRow } from 'vuetify/components';
import type {
	GlobalDensity,
	GlobalVariant,
	SharedProps,
	// VIconColor,
	VBtnVariant,
	// VIconValue,
} from '@/plugin/types';


type Headers = VDataTable['$props']['headers'];
type Item = (typeof VDataTableRow)['$props']['item'];
type Items = VDataTable['$props']['items'];
interface Props extends SharedProps { [key: string]: any; }


defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
});

// ? Components are already loaded via the configs/playground.ts file //
onMounted(() => {
	getPosts();
});

onBeforeMount(() => {
	getUsers();
});

const tableOptions = reactive({
	itemsPerPage: 10,
	loading: false,
	sortBy: [{ key: 'title', order: 'asc' }],
	tableKey: new Date().getUTCMilliseconds(),
});


// ? Use these options to play around with the component props //
const componentOptions = reactive<Props>({
	autoSelectFirst: true,
	cancelButtonColor: 'default',
	cancelButtonTitle: 'Cancel',
	cancelButtonVariant: 'text' as VBtnVariant,
	cancelIcon: undefined,
	cancelIconColor: 'default',
	cardOffsetX: 0,
	cardOffsetY: 0,
	cardProps: {},
	cell: false,
	cellUnderlineFullWidth: true,
	clearable: true,
	closeSiblings: true,
	color: 'primary',
	density: 'compact' as GlobalDensity,
	disabled: false,
	// displayAppendIcon: 'mdi:mdi-cog' as VIconValue,
	// displayAppendIconColor: '' as VIconColor,
	// displayAppendIconSize: 'x-large',
	// displayAppendInnerIcon: '' as VIconValue,
	// displayAppendInnerIconColor: '' as VIconColor,
	// displayAppendInnerIconSize: 'x-large',
	// displayPrependIcon: 'mdi:mdi-pencil' as VIconValue,
	// displayPrependIconColor: 'danger' as VIconColor,
	// displayPrependIconSize: 'x-small',
	// displayPrependInnerIcon: 'mdi:mdi-pencil' as VIconValue,
	// displayPrependInnerIconColor: 'success' as VIconColor,
	// displayPrependInnerIconSize: 'x-small',
	emptyText: 'empty',
	fieldOnly: false,
	// hideCancelIcon: true,
	hideCancelIcon: false,
	hideDetails: true,
	hideSaveIcon: false,
	hideSelected: false,
	iconFalse: undefined,
	iconFalseTitle: undefined,
	iconTrue: undefined,
	iconTrueTitle: undefined,
	label: undefined,
	loadingWait: true,
	menu: true,
	rules: {
		minLength(value: any) {
			return value?.length >= 5 || 'Min 5 characters';
		},
		required: (value: any) => !!value || 'Field is required',
	},
	saveButtonColor: 'default',
	saveButtonTitle: 'Save',
	saveButtonVariant: 'text' as VBtnVariant,
	saveIcon: undefined,
	saveIconColor: 'primary',
	saveOnSelect: true,
	truncateTextFieldLength: 25,
	truncateTextareaLength: 75,
	underlineColor: 'primary',
	underlineStyle: 'dotted',
	underlineWidth: '2px',
	underlined: true,
	variant: 'underlined' as GlobalVariant,
});

const headers = ref<Headers>([
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
	// {
	// 	align: 'start',
	// 	key: 'userIdAutocomplete',
	// 	title: 'User ID',
	// 	width: 325,
	// },
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
]);


// ? Color testing //
const selectedColor = ref<string>('primary');

// ? Changes the type of field the table uses //
const isCardField = ref<boolean>(false);
const cardFieldState = computed<boolean>(() => isCardField.value);

watch(() => isCardField.value, () => {
	tableOptions.tableKey = new Date().getUTCMilliseconds();
});


// ? This is where you would save the item in the database. //
function updatedValue(item: Item, _field?: string): void {
	item.loading = true;

	// ? Simulate a delay while item is saving.
	setTimeout(() => {
		item.loading = false;
	}, 1500);
}


// ? Data loading section. You can ignore this part. //
const posts = ref<Items>();
const users = ref<Items>();
const showError = ref<boolean>(false);
const apiPostsRoute: string = 'api/posts';
const apiUsersRoute: string = 'api/users';

function getPosts(): void {
	tableOptions.loading = true;

	fetch(apiPostsRoute)
		.then((response) => response.json())
		.then((json) => {
			posts.value = [...json.posts];
			tableOptions.loading = false;
		});
};

function getUsers(): void {
	fetch(apiUsersRoute)
		.then((response) => response.json())
		.then((json) => {
			users.value = json.users.map((user: { id: number, name: string; }) => ({
				id: user.id,
				name: user.name,
			}));
		});
};
</script>

<style lang="scss" scoped>
:deep(.v-data-table__td) {
	align-items: center;
}

:deep(.v-label) {
	opacity: 1;
}
</style>
