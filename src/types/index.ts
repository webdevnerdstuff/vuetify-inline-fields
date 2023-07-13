/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import type {
	CSSProperties,
	JSXComponent,
	MaybeRef,
	Ref,
} from 'vue';
import type {
	VBtn,
	VCard,
	VCheckbox,
	VIcon,
	VSelect,
	VSwitch,
	VTextField,
	VTextarea,
} from 'vuetify/components';
import type { IconOptions, ThemeInstance } from 'vuetify';
import type { EventBusKey } from '@vueuse/core';


// -------------------------------------------------- Misc //
export interface KeyStringAny<T = any> {
	[key: string]: T;
};


// -------------------------------------------------- Types //
export type FieldValue = any;
export type TimeOpened = Date | null;

export type GlobalDensity = VCheckbox['$props']['density'] | VSelect['$props']['density'] | VSwitch['$props']['density'] | VTextField['$props']['density'] | VTextarea['$props']['density'];
export type GlobalVariant = VSelect['$props']['variant'] | VTextField['$props']['variant'] | VTextarea['$props']['variant'];

export type VIconColor = VIcon['$props']['color'];
export type VIconSize = VIcon['$props']['size'];
export type VIconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;

export type VBtnColor = VBtn['$props']['color'];
export type VBtnSize = VBtn['$props']['size'];
export type VBtnVariant = VBtn['$props']['variant'];


// -------------------------------------------------- Colors //
export type HEXColor = string;
export type HSLColor = [number, number, number, number | string];
export type RGBColor = [number, number, number, number | string];



// -------------------------------------------------- Props //
export interface SharedProps {
	autofocus?: boolean;
	cancelButtonColor?: VBtnColor;
	cancelButtonSize?: VBtnSize;
	cancelButtonTitle?: string | undefined;
	cancelButtonVariant?: VBtnVariant;
	cancelIcon?: string | undefined;
	cancelIconColor?: string;
	cardField?: boolean;
	cardOffsetX?: number;
	cardOffsetY?: number;
	cardProps?: VCard['$props'];
	closeSiblings?: boolean;
	color?: string;
	disabled?: boolean;
	displayAppendIcon?: VIconValue;
	displayAppendIconColor?: VIconColor;
	displayAppendIconSize?: VIconSize;
	displayAppendInnerIcon?: VIconValue;
	displayAppendInnerIconColor?: VIconColor;
	displayAppendInnerIconSize?: VIconSize;
	displayPrependIcon?: VIconValue;
	displayPrependIconColor?: VIconColor;
	displayPrependIconSize?: VIconSize;
	displayPrependInnerIcon?: VIconValue;
	displayPrependInnerIconColor?: VIconColor;
	displayPrependInnerIconSize?: VIconSize;
	emptyText?: string;
	error?: boolean;
	falseValue?: boolean | string | undefined;
	fieldOnly?: boolean;
	hideDetails?: boolean;
	hideSaveIcon?: boolean;
	iconFalse?: string | undefined;
	iconFalseColor?: string;
	iconFalseTitle?: string | undefined;
	iconTrue?: string | undefined;
	iconTrueColor?: string;
	iconTrueTitle?: string | undefined;
	icons?: boolean;
	item?: Record<string, unknown>;
	label?: string;
	loading?: boolean;
	loadingIcon?: string | undefined;
	loadingIconColor?: string;
	loadingWait?: boolean;
	name?: string;
	required?: boolean;
	saveButtonColor?: VBtnColor;
	saveButtonSize?: VBtnSize;
	saveButtonTitle?: string | undefined;
	saveButtonVariant?: VBtnVariant;
	saveIcon?: string | undefined;
	saveIconColor?: string;
	tableField?: boolean;
	trueValue?: boolean | string | undefined;
	truncateLength?: number | undefined;
	truncateSuffix?: string | undefined;
	underlineColor?: string;
	underlineStyle?: string;
	underlineWidth?: string;
	underlined?: boolean;
	valueColor?: string;
}

// Component Props //
export interface VInlineCheckboxProps extends Omit<SharedProps,
	'autofocus' | 'truncateLength' | 'truncateSuffix'
> {
	density?: VCheckbox['$props']['density'];
	falseIcon?: string | undefined;
	trueIcon?: string | undefined;
}

export interface VInlineSelectProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue' | 'truncateLength' | 'truncateSuffix'
> {
	clearIcon?: string | undefined;
	clearable?: VSelect['$props']['clearable'];
	density?: VSelect['$props']['density'];
	hideSelected?: VSelect['$props']['hideSelected'];
	itemTitle?: VSelect['$props']['itemTitle'];
	itemValue?: VSelect['$props']['itemValue'];
	items?: VSelect['$props']['items'];
	menu?: VSelect['$props']['menu'];
	rules?: VSelect['$props']['rules'];
	variant?: VSelect['$props']['variant'];
}

export interface VInlineSwitchProps extends Omit<SharedProps,
	'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveButtonColor' | 'saveButtonSize' | 'saveIcon' | 'saveIconColor' | 'saveButtonTitle' | 'saveButtonVariant' | 'truncateLength' | 'truncateSuffix'
> {
	density?: VSwitch['$props']['density'];
	falseIcon?: VSwitch['$props']['falseIcon'];
}

export interface VInlineTextareaProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
> {
	autoGrow?: VTextarea['$props']['autoGrow'];
	clearIcon?: string | undefined;
	density?: VTextarea['$props']['density'];
	rows?: VTextarea['$props']['rows'];
	rules?: VTextarea['$props']['rules'];
	variant?: VTextarea['$props']['variant'];
}

export interface VInlineTextFieldProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
> {
	clearIcon?: string | undefined;
	density?: VTextField['$props']['density'];
	rules?: VTextField['$props']['rules'];
	variant?: VTextField['$props']['variant'];
}


// -------------------------------------------------- Components //
export interface UseCardContainerStyle {
	(
		options: {
			field: HTMLElement | null;
			cardOffsetX: SharedProps['cardOffsetX'];
			cardOffsetY: SharedProps['cardOffsetY'];
			cardMinWidth: VCard['$props']['minWidth'];
			cardWidth: VCard['$props']['width'];
			name?: string;
		},
	): CSSProperties;
}


// -------------------------------------------------- Components //
export interface BooleanIcons extends
	Required<Pick<SharedProps, 'iconFalseColor' | 'iconFalseTitle' | 'iconTrueColor' | 'iconTrueTitle'>>,
	Pick<SharedProps,
		'iconFalse' |
		'iconTrue'
	> { };


export interface DisplayValueProps {
	[key: string]: any;
	color: SharedProps['color'];
	displayAppendIcon: SharedProps['displayAppendIcon'];
	displayAppendIconColor: SharedProps['displayAppendIconColor'];
	displayAppendInnerIcon: SharedProps['displayAppendInnerIcon'];
	displayAppendInnerIconColor: SharedProps['displayAppendInnerIconColor'];
	displayPrependIcon: SharedProps['displayPrependIcon'];
	displayPrependIconColor: SharedProps['displayPrependIconColor'];
	displayPrependInnerIcon: SharedProps['displayPrependInnerIcon'];
	displayPrependInnerIconColor: SharedProps['displayPrependInnerIconColor'];
	displayValue: any;
	empty?: Ref<boolean> | boolean;
	error?: MaybeRef<boolean> | boolean | undefined;
	field: string;
	underlineColor?: SharedProps['underlineColor'];
	underlineStyle?: SharedProps['underlineStyle'];
	underlineWidth?: SharedProps['underlineWidth'];
	underlined?: SharedProps['underlined'];
}

export interface SaveFieldButtons extends
	Required<Pick<SharedProps,
		'cancelButtonColor' |
		'cancelButtonSize' |
		'cancelButtonVariant' |
		'cancelButtonTitle' |
		'cancelIconColor' |
		'error' |
		'fieldOnly' |
		'hideSaveIcon' |
		'loadingIconColor' |
		'saveButtonColor' |
		'saveButtonSize' |
		'saveButtonTitle' |
		'saveButtonVariant' |
		'saveIconColor' |
		'saveButtonVariant'
	>>,
	Pick<SharedProps,
		'cancelIcon' |
		'loadingIcon' |
		'saveIcon'
	> { loading: boolean; };


export interface UseCancelButtonClass {
	(
		options: {
			cancelButtonVariant?: SharedProps['cancelButtonVariant'],
		},
	): object;
}


// -------------------------------------------------- Composables //

// ------------------------ Main Container //
export interface UseInlineFieldsContainerClass {
	(
		options: {
			density?: GlobalDensity,
			disabled?: Ref<boolean> | boolean,
			field?: Ref<string> | string,
			iconSet?: string,
			loading?: Ref<boolean> | boolean,
			loadingWait?: Ref<SharedProps['loadingWait']> | SharedProps['loadingWait'],
			tableField?: SharedProps['tableField'],
			variant?: GlobalVariant,
		},
	): object;
}

// ------------------------ Display Value Container //
export interface UseDisplayContainerClass {
	(
		options: {
			density?: GlobalDensity,
			field?: Ref<string> | string,
		},
	): object;
}

export interface UseDisplayInputControlClass {
	(
		options: {
			density?: GlobalDensity,
			variant?: GlobalVariant,
		},
	): object;
}

export interface UseDisplaySelectionControlClass {
	(
		options: {
			density?: GlobalDensity,
		},
	): object;
}

export interface UseDisplayValueClass {
	(
		name: string,
		valueColor: SharedProps['valueColor'],
		options: {
			empty?: Ref<boolean> | boolean,
			error?: Ref<boolean> | boolean,
		},
	): object;
}

export interface UseDisplayValueStyles {
	(
		options: {
			color: SharedProps['color'],
			error: MaybeRef<boolean> | boolean | undefined,
			theme: ThemeInstance,
			underlineColor: SharedProps['underlineColor'],
			underlineStyle: SharedProps['underlineStyle'],
			underlineWidth: SharedProps['underlineWidth'],
			underlined: SharedProps['underlined'],
		}
	): CSSProperties;
}

// ------------------------ Display Value Container Prepend/Append Icons //
export interface UsePrependAppendIconClasses {
	(
		options: {
			inner?: Ref<boolean> | boolean,
			position?: Ref<string> | string,
		},
	): object;
}

export interface UsePrependAppendIconStyles {
	(
		options: {
			underlineWidth: SharedProps['underlineWidth'],
		}
	): CSSProperties;
}

// ------------------------ Field Container //
export interface UseFieldContainerClass {
	(
		options: {
			active?: Ref<boolean> | boolean,
			name?: string,
		},
	): object;
}


export interface UseCardContainerClass {
	(
		options: {
			showField?: boolean;
			name?: string;
		}
	);
}

// ------------------------ Icons //
export interface UseGetIcon {
	(
		options: {
			icon: string | undefined,
			iconOptions: IconOptions | undefined,
			name: string,
		}
	): string;
}

// ------------------------ Other //
export interface UseCheckForErrors {
	(
		options: {
			required?: SharedProps['required'],
			rules?: VTextField['$props']['rules'] | VTextarea['$props']['rules'] | VSelect['$props']['rules'],
			value?: FieldValue,
		}
	): {
		errors: boolean;
		results: string[];
	};
}

export interface UseToggleField {
	(
		options: {
			attrs: object,
			closeSiblings: SharedProps['closeSiblings'],
			fieldOnly: SharedProps['fieldOnly'],
			props: object,
			showField: Ref<boolean> | boolean,
			timeOpened: TimeOpened,
		}
	): {
		settings: {
			[key: string]: string | unknown;
		},
		showField: boolean,
		timeOpened: TimeOpened,
	};
}

export interface UseGetFieldCoordinates {
	(
		options: {
			cardOffsetX: SharedProps['cardOffsetX'],
			cardOffsetY: SharedProps['cardOffsetY'],
			field: HTMLElement | null,
		}
	);
}

export interface UseTruncateText {
	(
		options: {
			length: SharedProps['truncateLength'],
			suffix: SharedProps['truncateSuffix'],
			text: string;
		}
	): FieldValue;
}


// -------------------------------------------------- Close Siblings Event Bus //
export const CloseSiblingsBus: EventBusKey<TimeOpened> = Symbol('identifier');


// ------------------------- Helpers //
export interface UseConvertToUnit {
	(
		options: {
			str: string | number,
			unit?: string,
		}
	): string | void;
}

export interface UseTruthyModelValue {
	(
		options: {
			modelValue: any,
			trueValue?: any,
		}
	): boolean;
}
