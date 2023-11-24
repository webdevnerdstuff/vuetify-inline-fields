import { defineStore } from 'pinia';


const propsSupported = {
	headers: [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: true,
			title: 'Name',
			width: '20%',
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
		type: "string | undefined",
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the cancel button',
		name: 'cancel-button-size',
		type: "string | number | undefined",
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
		default: '$close',
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
		default: 'false',
		desc: 'Displays the field as a card instead of inline. <code class="ic">card-field</code> overrides the <code class="ic">field-only</code> prop',
		name: 'card-field',
		type: 'boolean',
	},
	{
		default: '0',
		desc: 'Offsets the card field horizontally',
		name: 'card-offset-x',
		type: 'number',
	},
	{
		default: '0',
		desc: 'Offsets the card field vertically',
		name: 'card-offset-y',
		type: 'number',
	},
	{
		default: undefined,
		desc: 'Prop to pass to the card component',
		name: 'card-props',
		type: 'number',
	},
	{
		default: false,
		desc: 'If <code class="ic">true</code>, the table cell will be used as the trigger to display the field',
		name: 'cell',
		type: 'boolean',
	},
	{
		default: true,
		desc: 'If <code class="ic">true</code>, the underline will span the full width of the table cell. (used with the <code class="ic">cell</code> prop)',
		name: 'cell-underline-full-width',
		type: 'boolean',
	},
	{
		default: false,
		desc: 'If <code class="ic">true</code>, the field will close when the user opens another inline form element',
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
		desc: 'If set to <code class="ic">true</code> will only show the field',
		name: 'field-only',
		type: 'boolean',
	},
	{
		default: false,
		desc: 'Hides the cancel icon',
		name: 'hide-cancel-icon',
		type: 'boolean'
	},
	{
		default: true,
		desc: 'Hide details is not fully supported as the fields are intended for use in tables. You can set this prop to <code class="ic">false</code> to show the details but styling will not be ideal',
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
		desc: 'Label is not fully supported as the fields are intended for use in tables and the column header signifies what that column is for. You can set this prop to show the label but styling will not be ideal',
		name: 'label',
		type: 'string',
	},
	{
		default: 'true',
		desc: 'The loading state of the component. This is what is used to determine when to close the field. If the <code class="ic">loading-wait</code> prop is set to <code class="ic">true</code> the field will close without waiting for the loading process to complete',
		name: 'loading',
		type: 'boolean',
	},
	{
		default: 'true',
		desc: 'The cursor for unopened fields, with the same loading prop value, is set to "wait" and their selection is disabled until the loading process is completed. Additionally, the saving field will remain visible but disabled until the loading is finished',
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
		desc: 'If <code class="ic">true</code>, the field will autofocus',
		name: 'auto-focus',
		type: 'boolean',
	},
];

const clearIconProp = [
	{
		default: '$clear',
		desc: 'The icon to use to clear the field',
		name: 'clear-icon',
		type: "string | undefined",
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
		type: "string | undefined",
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the save/loading button',
		name: 'save-button-size',
		type: "string | number | undefined",
	},
	{
		default: 'Save',
		desc: 'The title of the save button',
		name: 'save-button-title',
		type: 'string | undefined',
	},
	{
		default: 'text',
		desc: `${variantDesc} save/loading button`,
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

const prependAppendIcons = [
	{
		default: undefined,
		desc: 'Creates a <code class="ic">v-icon</code> component after displayed value in the <a href="#slots-display-append"><code class="ic">display.append</code></a> slot',
		name: 'display-append-icon',
		type: 'string',
	},
	{
		default: undefined,
		desc: `${colorDesc} <code class="ic">display-append-icon</code>`,
		name: 'display-append-icon-color',
		type: 'string | undefined',
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the <code class="ic">display-append-icon</code> component. Can use the following predefined sizes: x-small, small, default, large, and x-large.',
		name: 'display-append-icon-size',
		type: 'string',
	},
	{
		default: undefined,
		desc: 'Creates a <code class="ic">v-icon</code> component after displayed value in the <a href="#slots-display-append-inner"><code class="ic">display.appendInner</code></a> slot',
		name: 'display-append-inner-icon',
		type: 'string',
	},
	{
		default: undefined,
		desc: `${colorDesc} <code class="ic">display-append-inner-icon</code>`,
		name: 'display-append-inner-icon-color',
		type: 'string | undefined',
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the <code class="ic">display-append-inner-icon</code> component. Can use the following predefined sizes: x-small, small, default, large, and x-large.',
		name: 'display-append-inner-icon-size',
		type: 'string',
	},
	{
		default: undefined,
		desc: 'Creates a <code class="ic">v-icon</code> component before displayed value in the <a href="#slots-display-prepend"><code class="ic">display.prepend</code></a> slot',
		name: 'display-prepend-icon',
		type: 'string',
	},
	{
		default: undefined,
		desc: `${colorDesc} <code class="ic">display-prepend-icon</code>`,
		name: 'display-prepend-icon-color',
		type: 'string | undefined',
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the <code class="ic">display-prepend-icon</code> component. Can use the following predefined sizes: x-small, small, default, large, and x-large.',
		name: 'display-prepend-icon-size',
		type: 'string',
	},
	{
		default: undefined,
		desc: 'Creates a <code class="ic">v-icon</code> component before displayed value in the <a href="#slots-display-prepend-inner"><code class="ic">display.prependInner</code></a> slot',
		name: 'display-prepend-inner-icon',
		type: 'string',
	},
	{
		default: undefined,
		desc: `${colorDesc} <code class="ic">display-prepend-inner-icon</code>`,
		name: 'display-prepend-inner-icon-color',
		type: 'string | undefined',
	},
	{
		default: 'x-small',
		desc: 'Sets the height and width of the <code class="ic">display-prepend-inner-icon</code> component. Can use the following predefined sizes: x-small, small, default, large, and x-large.',
		name: 'display-prepend-inner-icon-size',
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
		default: '$close',
		desc: 'The displayed <code class="ic">false</code> icon when the field is not editable',
		name: 'icon-false',
		type: 'string | undefined',
	},
	{
		default: 'danger',
		desc: `${colorDesc} icon when <code class="ic">false</code>`,
		name: 'icon-false-color',
		type: 'string',
	},
	{
		default: 'No',
		desc: 'The title of the <code class="ic">false</code> icon',
		name: 'icon-false-title',
		type: 'string | undefined',
	},
	{
		default: '$complete',
		desc: 'The displayed <code class="ic">true</code> icon when the field is not editable',
		name: 'icon-true',
		type: 'string | undefined',
	},
	{
		default: 'success',
		desc: `${colorDesc} icon when <code class="ic">true</code>`,
		name: 'icon-true-color',
		type: 'string',
	},
	{
		default: 'Yes',
		desc: 'The title of the <code class="ic">true</code> icon',
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
	...saveAndLoadingIconProps,
	...trueFalseIconProps,
	...[
		{
			default: '$close',
			desc: 'The icon of the checkbox when <code class="ic">false</code>',
			name: 'false-icon',
			type: "string | undefined",
		},
		{
			default: '$complete',
			desc: 'The icon of the checkbox when <code class="ic">true</code>',
			name: 'true-icon',
			type: "string | undefined",
		},
	]
];

const vInlineSelectProps = [
	...sharedProps,
	...autofocusProp,
	...clearIconProp,
	...prependAppendIcons,
	...saveAndLoadingIconProps,
	...[
		{
			default: false,
			desc: 'Allows for the component to be cleared',
			name: 'clearable',
			type: "boolean | undefined",
		},
		{
			default: true,
			desc: 'Hides the selected items',
			name: 'hide-selected',
			type: "boolean | undefined",
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
			default: '$close',
			desc: 'The icon of the field when <code class="ic">false</code>',
			name: 'false-icon',
			type: "VSwitch['$props']['falseIcon']",
		},
	]
];

const vInlineTextareaProps = [
	...sharedProps,
	...autofocusProp,
	...clearIconProp,
	...prependAppendIcons,
	...saveAndLoadingIconProps,
	...truncateProps,
	...[
		{
			default: true,
			desc: 'Automatically grow the textarea depending on amount of text',
			name: 'auto-grow',
			type: "boolean | undefined",
		},
		{
			default: 1,
			desc: 'Default row count',
			name: 'rows',
			type: "string | number | undefined",
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
	...clearIconProp,
	...prependAppendIcons,
	...saveAndLoadingIconProps,
	...truncateProps,
	...[
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
			prependAppendIcons,
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
