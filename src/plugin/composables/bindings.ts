const excludedSettings: string[] = [
	'cancelButtonColor',
	'cancelButtonSize',
	'cancelButtonTitle',
	'cancelButtonVariant',
	'cancelIcon',
	'cancelIconColor',
	'closeSiblings',
	'displayAppendIcon',
	'displayAppendIconColor',
	'displayAppendIconSize',
	'displayAppendInnerIcon',
	'displayAppendInnerIconColor',
	'displayAppendInnerIconSize',
	'displayPrependIcon',
	'displayPrependIconColor',
	'displayPrependIconSize',
	'displayPrependInnerIcon',
	'displayPrependInnerIconColor',
	'displayPrependInnerIconSize',
	'emptyText',
	'fieldOnly',
	'hideSaveIcon',
	'item',
	'loadingIcon',
	'loadingIconColor',
	'loadingWait',
	'saveButtonColor',
	'saveButtonSize',
	'saveButtonTitle',
	'saveButtonVariant',
	'saveIcon',
	'saveIconColor',
	'tableField',
	'truncateLength',
	'truncateSuffix',
	'underlineColor',
	'underlineStyle',
	'underlineWidth',
	'underlined',
	'valueColor',
];


export const useBindingSettings = (settings: object): object => {
	let bindingSettings = settings;

	bindingSettings = Object.entries(bindingSettings).filter(([key]) => {
		return !excludedSettings.includes(key);
	});

	return Object.fromEntries(bindingSettings as object[][]);
};
