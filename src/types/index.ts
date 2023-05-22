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
	apiRoute: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	cancelIcon: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	closeSiblings: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	color: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	density: {
		default: Density,
		required: boolean,
		type: PropType<Density>;
	};
	doNotSave?: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	emptyText: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	fieldOnly: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	hideDetails: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	item: {
		default: () => {},
		required: boolean,
		type: PropType<Record<string, unknown>>;
	};
	label: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	method?: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	name: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	underlineColor: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	underlineStyle: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	underlineWidth: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	underlined: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	valueColor: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
};

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
	falseValue?: {
		default: boolean | string,
		required: boolean,
		type: PropType<boolean | string>;
	};
	iconFalse?: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	iconFalseColor?: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	iconTrue?: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	iconTrueColor?: {
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	icons?: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
	trueValue?: {
		default: boolean | string,
		required: boolean,
		type: PropType<boolean | string>;
	};
}

export interface ValueIconsProps {
	icons?: {
		default: boolean,
		required: boolean,
		type: PropType<boolean>;
	};
}

// Component Props //
export interface VInlineCheckboxProps extends SharedProps, TrueFalseIconsProps, ValueIconsProps {
	falseIcon: {
		default: string,
		required: boolean,
		type: PropType<VCheckbox['$props']['falseIcon']>;
	};
	trueIcon: {
		default: string,
		required: boolean,
		type: PropType<VCheckbox['$props']['trueIcon']>;
	};
};

export interface VInlineSelectProps extends SharedProps, AutoFocusProps, SaveAndLoadingIconProps {
	clearIcon: {
		default: string | 'mdi mdi-close-circle-outline',
		required: boolean,
		type: PropType<VSelect['$props']['clearIcon']>;
	};
	clearable: {
		default: VSelect['$props']['clearable'],
		required: boolean,
		type: PropType<VSelect['$props']['clearable']>;
	};
	hideSelected: {
		default: VSelect['$props']['hideSelected'],
		required: boolean,
		type: PropType<VSelect['$props']['hideSelected']>;
	};
	items: {
		default: () => ([]),
		required: boolean,
		type: PropType<VSelect['$props']['items']>;
	};
	itemTitle: {
		default: string | 'title',
		required: boolean,
		type: PropType<VSelect['$props']['itemTitle']>;
	};
	itemValue: {
		default: string | 'value',
		required: boolean,
		type: PropType<VSelect['$props']['itemValue']>;
	};
	variant: {
		default: VSelect['$props']['variant'],
		required: boolean,
		type: PropType<VSelect['$props']['variant']>;
	};
};

export interface VInlineSwitchProps extends SharedProps, TrueFalseIconsProps, ValueIconsProps {
	falseIcon: {
		default: VSwitch['$props']['falseIcon'],
		required: boolean,
		type: PropType<VSwitch['$props']['falseIcon']>;
	};
};

export interface VInlineTextareaProps extends SharedProps, AutoFocusProps, SaveAndLoadingIconProps {
	autoGrow?: {
		default: VTextarea['$props']['autoGrow'],
		required: boolean,
		type: PropType<VTextarea['$props']['autoGrow']>;
	};
	variant: {
		default: VTextarea['$props']['variant'],
		required: boolean,
		type: PropType<VTextarea['$props']['variant']>;
	};
};

export interface VInlineTextFieldProps extends SharedProps, AutoFocusProps, SaveAndLoadingIconProps {
	variant: {
		default: VTextField['$props']['variant'],
		required: boolean,
		type: PropType<VTextField['$props']['variant']>;
	};
};




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
