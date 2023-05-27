// * ---------------------------------------- The shared props for all inline fields //
export const sharedProps = {
	// ? The api route to save the field - [ All Fields ] //
	apiRoute: '',

	// ? The icon to use to cancel - [ All Fields ] //
	cancelIcon: 'mdi mdi-close',

	// ? If true, the field will close when the user opens another inline form element - [ All Fields ] //
	closeSiblings: true,

	// ? The Color of the field - [ All Fields ] //
	color: 'primary',

	// ? The field density - [ All Fields ] //
	density: 'compact' as const,

	// ? Disabled the field - [ All Fields ] //
	disabled: false,

	// ? If true, the field will not save to the database. Emits update:model-value - [ All Fields ] //
	doNotSave: false,

	emptyText: 'empty',

	// ? If set to true will only show the field - [ All Fields ] //
	fieldOnly: false,

	// ? Displays/Hides the field details //
	hideDetails: true,

	// ! Required The item object - [ All Fields ] //
	// item: () => ({}),

	// ? The field label - [ All Fields ] //
	label: '',

	// ? The http method to use when saving the text field - [ All Fields ] //
	method: 'PUT',

	// ? The column name of the field - [ All Fields ] //
	name: '',

	// ? The color of the underline - [ All Fields ] //
	underlineColor: '',

	// ? The style of the underline - [ All Fields ] //
	underlineStyle: 'dotted',

	// ? The width of the underline - [ All Fields ] //
	underlineWidth: '1px',

	// ? Displays/Hides the value underline - [ All Fields ] //
	underlined: true,

	// ? The color of the value - [ All Fields ] //
	valueColor: 'default',
};

// * ------------------------------ Autofocus //
const autofocus = {
	// ? If true, the field will autofocus //
	autofocus: true,
};

// * ------------------------------ Save & Loading Icon //
const saveAndLoadingIconProps = {
	// ? Displays/Hides the save icon //
	hideSaveIcon: false,

	// ? The icon to use when loading //
	loadingIcon: 'mdi mdi-loading mdi-spin',

	// ? The icon to use when loading //
	loadingIconColor: 'primary',

	// ? The icon to use to save //
	saveIcon: 'mdi mdi-content-save',

	// ? The icon to use to save //
	saveIconColor: 'primary',
};

// * ------------------------------ True/False Icons //
const trueFalseIcons = {
	// ? The "false" value of the field - [ v-checkbox, v-switch ] //
	falseValue: false,

	// ? The false icon - [v-checkbox, v-switch] //
	iconFalse: 'mdi mdi-close',

	// ? The color of the icon when false - [v-checkbox, v-switch] //
	iconFalseColor: 'text-danger',

	// ? The true icon - [v-checkbox, v-switch] //
	iconTrue: 'mdi mdi-check',

	// ? The color of the icon when true - [v-checkbox, v-switch] //
	iconTrueColor: 'text-success',

	// ? Displays/Hides the icons - [v-checkbox, v-switch] //
	icons: true,

	// ? The "true" value of the field - [v-checkbox, v-switch] //
	trueValue: true,
};

// * ------------------------------ Component Value Icons  //
const valueIcons = {
	// ? Displays/Hides the component value icons //
	icons: true,
};


// * ---------------------------------------- Exports //

// v-checkbox //
const checkboxProps = {
	...sharedProps,
	...trueFalseIcons,
	...{
		// ? The icon of the field when false - [ v-checkbox ] //
		falseIcon: 'mdi mdi-checkbox-blank-outline',

		// ? Displays/Hides the icons //
		icons: true,

		// ? The icon of the field when true - [v-checkbox] //
		trueIcon: 'mdi mdi-checkbox-outline',
	},
};


// v-select //
const selectProps = {
	...sharedProps,
	...autofocus,
	...saveAndLoadingIconProps,
	...{
		// ? The icon to use to clear the field //
		clearIcon: 'mdi mdi-close-circle-outline',

		// ? If true, the field will be clearable //
		clearable: false,

		// ? Hides the selected items //
		hideSelected: true,

		itemTitle: 'title',

		itemValue: 'value',

		// ? The select list items - [v-select] //
		items: () => ([]),

		// ? The variant of the field //
		variant: 'underlined' as const,
	},
};


// v-switch //
const switchProps = {
	...sharedProps,
	...trueFalseIcons,
	...valueIcons,
	...{
		// ? The icon of the field when false - [ v-checkbox ] //
		falseIcon: '',
		// // ? Displays/Hides the icons //
		// icons: {
		// 	default: true,
		// 	required: false,
		// 	type: Boolean,
		// },
		// // ? The icon of the field when true - [v-checkbox] //
		// trueIcon: {
		// 	default: 'mdi mdi-checkbox-outline',
		// 	required: false,
		// 	type: String,
		// },
	},
};

// v-textarea //
const textareaProps = {
	...autofocus,
	...saveAndLoadingIconProps,
	...sharedProps,
	...{
		// ? Automatically grow the textarea depending on amount of text //
		autoGrow: true,
		// ? The variant of the field //
		variant: 'filled' as const,
	},
};

// v-text-field //
const textFieldProps = {
	...sharedProps,
	...autofocus,
	...saveAndLoadingIconProps,
	...{
		variant: 'underlined' as const,
	}
};


// Default Export //
export { checkboxProps, selectProps, switchProps, textFieldProps, textareaProps };
