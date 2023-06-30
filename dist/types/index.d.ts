import type { CSSProperties, Ref } from 'vue';
import type { VBtn, VCheckbox, VSelect, VSwitch, VTextField, VTextarea } from 'vuetify/components';
import type { IconOptions } from 'vuetify';
import type { EventBusKey } from '@vueuse/core';
export type AlignItems = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export type FieldValue = string | boolean | number | object | [] | null | {
    [key: string]: string | unknown;
};
export type TimeOpened = Date | null;
export type GlobalDensity = VCheckbox['$props']['density'] | VSelect['$props']['density'] | VSwitch['$props']['density'] | VTextField['$props']['density'] | VTextarea['$props']['density'];
export type GlobalVariant = VSelect['$props']['variant'] | VTextField['$props']['variant'] | VTextarea['$props']['variant'];
export interface SharedProps {
    alignItems?: AlignItems;
    autofocus?: boolean;
    cancelButtonColor?: VBtn['$props']['color'];
    cancelButtonSize?: VBtn['$props']['size'];
    cancelButtonTitle?: string | undefined;
    cancelButtonVariant?: VBtn['$props']['variant'];
    cancelIcon?: string | undefined;
    cancelIconColor?: string;
    closeSiblings?: boolean;
    color?: string;
    disabled?: boolean;
    emptyText?: string;
    error?: boolean;
    falseValue?: boolean | string;
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
    saveButtonColor?: VBtn['$props']['color'];
    saveButtonSize?: VBtn['$props']['size'];
    saveButtonTitle?: string | undefined;
    saveButtonVariant?: VBtn['$props']['variant'];
    saveIcon?: string | undefined;
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
export interface VInlineCheckboxProps extends Omit<SharedProps, 'autofocus' | 'truncateLength' | 'truncateSuffix'> {
    density?: VCheckbox['$props']['density'];
    falseIcon?: string | undefined;
    trueIcon?: string | undefined;
}
export interface VInlineSelectProps extends Omit<SharedProps, 'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue' | 'truncateLength' | 'truncateSuffix'> {
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
export interface VInlineSwitchProps extends Omit<SharedProps, 'autofocus' | 'hideSaveIcon' | 'loadingIcon' | 'loadingIconColor' | 'saveButtonColor' | 'saveButtonSize' | 'saveIcon' | 'saveIconColor' | 'saveButtonTitle' | 'saveButtonVariant' | 'truncateLength' | 'truncateSuffix'> {
    density?: VSwitch['$props']['density'];
    falseIcon?: VSwitch['$props']['falseIcon'];
}
export interface VInlineTextareaProps extends Omit<SharedProps, 'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'> {
    autoGrow?: VTextarea['$props']['autoGrow'];
    clearIcon?: string | undefined;
    density?: VTextarea['$props']['density'];
    rows?: VTextarea['$props']['rows'];
    rules?: VTextarea['$props']['rules'];
    variant?: VTextarea['$props']['variant'];
}
export interface VInlineTextFieldProps extends Omit<SharedProps, 'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'> {
    clearIcon?: string | undefined;
    density?: VTextField['$props']['density'];
    rules?: VTextField['$props']['rules'];
    variant?: VTextField['$props']['variant'];
}
export interface BooleanIcons extends Required<Pick<SharedProps, 'iconFalseColor' | 'iconFalseTitle' | 'iconTrueColor' | 'iconTrueTitle'>>, Pick<SharedProps, 'iconFalse' | 'iconTrue'> {
}
export interface SaveFieldButtons extends Required<Pick<SharedProps, 'cancelButtonColor' | 'cancelButtonSize' | 'cancelButtonVariant' | 'cancelButtonTitle' | 'cancelIconColor' | 'error' | 'fieldOnly' | 'hideSaveIcon' | 'loadingIconColor' | 'saveButtonColor' | 'saveButtonSize' | 'saveButtonTitle' | 'saveButtonVariant' | 'saveIconColor' | 'saveButtonVariant'>>, Pick<SharedProps, 'cancelIcon' | 'loadingIcon' | 'saveIcon'> {
    loading: boolean;
}
export interface UseCancelButtonClass {
    (options: {
        cancelButtonVariant?: SharedProps['cancelButtonVariant'];
    }): object;
}
export interface UseInlineFieldsContainerClass {
    (options: {
        density?: GlobalDensity;
        disabled?: Ref<boolean> | boolean;
        field?: Ref<string> | string;
        iconSet?: string;
        loading?: Ref<boolean> | boolean;
        loadingWait?: Ref<SharedProps['loadingWait']> | SharedProps['loadingWait'];
        tableField?: SharedProps['tableField'];
    }): object;
}
export interface UseDisplayContainerClass {
    (options: {
        density?: GlobalDensity;
        field?: Ref<string> | string;
    }): object;
}
export interface UseDisplayInputControlClass {
    (options: {
        density?: GlobalDensity;
        variant?: GlobalVariant;
    }): object;
}
export interface UseDisplaySelectionControlClass {
    (options: {
        density?: GlobalDensity;
    }): object;
}
export interface UseDisplayValueClass {
    (name: string, valueColor: SharedProps['valueColor'], options: {
        empty?: Ref<boolean> | boolean;
        error?: Ref<boolean> | boolean;
    }): object;
}
export interface UseFieldContainerClass {
    (options: {
        active?: Ref<boolean> | boolean;
        name?: Ref<string> | string;
    }): object;
}
export interface UseGetIcon {
    (options: {
        icon: string | undefined;
        iconOptions: IconOptions | undefined;
        name: string;
    }): string;
}
export interface UseCheckForErrors {
    (options: {
        required?: SharedProps['required'];
        rules?: VTextField['$props']['rules'] | VTextarea['$props']['rules'] | VSelect['$props']['rules'];
        value?: FieldValue;
    }): {
        errors: boolean;
        results: string[];
    };
}
export interface UseDisplayValueStyles {
    (options: {
        color: SharedProps['color'];
        error: Ref<boolean> | boolean;
        underlineColor: SharedProps['underlineColor'];
        underlineStyle: SharedProps['underlineStyle'];
        underlineWidth: SharedProps['underlineWidth'];
        underlined: SharedProps['underlined'];
    }): CSSProperties;
}
export interface UseToggleField {
    (options: {
        attrs: object;
        closeSiblings: SharedProps['closeSiblings'];
        fieldOnly: SharedProps['fieldOnly'];
        props: object;
        showField: Ref<boolean> | boolean;
        timeOpened: TimeOpened;
    }): {
        settings: {
            [key: string]: string | unknown;
        };
        showField: boolean;
        timeOpened: TimeOpened;
    };
}
export interface UseTruncateText {
    (options: {
        length: SharedProps['truncateLength'];
        suffix: SharedProps['truncateSuffix'];
        text: string;
    }): FieldValue;
}
export declare const CloseSiblingsBus: EventBusKey<TimeOpened>;
