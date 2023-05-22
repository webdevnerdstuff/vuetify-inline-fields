import type {
	Density,
	SharedProps,
	TrueFalseIconsProps,
	VInlineCheckboxProps,
	VInlineSelectProps,
	VInlineSwitchProps,
	VInlineTextFieldProps,
	VInlineTextareaProps,
	ValueIconsProps,
} from '@/types';
import type {
	VSelect,
	VTextField,
	VTextarea,
} from 'vuetify/components';

// * ---------------------------------------- The shared props for all inline fields //
export const sharedProps: SharedProps = {
	// ? The api route to save the field - [ All Fields ] //
	apiRoute: {
		default: '',
		required: false,
		type: String,
	},

	// ? The icon to use to cancel - [ All Fields ] //
	cancelIcon: {
		default: 'mdi mdi-close',
		required: false,
		type: String,
	},

	// ? If true, the field will close when the user opens another inline form element - [ All Fields ] //
	closeSiblings: {
		default: true,
		required: false,
		type: Boolean,
	},

	// ? The Color of the field - [ All Fields ] //
	color: {
		default: 'primary',
		required: false,
		type: String,
	},

	// ? The field density - [ All Fields ] //
	density: {
		default: 'compact',
		required: false,
		type: String as PropType<Density>,
	},

	// ? If true, the field will not save to the database. Emits update:model-value - [ All Fields ] //
	doNotSave: {
		default: false,
		required: false,
		type: Boolean,
	},

	emptyText: {
		default: 'empty',
		required: false,
		type: String,
	},

	// ? If set to true will only show the field - [ All Fields ] //
	fieldOnly: {
		default: false,
		required: false,
		type: Boolean,
	},

	// ? Displays/Hides the field details //
	hideDetails: {
		default: true,
		required: false,
		type: Boolean,
	},

	// ? The item object - [ All Fields ] //
	item: {
		default: () => ({}),
		required: true,
		type: Object,
	},

	// ? The field label - [ All Fields ] //
	label: {
		default: '',
		required: false,
		type: String,
	},

	// ? The http method to use when saving the text field - [ All Fields ] //
	method: {
		default: 'put',
		required: false,
		type: String,
	},

	// ? The column name of the field - [ All Fields ] //
	name: {
		default: '',
		required: true,
		type: String,
	},

	// ? The color of the underline - [ All Fields ] //
	underlineColor: {
		default: '',
		required: false,
		type: String,
	},

	// ? The style of the underline - [ All Fields ] //
	underlineStyle: {
		default: 'dotted',
		required: false,
		type: String,
	},

	// ? The width of the underline - [ All Fields ] //
	underlineWidth: {
		default: '1px',
		required: false,
		type: String,
	},

	// ? Displays/Hides the value underline - [ All Fields ] //
	underlined: {
		default: true,
		required: false,
		type: Boolean,
	},

	// ? The color of the value - [ All Fields ] //
	valueColor: {
		default: 'default',
		required: false,
		type: String,
	},

};

// * ------------------------------ Autofocus //
const autofocus = {
	// ? If true, the field will autofocus //
	autofocus: {
		default: true,
		required: false,
		type: Boolean,
	},
};

// * ------------------------------ Save & Loading Icon //
const saveAndLoadingIconProps = {
	// ? Displays/Hides the save icon //
	hideSaveIcon: {
		default: false,
		required: false,
		type: Boolean,
	},

	// ? The icon to use when loading //
	loadingIcon: {
		default: 'mdi mdi-loading mdi-spin',
		required: false,
		type: String,
	},

	// ? The icon to use when loading //
	loadingIconColor: {
		default: 'primary',
		required: false,
		type: String,
	},

	// ? The icon to use to save //
	saveIcon: {
		default: 'mdi mdi-content-save',
		required: false,
		type: String,
	},

	// ? The icon to use to save //
	saveIconColor: {
		default: 'primary',
		required: false,
		type: String,
	},
};

// * ------------------------------ True/False Icons //
const trueFalseIcons: TrueFalseIconsProps = {
	// ? The "false" value of the field - [ v-checkbox, v-switch ] //
	falseValue: {
		default: false,
		required: false,
		type: [Boolean, String],
	},

	// ? The false icon - [v-checkbox, v-switch] //
	iconFalse: {
		default: 'mdi mdi-close',
		required: false,
		type: String,
	},

	// ? The color of the icon when false - [v-checkbox, v-switch] //
	iconFalseColor: {
		default: 'text-danger',
		required: false,
		type: String,
	},

	// ? The true icon - [v-checkbox, v-switch] //
	iconTrue: {
		default: 'mdi mdi-check',
		required: false,
		type: String,
	},

	// ? The color of the icon when true - [v-checkbox, v-switch] //
	iconTrueColor: {
		default: 'text-success',
		required: false,
		type: String,
	},

	// ? Displays/Hides the icons - [v-checkbox, v-switch] //
	icons: {
		default: true,
		required: false,
		type: Boolean,
	},

	// ? The "true" value of the field - [v-checkbox, v-switch] //
	trueValue: {
		default: true,
		required: false,
		type: [Boolean, String],
	},
};

// * ------------------------------ Component Value Icons  //
const valueIcons: ValueIconsProps = {
	// ? Displays/Hides the component value icons //
	icons: {
		default: true,
		required: false,
		type: Boolean,
	},
};


// * ---------------------------------------- Exports //

// v-checkbox //
const checkboxProps: VInlineCheckboxProps = {
	...sharedProps,
	...trueFalseIcons,
	...{
		// ? The icon of the field when false - [ v-checkbox ] //
		falseIcon: {
			default: 'mdi mdi-checkbox-blank-outline',
			required: false,
			type: String,
		},
		// ? Displays/Hides the icons //
		icons: {
			default: true,
			required: false,
			type: Boolean,
		},
		// ? The icon of the field when true - [v-checkbox] //
		trueIcon: {
			default: 'mdi mdi-checkbox-outline',
			required: false,
			type: String,
		},
	},
};


// v-select //
const selectProps: VInlineSelectProps = {
	...sharedProps,
	...autofocus,
	...saveAndLoadingIconProps,
	...{
		// ? The icon to use to clear the field //
		clearIcon: {
			default: 'mdi mdi-close-circle-outline',
			required: false,
			type: String,
		},

		// ? If true, the field will be clearable //
		clearable: {
			default: false,
			required: false,
			type: Boolean,
		},

		// ? Hides the selected items //
		hideSelected: {
			default: true,
			required: false,
			type: Boolean,
		},

		itemTitle: {
			default: 'title',
			required: false,
			type: String,
		},

		itemValue: {
			default: 'value',
			required: false,
			type: String,
		},

		// ? The select list items - [v-select] //
		items: {
			default: () => ([]),
			required: true,
			type: Object,
		},

		// ? The variant of the field //
		variant: {
			default: 'underlined',
			required: false,
			type: String as PropType<VSelect['$props']['variant']>,
		},
	},
};


// v-switch //
const switchProps: VInlineSwitchProps = {
	...sharedProps,
	...trueFalseIcons,
	...valueIcons,
	...{
		// ? The icon of the field when false - [ v-checkbox ] //
		falseIcon: {
			default: '',
			required: false,
			type: String,
		},
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
const textareaProps: VInlineTextareaProps = {
	...autofocus,
	...saveAndLoadingIconProps,
	...sharedProps,
	...{
		// ? Automatically grow the textarea depending on amount of text //
		autoGrow: {
			default: true,
			required: false,
			type: Boolean,
		},
		// ? The variant of the field //
		variant: {
			default: 'filled',
			required: false,
			type: String as PropType<VTextarea['$props']['variant']>,
		},
	},
};

// v-text-field //
const textFieldProps: VInlineTextFieldProps = {
	...sharedProps,
	...autofocus,
	...saveAndLoadingIconProps,
	...{
		variant: {
			default: 'underlined',
			required: false,
			type: String as PropType<VTextField['$props']['variant']>,
		},
	}
};


// Default Export //
export { checkboxProps, selectProps, switchProps, textFieldProps, textareaProps };
