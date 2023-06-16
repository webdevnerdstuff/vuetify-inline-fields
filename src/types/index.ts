/* eslint-disable no-unused-vars */
import type {
	CSSProperties,
	Ref,
} from 'vue';
import type {
	VBtn,
	VCheckbox,
	VSelect,
	VSwitch,
	VTextField,
	VTextarea,
} from 'vuetify/components';
import type { EventBusKey } from '@vueuse/core';
import {
	AxiosError,
} from 'axios';


// -------------------------------------------------- Types //
export type AlignItems = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export type FieldValue = string | boolean | number | object | [] | null | { [key: string]: string | unknown; };
export type TimeOpened = Date | null;

export type GlobalDensity = VCheckbox['$props']['density'] | VSelect['$props']['density'] | VSwitch['$props']['density'] | VTextField['$props']['density'] | VTextarea['$props']['density'];
export type GlobalVariant = VSelect['$props']['variant'] | VTextField['$props']['variant'] | VTextarea['$props']['variant'];



// -------------------------------------------------- Props //
export interface SharedProps {
	alignItems?: AlignItems;
	apiRoute?: string | undefined;
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
	error?: boolean;
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
	item?: Record<string, unknown>;
	label?: string;
	loadingIcon?: string;
	loadingIconColor?: string;
	method?: string;
	// TODO: Change this to optional. Throw error if using apiRoute and not providing a name. //
	name?: string;
	required?: boolean;
	saveButtonColor?: VBtn['$props']['color'];
	saveButtonSize?: VBtn['$props']['size'];
	saveButtonTitle?: string | undefined;
	saveButtonVariant?: VBtn['$props']['variant'];
	saveIcon?: string;
	saveIconColor?: string;
	tableField?: boolean;
	trueValue?: boolean | string;
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
	'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveButtonColor' | 'saveButtonSize' | 'saveIcon' | 'saveIconColor' | 'saveButtonTitle' | 'saveButtonVariant' | 'truncateLength' | 'truncateSuffix'
> {
	density?: VCheckbox['$props']['density'];
	falseIcon?: VCheckbox['$props']['falseIcon'];
	trueIcon?: VCheckbox['$props']['trueIcon'];
}

export interface VInlineSelectProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue' | 'truncateLength' | 'truncateSuffix'
> {
	clearIcon?: VSelect['$props']['clearIcon'];
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
	density?: VTextarea['$props']['density'];
	rows?: VTextarea['$props']['rows'];
	rules?: VTextarea['$props']['rules'];
	variant?: VTextarea['$props']['variant'];
}

export interface VInlineTextFieldProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
> {
	density?: VTextField['$props']['density'];
	rules?: VTextField['$props']['rules'];
	variant?: VTextField['$props']['variant'];
}


// -------------------------------------------------- Components //
export type BooleanIcons = Required<Pick<SharedProps, 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle'>>;

export interface SaveFieldButtons extends Required<Pick<SharedProps,
	'cancelButtonColor' |
	'cancelButtonSize' |
	'cancelButtonVariant' |
	'cancelButtonTitle' |
	'cancelIcon' |
	'cancelIconColor' |
	'error' |
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


// -------------------------------------------------- Composables //

// ------------------------ Main Container //
export interface UseInlineFieldsContainerClass {
	(
		options: {
			density?: GlobalDensity;
			disabled?: Ref<boolean> | boolean;
			field?: Ref<string> | string;
			tableField?: SharedProps['tableField'];
		},
	): object;
}

// ------------------------ Display Value Container //
export interface UseDisplayContainerClass {
	(
		options: {
			density?: GlobalDensity;
			field?: Ref<string> | string;
		},
	): object;
}

export interface UseDisplayInputControlClass {
	(
		options: {
			density?: GlobalDensity;
			variant?: GlobalVariant;
		},
	): object;
}

export interface UseDisplaySelectionControlClass {
	(
		options: {
			density?: GlobalDensity;
		},
	): object;
}

export interface UseDisplayValueClass {
	(
		name: string,
		valueColor: SharedProps['valueColor'],
		options: {
			empty?: Ref<boolean> | boolean;
			error?: Ref<boolean> | boolean;
		},
	): object;
}

// ------------------------ Field Container //
export interface UseFieldContainerClass {
	(
		options: {
			active?: Ref<boolean> | boolean;
			name?: Ref<string> | string;
		},
	): object;
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

export interface UseDisplayValueStyles {
	(
		options: {
			color: SharedProps['color'];
			error: Ref<boolean> | boolean;
			underlineColor: SharedProps['underlineColor'];
			underlineStyle: SharedProps['underlineStyle'];
			underlineWidth: SharedProps['underlineWidth'];
			underlined: SharedProps['underlined'];
		}
	): CSSProperties;
}

export interface UseSaveValue {
	(
		options: {
			settings: {
				[key: string]: string | unknown;
			},
			emit: {
				(e: 'loading', response: boolean): void;
				(e: 'error', error: AxiosError): AxiosError;
				(e: 'update', response: unknown): void;
			},
			name: SharedProps['name'],
			value: FieldValue,
		}
	): Promise<{ [key: string]: string | unknown; } | undefined>;
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

export interface UseTruncateText {
	(
		options: {
			length: SharedProps['truncateLength'];
			suffix: SharedProps['truncateSuffix'];
			text: string;
		}
	): FieldValue;
}


// -------------------------------------------------- Close Siblings Event Bus //
export const CloseSiblingsBus: EventBusKey<TimeOpened> = Symbol('identifier');
