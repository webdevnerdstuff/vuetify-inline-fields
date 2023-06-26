import { defineStore } from 'pinia';


const propsSupported = {
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
};

const colorDesc = 'Applies specified color to the';
const densityDesc = 'Adjusts the vertical height used by the component';
const variantDesc = 'Applies a distinct style to the';

const sharedProps = [
	{
		default: 'default',
		desc: `${colorDesc} cancel button`,
		name: 'cancel-button-color',
		type: "VBtn['$props']['color']",
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the cancel button',
		name: 'cancel-button-size',
		type: "VBtn['$props']['size']",
	},
	{
		default: 'Cancel',
		desc: 'The title of the cancel button',
		name: 'cancel-button-title',
		type: 'string | undefined',
	},
	{
		default: 'tonal',
		desc: `${variantDesc} cancel button`,
		name: 'cancel-button-variant',
		type: "VBtn['$props']['variant']",
	},
	{
		default: undefined,
		desc: 'The icon to use to cancel',
		name: 'cancel-icon',
		type: 'string | undefined',
	},
	{
		default: 'default',
		desc: `${colorDesc} cancel icon`,
		name: 'cancel-icon-color',
		type: 'string',
	},
	{
		default: false,
		desc: 'If <code>true</code>, the field will close when the user opens another inline form element',
		name: 'close-siblings',
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
		default: 'empty',
		desc: 'Text to display when the field is empty',
		name: 'empty-text',
		type: 'string',
	},
	{
		default: false,
		desc: 'If set to <code>true</code> will only show the field',
		name: 'field-only',
		type: 'boolean',
	},
	{
		default: true,
		desc: 'Hides hint and validation errors. When set to auto messages will be rendered only if there\'s a message (hint, error message, counter value etc) to display',
		name: 'hide-details',
		type: 'boolean'
	},
	{
		default: () => ({}),
		desc: 'The item object',
		name: 'item',
		type: 'Record<string, unknown>',
	},
	{
		default: undefined,
		desc: 'Sets the text of the <code>v-label</code> or <code>v-field-label</code> component',
		name: 'label',
		type: 'string',
	},
	{
		default: 'true',
		desc: 'Sets the text of the field cursor to <code>wait</code> and prevents the field from opening until <code>loading</code> has returned to false',
		name: 'loading-wait',
		type: 'boolean',
	},
	{
		default: undefined,
		desc: "Sets the component's name attribute",
		name: 'name',
		type: 'string',
	},
	{
		default: true,
		desc: 'Adjusts padding to help the field to be vertically centered in the table cell',
		name: 'table-field',
		type: 'boolean',
	},
	{
		default: 'primary',
		desc: `${colorDesc} display value underline`,
		name: 'underline-color',
		type: 'string',
	},
	{
		default: 'dotted',
		desc: 'The style of the display value underline',
		name: 'underline-style',
		type: 'string',
	},
	{
		default: '1px',
		desc: 'The width of the display value underline',
		name: 'underline-width',
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
		name: 'value-color',
		type: 'string',
	},
];

const autofocusProp = [
	{
		default: false,
		desc: 'If <code>true</code>, the field will autofocus',
		name: 'auto-focus',
		type: 'boolean',
	},
];

const saveAndLoadingIconProps = [
	{
		default: false,
		desc: 'Displays/Hides the save icon',
		name: 'hide-save-icon',
		type: 'boolean',
	},
	{
		default: undefined,
		desc: 'The icon to use when loading',
		name: 'loading-icon',
		type: 'string | undefined',
	},
	{
		default: 'primary',
		desc: `${colorDesc} loading icon`,
		name: 'loading-icon-color',
		type: 'string',
	},
	{
		default: 'primary',
		desc: `${colorDesc} save button`,
		name: 'save-button-color',
		type: "VBtn['$props']['color']",
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the save button',
		name: 'save-button-size',
		type: "VBtn['$props']['size']",
	},
	{
		default: 'Save',
		desc: 'The title of the save button',
		name: 'save-button-title',
		type: 'string | undefined',
	},
	{
		default: 'text',
		desc: `${variantDesc} save button`,
		name: 'save-button-variant',
		type: "VBtn['$props']['variant']",
	},
	{
		default: undefined,
		desc: 'The icon to use to save',
		name: 'save-icon',
		type: 'string | undefined',
	},
	{
		default: 'primary',
		desc: `${colorDesc} save icon`,
		name: 'save-icon-color',
		type: 'string',
	},
];

const trueFalseIconProps = [
	{
		default: false,
		desc: 'Sets value for falsy state',
		name: 'false-value',
		type: 'boolean | string',
	},
	{
		default: undefined,
		desc: 'The <code>false</code> icon',
		name: 'icon-false',
		type: 'string | undefined',
	},
	{
		default: 'danger',
		desc: `${colorDesc} icon when <code>false</code>`,
		name: 'icon-false-color',
		type: 'string',
	},
	{
		default: 'No',
		desc: 'The title of the <code>false</code> icon',
		name: 'icon-false-title',
		type: 'string | undefined',
	},
	{
		default: undefined,
		desc: 'The <code>true</code> icon',
		name: 'icon-true',
		type: 'string | undefined',
	},
	{
		default: 'success',
		desc: `${colorDesc} icon when <code>true</code>`,
		name: 'icon-true-color',
		type: 'string',
	},
	{
		default: 'Yes',
		desc: 'The title of the <code>true</code> icon',
		name: 'icon-true-title',
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
		name: 'true-value',
		type: 'boolean | string',
	},
];

const truncateProps = [
	{
		default: 0,
		desc: 'The number of characters to truncate the displayed value',
		name: 'truncate-length',
		type: 'number | undefined',
	},
	{
		default: '...',
		desc: 'The suffix to use when truncating the displayed value',
		name: 'truncate-suffix',
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
			default: undefined,
			desc: 'The icon of the field when <code>false</code>',
			name: 'false-icon',
			type: "VCheckbox['$props']['falseIcon']",
		},
		{
			default: undefined,
			desc: 'The icon of the field when <code>true</code>',
			name: 'true-icon',
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
			default: undefined,
			desc: 'The icon to use to clear the field',
			name: 'clear-icon',
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
			name: 'hide-selected',
			type: "VSelect['$props']['hideSelected']",
		},
		{
			default: 'title',
			desc: 'The item title',
			name: 'item-title',
			type: "VSelect['$props']['itemTitle']",
		},
		{
			default: 'value',
			desc: 'The item value',
			name: 'item-value',
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
			default: undefined,
			desc: 'The icon of the field when <code>false</code>',
			name: 'false-icon',
			type: "VSwitch['$props']['falseIcon']",
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
			name: 'auto-grow',
			type: "VTextarea['$props']['autoGrow']",
		},
		{
			default: 'compact',
			desc: densityDesc,
			name: 'density',
			type: "VTextarea['$props']['density']",
		},
		{
			default: 1,
			desc: 'Default row count',
			name: 'rows',
			type: "VTextarea['$props']['rows']",
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

export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			autofocusProp,
			propsSupported,
			saveAndLoadingIconProps,
			sharedProps,
			trueFalseIconProps,
			truncateProps,
			vInlineCheckboxProps,
			vInlineSelectProps,
			vInlineSwitchProps,
			vInlineTextFieldProps,
			vInlineTextareaProps,
		};
	},
});
