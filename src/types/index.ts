/* eslint-disable no-unused-vars */
import type {
	VBtn,
	VCheckbox,
	VSelect,
	VSwitch,
	VTextField,
	VTextarea,
} from 'vuetify/components';
import {
	AxiosError,
} from 'axios';


// -------------------------------------------------- Vuetify Types //
export type Density = null | 'default' | 'comfortable' | 'compact';


// -------------------------------------------------- Props //
export interface SharedProps {
	apiRoute?: string;
	autofocus?: boolean;
	cancelButtonColor?: VBtn['$props']['color'];
	cancelButtonSize?: VBtn['$props']['size'];
	cancelButtonTitle?: string | undefined;
	cancelButtonVariant?: VBtn['$props']['variant'];
	cancelIcon?: string;
	cancelIconColor?: string;
	closeSiblings?: boolean;
	color?: string;
	disabled?: boolean;
	doNotSave?: boolean;
	emptyText?: string;
	falseValue?: boolean | string;
	fieldOnly?: boolean;
	hideDetails?: boolean;
	hideSaveIcon?: boolean;
	iconFalse?: string;
	iconFalseColor?: string;
	iconFalseTitle?: string | undefined;
	iconTrue?: string;
	iconTrueColor?: string;
	iconTrueTitle?: string | undefined;
	icons?: boolean;
	item: Record<string, unknown>;
	label?: string;
	loadingIcon?: string;
	loadingIconColor?: string;
	method?: string;
	name: string;
	saveButtonColor?: VBtn['$props']['color'];
	saveButtonSize?: VBtn['$props']['size'];
	saveButtonTitle?: string | undefined;
	saveButtonVariant?: VBtn['$props']['variant'];
	saveIcon?: string;
	saveIconColor?: string;
	trueValue?: boolean | string;
	underlineColor?: string;
	underlineStyle?: string;
	underlineWidth?: string;
	underlined?: boolean;
	valueColor?: string;
}



// Component Props //
export interface VInlineCheckboxProps extends Omit<SharedProps,
	'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveButtonColor' | 'saveButtonSize' | 'saveIcon' | 'saveIconColor' | 'saveButtonTitle' | 'saveButtonVariant'
> {
	density?: VCheckbox['$props']['density'];
	falseIcon?: VCheckbox['$props']['falseIcon'];
	trueIcon?: VCheckbox['$props']['trueIcon'];
}

export interface VInlineSelectProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
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
	'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveButtonColor' | 'saveButtonSize' | 'saveIcon' | 'saveIconColor' | 'saveButtonTitle' | 'saveButtonVariant'
> {
	density?: VSwitch['$props']['density'];
	falseIcon?: VSwitch['$props']['falseIcon'];
}

export interface VInlineTextareaProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
> {
	autoGrow?: VTextarea['$props']['autoGrow'];
	density?: VTextarea['$props']['density'];
	variant?: VTextarea['$props']['variant'];
}

export interface VInlineTextFieldProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
> {
	density?: VTextField['$props']['density'];
	variant?: VTextField['$props']['variant'];
}

export type BooleanIcons = Required<Pick<SharedProps, 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle'>>;

export interface SaveFieldButtons extends Required<Pick<SharedProps,
	'cancelButtonColor' |
	'cancelButtonSize' |
	'cancelButtonVariant' |
	'cancelButtonTitle' |
	'cancelIcon' |
	'cancelIconColor' |
	'fieldOnly' |
	'hideSaveIcon' |
	'loadingIcon' |
	'loadingIconColor' |
	'saveButtonColor' |
	'saveButtonSize' |
	'saveButtonTitle' |
	'saveButtonVariant' |
	'saveIconColor' |
	'saveButtonVariant' |
	'saveIcon'
>> {
	loading: boolean;
};


// -------------------------------------------------- Methods //
export type FieldValue = string | boolean | number | object | [] | null | { [key: string]: string | unknown; };
export type TimeOpened = Date | null;


// -------------------------------------------------- Composables //
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
