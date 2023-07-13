export const defaultCardProps = {
	elevation: 2,
	variant: 'flat',
};


// * ---------------------------------------- The shared props for all inline fields //
export const sharedProps = {
	cancelButtonColor: 'default',
	cancelButtonSize: 'x-small',
	cancelButtonTitle: 'Cancel',
	cancelButtonVariant: 'text' as const,
	cancelIcon: undefined,
	cancelIconColor: 'default',
	cardField: false,
	cardOffsetX: 0,
	cardOffsetY: 0,
	cardProps: () => ({}) as const,
	closeSiblings: false,
	color: 'primary',
	density: 'compact' as const,
	disabled: false,
	displayAppendIcon: undefined,
	displayAppendIconColor: 'primary',
	displayAppendIconSize: 'x-small',
	displayAppendInnerIcon: undefined,
	displayAppendInnerIconColor: 'secondary',
	displayAppendInnerIconSize: 'x-small',
	displayPrependIcon: undefined,
	displayPrependIconColor: 'danger',
	displayPrependIconSize: 'x-small',
	displayPrependInnerIcon: undefined,
	displayPrependInnerIconColor: 'success',
	displayPrependInnerIconSize: 'x-small',
	emptyText: 'empty',
	fieldOnly: false,
	hideDetails: true,
	label: '',
	loading: false,
	loadingWait: true,
	name: '',
	tableField: true,
	underlineColor: 'primary',
	underlineStyle: 'dotted',
	underlineWidth: '2px',
	underlined: true,
	valueColor: 'default',
};

// * ------------------------------ Autofocus //
const autofocus = {
	autofocus: true,
};

// * ------------------------------ Save & Loading Icon //
const saveAndLoadingIconProps = {
	hideSaveIcon: false,
	loadingIcon: undefined,
	loadingIconColor: 'primary',
	saveButtonColor: 'primary',
	saveButtonSize: 'x-small',
	saveButtonTitle: 'Save',
	saveButtonVariant: 'text' as const,
	saveIcon: undefined,
	saveIconColor: 'primary',
};

// * ------------------------------ True/False Icons //
const trueFalseIcons = {
	falseValue: false,
	iconFalse: undefined,
	iconFalseColor: 'danger',
	iconFalseTitle: 'No',
	iconTrue: undefined,
	iconTrueColor: 'success',
	iconTrueTitle: 'Yes',
	icons: true,
	trueValue: true,
};

// * ------------------------------ Component Value Icons  //
const valueIcons = {
	icons: true,
};


// * ---------------------------------------- Fields //
// v-checkbox //
const checkboxProps = {
	...sharedProps,
	...trueFalseIcons,
	...saveAndLoadingIconProps,
	...{
		falseIcon: undefined,
		icons: true,
		trueIcon: undefined,
	},
};

// v-select //
const selectProps = {
	...sharedProps,
	...autofocus,
	...saveAndLoadingIconProps,
	...{
		clearIcon: undefined,
		clearable: false,
		hideSelected: true,
		itemTitle: 'title',
		itemValue: 'value',
		items: () => ([]),
		menu: true,
		variant: 'underlined' as const,
	},
};

// v-switch //
const switchProps = {
	...sharedProps,
	...trueFalseIcons,
	...valueIcons,
	...{
		falseIcon: '',
	},
};

// v-textarea //
const textareaProps = {
	...autofocus,
	...saveAndLoadingIconProps,
	...sharedProps,
	...{
		autoGrow: true,
		rows: 1,
		truncateLength: undefined,
		truncateSuffix: '...',
		variant: 'underlined' as const,
	},
};

// v-text-field //
const textFieldProps = {
	...sharedProps,
	...autofocus,
	...saveAndLoadingIconProps,
	...{
		truncateLength: undefined,
		truncateSuffix: '...',
		variant: 'underlined' as const,
	}
};


// Export //
export {
	checkboxProps,
	selectProps,
	switchProps,
	textFieldProps,
	textareaProps,
};
