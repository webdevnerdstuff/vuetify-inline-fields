/* eslint-disable no-unused-vars */
import {
	// CSSProperties,
	PropType,
	// StyleValue,
} from 'vue';
// import { ThemeInstance } from 'vuetify';
import type {
	VCheckbox,
	VSelect,
	VSwitch,
	VTextField,
	VTextarea,
} from 'vuetify/components';
import {
	AxiosError,
	// AxiosResponse,
} from 'axios';


// -------------------------------------------------- Vuetify Types //
export type Density = null | 'default' | 'comfortable' | 'compact';


// -------------------------------------------------- Props //
export interface SharedProps {
	apiRoute?: string;
	autofocus?: boolean; 																						// ? AutoFocusProps
	cancelIcon?: string;
	closeSiblings?: boolean;
	color?: string;
	// density?: Density;
	disabled?: boolean;
	doNotSave?: boolean;
	emptyText?: string;
	fieldOnly?: boolean;
	hideDetails?: boolean;
	item: Record<string, unknown>;
	label?: string;
	method?: string;
	name: string;
	underlineColor?: string;
	underlineStyle?: string;
	underlineWidth?: string;
	underlined?: boolean;
	valueColor?: string;

	hideSaveIcon?: boolean; 																			// ? SaveAndLoadingIconProps
	loadingIcon?: string;																					// ? SaveAndLoadingIconProps
	loadingIconColor?: string;																		// ? SaveAndLoadingIconProps
	saveIcon?: string;																						// ? SaveAndLoadingIconProps
	saveIconColor?: string;																				// ? SaveAndLoadingIconProps

	falseValue?: boolean | string;																// ? TrueFalseIconsProps
	iconFalse?: string;																						// ? TrueFalseIconsProps
	iconFalseColor?: string;																			// ? TrueFalseIconsProps
	iconTrue?: string;																						// ? TrueFalseIconsProps
	iconTrueColor?: string;																				// ? TrueFalseIconsProps
	icons?: boolean;																							// ? TrueFalseIconsProps && ValueIconsProps
	trueValue?: boolean | string;																	// ? TrueFalseIconsProps
}

export interface AutoFocusProps {
	autofocus: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
}

export interface SaveAndLoadingIconProps {
	hideSaveIcon: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	loadingIcon: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	loadingIconColor: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	saveIcon: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	saveIconColor: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
}

export interface TrueFalseIconsProps {
	falseValue?: boolean | string;
	iconFalse?: string;
	iconFalseColor?: string;
	iconTrue?: string;
	iconTrueColor?: string;
	icons?: boolean;																							// ? ValueIconsProps
	trueValue?: boolean | string;
}

export interface ValueIconsProps {
	icons?: boolean;
}

// Component Props //
export interface VInlineCheckboxProps extends Omit<SharedProps,
	'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveIcon' | 'saveIconColor'
> {
	density?: VCheckbox['$props']['density'];
	falseIcon?: VCheckbox['$props']['falseIcon'];
	trueIcon?: VCheckbox['$props']['trueIcon'];
}

export interface VInlineSelectProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconTrue' | 'iconTrueColor' | 'icons' | 'trueValue'
> {
	clearIcon?: VSelect['$props']['clearIcon'];
	clearable?: VSelect['$props']['clearable'];
	density?: VSelect['$props']['density'];
	hideSelected?: VSelect['$props']['hideSelected'];
	itemTitle?: VSelect['$props']['itemTitle'];
	itemValue?: VSelect['$props']['itemValue'];
	items?: VSelect['$props']['items'];
	variant?: VSelect['$props']['variant'];
}

export interface VInlineSwitchProps extends Omit<SharedProps,
	'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveIcon' | 'saveIconColor'
> {
	density?: VSwitch['$props']['density'];
	falseIcon?: VSwitch['$props']['falseIcon'];
}

export interface VInlineTextareaProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconTrue' | 'iconTrueColor' | 'icons' | 'trueValue'
> {
	autoGrow?: VTextarea['$props']['autoGrow'];
	density?: VTextarea['$props']['density'];
	variant?: VTextarea['$props']['variant'];
}

export interface VInlineTextFieldProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconTrue' | 'iconTrueColor' | 'icons' | 'trueValue'
> {
	density?: VTextField['$props']['density'];
	variant?: VTextField['$props']['variant'];
}


// -------------------------------------------------- Methods //
export type FieldValue = string | boolean | number | object | [] | null | { [key: string]: string | unknown; };
export type TimeOpened = Date | null;

export interface UseToggleField {
	(
		itemId: number,
		showField: boolean,
		attrs: object,
		props: object,
		timeOpened: TimeOpened,
		closeSiblings: boolean,
		fieldOnly: boolean,
	): {
		settings: {
			[key: string]: string | unknown;
		},
		showField: boolean,
		timeOpened: TimeOpened,
	};
}
export interface UseSaveValue {
	(
		settings: {
			[key: string]: string | unknown;
		},
		emit: {
			(e: 'loading', response: boolean): void;
			(e: 'error', error: AxiosError): AxiosError;
			(e: 'update', response: unknown): void;
		},
		name: string,
		value: FieldValue,
	): Promise<{ [key: string]: string | unknown; } | undefined>;
}



// -------------------------------------------------- Classes //



// -------------------------------------------------- Styles //



// -------------------------------------------------- Events  //



// -------------------------------------------------- Helpers //



// -------------------------------------------------- Emits //
