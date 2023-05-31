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

			<div>
				Most of the Vuetify props for each component work as intended. Any specified props below may have different
				default values. Please refer to the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation for each components specific props.
			</div>
		</v-col>

		<PropsTable
			:headers="propsSupported.headers"
			:items="sharedProps"
			section-id="shared-props"
			section-title="Shared Props"
			subtitle="These props are used by all components"
		/>

		<PropsTable
			:headers="propsSupported.headers"
			:items="saveAndLoadingIconProps"
			section-id="save-and-loading-icon-props"
			section-title="Save &amp; Loading Props"
			subtitle="These are all props for the for the <code>VInlineSelect</code>, <code>VInlineTextarea</code>, and <code>VInlineTextField</code> components"
		/>

		<PropsTable
			:headers="propsSupported.headers"
			:items="trueFalseIconProps"
			section-id="true-false-icon-props"
			section-title="True/False Icon Props"
			subtitle="These are all props for the for the <code>VInlineCheckbox</code> and <code>VInlineSwitch</code> components"
		/>

		<!-- Components -->
		<PropsTable
			:headers="propsSupported.headers"
			:items="vInlineCheckboxProps"
			section-id="inline-checkbox-props"
			section-title="VInlineCheckbox Props"
			subtitle="These are all props for the <code>VInlineCheckbox</code> component"
		/>

		<PropsTable
			:headers="propsSupported.headers"
			:items="vInlineSelectProps"
			section-id="inline-select-props"
			section-title="VInlineSelect Props"
			subtitle="These are all props for the <code>VInlineSelect</code> component"
		/>

		<PropsTable
			:headers="propsSupported.headers"
			:items="vInlineSwitchProps"
			section-id="inline-switch-props"
			section-title="VInlineSwitch Props"
			subtitle="These are all props for the <code>VInlineSwitch</code> component"
		/>

		<PropsTable
			:headers="propsSupported.headers"
			:items="vInlineTextareaProps"
			section-id="inline-textarea-props"
			section-title="VInlineTextarea Props"
			subtitle="These are all props for the <code>VInlineTextarea</code> component"
		/>

		<PropsTable
			:headers="propsSupported.headers"
			:items="vInlineTextFieldProps"
			section-id="inline-text-field-props"
			section-title="VInlineTextField Props"
			subtitle="These are all props for the <code>VInlineTextField</code> component"
		/>

	</v-row>
</template>

<script setup>
import { inject, reactive } from 'vue';
import { useCoreStore } from '@/stores/index';
import PropsTable from '@/documentation/components/PropsTable.vue';

const classes = inject('classes');
const store = useCoreStore();

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
			width: '20%',
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

const colorDesc = 'Applies specified color to the';
const densityDesc = 'Adjusts the vertical height used by the component';
const variantDesc = 'Applies a distinct style to the';

const sharedProps = [
	{
		default: 'undefined',
		desc: 'The api route to save the field if the <code>doNotSave</code> prop is set to <code>false</code>',
		name: 'apiRoute',
		type: 'string | undefined',
	},
	{
		default: 'default',
		desc: `${colorDesc} cancel button`,
		name: 'cancelButtonColor',
		type: "VBtn['$props']['color']",
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the cancel button',
		name: 'cancelButtonSize',
		type: "VBtn['$props']['size']",
	},
	{
		default: 'Cancel',
		desc: 'The title of the cancel button',
		name: 'cancelButtonTitle',
		type: 'string | undefined',
	},
	{
		default: 'tonal',
		desc: `${variantDesc} cancel button`,
		name: 'cancelButtonVariant',
		type: "VBtn['$props']['variant']",
	},
	{
		default: 'mdi:mdi-close',
		desc: 'The icon to use to cancel',
		name: 'cancelIcon',
		type: 'string',
	},
	{
		default: 'default',
		desc: `${colorDesc} cancel icon`,
		name: 'cancelIconColor',
		type: 'string',
	},
	{
		default: false,
		desc: 'If <code>true</code>, the field will close when the user opens another inline form element',
		name: 'closeSiblings',
		type: 'boolean',
	},
	{
		default: 'primary',
		desc: `${colorDesc} control`,
		name: 'color',
		type: 'string',
	},
	{
		default: 'compact',
		desc: densityDesc,
		name: 'density',
		type: 'string',
	},
	{
		default: false,
		desc: 'Disables the field',
		name: 'disabled',
		type: 'boolean',
	},
	{
		default: true,
		desc: 'If <code>true</code> the component will not use axios to attempt to save the value. The prop <code>apiRoute</code> is required if this prop is set to <code>false</code>',
		name: 'doNotSave',
		type: 'boolean',
	},
	{
		default: 'empty',
		desc: 'Text to display when the field is empty',
		name: 'emptyText',
		type: 'string',
	},
	{
		default: false,
		desc: 'If set to <code>true</code> will only show the field',
		name: 'fieldOnly',
		type: 'boolean',
	},
	{
		default: true,
		desc: 'Hides hint and validation errors. When set to auto messages will be rendered only if there\'s a message (hint, error message, counter value etc) to display',
		name: 'hideDetails',
		type: 'boolean'
	},
	{
		default: () => ({}),
		desc: 'The item object',
		name: 'item',
		type: 'Record<string, unknown>',
	},
	{
		default: 'undefined',
		desc: 'Sets the text of the <code>v-label</code> or <code>v-field-label</code> component',
		name: 'label',
		type: 'string',
	},
	{
		default: 'PUT',
		desc: 'The http method to use when saving the text field',
		name: 'method',
		type: 'string',
	},
	{
		default: 'undefined',
		desc: "Sets the component's name attribute.",
		name: 'name',
		type: 'string',
	},
	{
		default: 'primary',
		desc: `${colorDesc} display value underline`,
		name: 'underlineColor',
		type: 'string',
	},
	{
		default: 'dotted',
		desc: 'The style of the display value underline',
		name: 'underlineStyle',
		type: 'string',
	},
	{
		default: '1px',
		desc: 'The width of the display value underline',
		name: 'underlineWidth',
		type: 'string',
	},
	{
		default: true,
		desc: 'Displays/Hides the display value underline',
		name: 'underlined',
		type: 'boolean',
	},
	{
		default: 'default',
		desc: `${colorDesc} value`,
		name: 'valueColor',
		type: 'string',
	},
];

const autofocusProp = [
	{
		default: false,
		desc: 'If <code>true</code>, the field will autofocus',
		name: 'autofocus',
		type: 'boolean',
	},
];

const saveAndLoadingIconProps = [
	{
		default: false,
		desc: 'Displays/Hides the save icon',
		name: 'hideSaveIcon',
		type: 'boolean',
	},
	{
		default: 'mdi:mdi-loading mdi:mdi-spin',
		desc: 'The icon to use when loading',
		name: 'loadingIcon',
		type: 'string',
	},
	{
		default: 'primary',
		desc: `${colorDesc} loading icon`,
		name: 'loadingIconColor',
		type: 'string',
	},
	{
		default: 'primary',
		desc: `${colorDesc} save button`,
		name: 'saveButtonColor',
		type: "VBtn['$props']['color']",
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the save button',
		name: 'saveButtonSize',
		type: "VBtn['$props']['size']",
	},
	{
		default: 'Save',
		desc: 'The title of the save button',
		name: 'saveButtonTitle',
		type: 'string | undefined',
	},
	{
		default: 'text',
		desc: `${variantDesc} save button`,
		name: 'saveButtonVariant',
		type: "VBtn['$props']['variant']",
	},
	{
		default: 'mdi:mdi-content-save',
		desc: 'The icon to use to save',
		name: 'saveIcon',
		type: 'string',
	},
	{
		default: 'primary',
		desc: `${colorDesc} save icon`,
		name: 'saveIconColor',
		type: 'string',
	},
];

const trueFalseIconProps = [
	{
		default: false,
		desc: 'Sets value for falsy state',
		name: 'falseValue',
		type: 'boolean | string',
	},
	{
		default: 'mdi:mdi-close',
		desc: 'The <code>false</code> icon',
		name: 'iconFalse',
		type: 'string',
	},
	{
		default: 'danger',
		desc: `${colorDesc} icon when <code>false</code>`,
		name: 'iconFalseColor',
		type: 'string',
	},
	{
		default: 'No',
		desc: 'The title of the <code>false</code> icon',
		name: 'iconFalseTitle',
		type: 'string | undefined',
	},
	{
		default: 'mdi:mdi-check',
		desc: 'The <code>true</code> icon',
		name: 'iconTrue',
		type: 'string',
	},
	{
		default: 'success',
		desc: `${colorDesc} icon when <code>true</code>`,
		name: 'iconTrueColor',
		type: 'string',
	},
	{
		default: 'Yes',
		desc: 'The title of the <code>true</code> icon',
		name: 'iconTrueTitle',
		type: 'string | undefined',
	},
	{
		default: true,
		desc: 'Displays/Hides the icons',
		name: 'icons',
		type: 'boolean',
	},
	{
		default: true,
		desc: 'Sets value for truthy state',
		name: 'trueValue',
		type: 'boolean | string',
	},
];

const truncateProps = [
	{
		default: 0,
		desc: 'The number of characters to truncate the displayed value',
		name: 'truncateLength',
		type: 'number | undefined',
	},
	{
		default: '...',
		desc: 'The suffix to use when truncating the displayed value',
		name: 'truncateSuffix',
		type: 'string | undefined',
	},
];

const vInlineCheckboxProps = [
	...sharedProps,
	...trueFalseIconProps,
	...[
		{
			default: 'compact',
			desc: densityDesc,
			name: 'density',
			type: "VCheckbox['$props']['density']",
		},
		{
			default: 'mdi:mdi-checkbox-blank-outline',
			desc: 'The icon of the field when <code>false</code>',
			name: 'falseIcon',
			type: "VCheckbox['$props']['falseIcon']",
		},
		{
			default: 'mdi:mdi-checkbox-outline',
			desc: 'The icon of the field when <code>true</code>',
			name: 'trueIcon',
			type: "VCheckbox['$props']['trueIcon']",
		},
		{
			default: true,
			desc: 'Displays/Hides the icons',
			name: 'icons',
			type: 'boolean',
		},
	]
];

const vInlineSelectProps = [
	...sharedProps,
	...autofocusProp,
	...saveAndLoadingIconProps,
	...[
		{
			default: 'mdi:mdi-close-circle-outline',
			desc: 'The icon to use to clear the field',
			name: 'clearIcon',
			type: "VSelect['$props']['clearIcon']",
		},
		{
			default: false,
			desc: 'Allows for the component to be cleared',
			name: 'clearable',
			type: "VSelect['$props']['clearable']",
		},
		{
			default: 'compact',
			desc: densityDesc,
			name: 'density',
			type: "VSelect['$props']['density']",
		},
		{
			default: true,
			desc: 'Hides the selected items',
			name: 'hideSelected',
			type: "VSelect['$props']['hideSelected']",
		},
		{
			default: 'title',
			desc: 'The item title',
			name: 'itemTitle',
			type: "VSelect['$props']['itemTitle']",
		},
		{
			default: 'value',
			desc: 'The item value',
			name: 'itemValue',
			type: "VSelect['$props']['itemValue']",
		},
		{
			default: () => ([]),
			desc: 'The select list items',
			name: 'items',
			type: "VSelect['$props']['items']",
		},
		{
			default: 'underlined',
			desc: `${variantDesc} component`,
			name: 'variant',
			type: "VSelect['$props']['variant']",
		},
	]
];

const vInlineSwitchProps = [
	...sharedProps,
	...trueFalseIconProps,
	...[
		{
			default: 'compact',
			desc: densityDesc,
			name: 'density',
			type: "VSwitch['$props']['density']",
		},
		{
			default: 'mdi:mdi-checkbox-blank-outline',
			desc: 'The icon of the field when <code>false</code>',
			name: 'falseIcon',
			type: "falseIcon['$props']['falseIcon']",
		},
		{
			default: true,
			desc: 'Displays/Hides the icons',
			name: 'icons',
			type: 'boolean',
		},
	]
];

const vInlineTextareaProps = [
	...sharedProps,
	...autofocusProp,
	...saveAndLoadingIconProps,
	...truncateProps,
	...[
		{
			default: true,
			desc: 'Automatically grow the textarea depending on amount of text',
			name: 'autoGrow',
			type: "VTextarea['$props']['autoGrow']",
		},
		{
			default: 'compact',
			desc: densityDesc,
			name: 'density',
			type: "VTextarea['$props']['density']",
		},
		{
			default: 'underlined',
			desc: `${variantDesc} component`,
			name: 'variant',
			type: "VTextarea['$props']['variant']",
		},
	]
];

const vInlineTextFieldProps = [
	...sharedProps,
	...autofocusProp,
	...saveAndLoadingIconProps,
	...truncateProps,
	...[
		{
			default: 'compact',
			desc: densityDesc,
			name: 'density',
			type: "VTextField['$props']['density']",
		},
		{
			default: 'underlined',
			desc: `${variantDesc} component`,
			name: 'variant',
			type: "VTextField['$props']['variant']",
		},
	]
];
</script>

<style lang="scss" scoped>
:deep(code) {
	background-color: rgba(255, 255, 255, 0.1) !important;
	border-radius: 3px;
	font-size: 85%;
	font-weight: normal;
	padding: 0.2em 0.4em;
}

:deep(.v-theme--light) {
	code {
		background-color: rgba(0, 0, 0, 0.1) !important;
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
