import { CSSProperties, MaybeRef, Ref } from 'vue';
import { VBtn, VCard, VCheckbox, VIcon, VSelect, VSwitch, VTextField, VTextarea } from 'vuetify/components';
import { VInlineAutocomplete, VInlineCheckbox, VInlineCustomField, VInlineSelect, VInlineSwitch, VInlineTextField, VInlineTextarea } from '../components/index';
import { IconOptions, ThemeInstance } from 'vuetify';
import { EventBusKey } from '@vueuse/core';
export interface KeyStringAny<T = any> {
    [key: string]: T;
}
export type FieldValue = any;
export type TimeOpened = Date | null;
export type GlobalDensity = VCheckbox['$props']['density'] | VSelect['$props']['density'] | VSwitch['$props']['density'] | VTextField['$props']['density'] | VTextarea['$props']['density'];
export type GlobalVariant = VSelect['$props']['variant'] | VTextField['$props']['variant'] | VTextarea['$props']['variant'];
export type VIconColor = VIcon['$props']['color'];
export type VIconSize = VIcon['$props']['size'];
export type VIconValue = VIcon['$props']['icon'];
export type VBtnColor = VBtn['$props']['color'];
export type VBtnSize = VBtn['$props']['size'];
export type VBtnVariant = VBtn['$props']['variant'];
export type HEXColor = string;
export type HSLColor = [number, number, number, number | string];
export type RGBColor = [number, number, number, number | string];
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
    cardProps?: (typeof VCard)['$props'];
    cell?: boolean | true | undefined;
    cellUnderlineFullWidth?: boolean;
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
    falseValue?: any;
    fieldOnly?: boolean;
    hideCancelIcon?: boolean;
    hideDetails?: boolean;
    hideSaveIcon?: boolean;
    iconFalse?: string | undefined;
    iconFalseColor?: string;
    iconFalseTitle?: string | undefined;
    iconTrue?: string | undefined;
    iconTrueColor?: string;
    iconTrueTitle?: string | undefined;
    icons?: boolean;
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
    trueValue?: any;
    truncateLength?: number | undefined;
    truncateSuffix?: string | undefined;
    underlineColor?: string;
    underlineStyle?: string;
    underlineWidth?: string;
    underlined?: boolean;
    valueColor?: string;
}
export interface UseCardContainerStyle {
    (options: {
        field: HTMLElement | null;
        cardOffsetX: SharedProps['cardOffsetX'];
        cardOffsetY: SharedProps['cardOffsetY'];
        cardMinWidth: VCard['$props']['minWidth'];
        cardWidth: VCard['$props']['width'];
        name?: string;
    }): CSSProperties;
}
export interface UseCancelButtonClass {
    (options: {
        cancelButtonVariant?: SharedProps['cancelButtonVariant'];
    }): object;
}
export interface UseInlineFieldsContainerClass {
    (options: {
        cell?: SharedProps['cell'];
        density?: GlobalDensity;
        disabled?: Ref<boolean> | boolean;
        field?: Ref<string> | string;
        iconSet?: string;
        loading?: Ref<boolean> | boolean;
        loadingWait?: Ref<SharedProps['loadingWait']> | SharedProps['loadingWait'];
        tableField?: SharedProps['tableField'];
        variant?: GlobalVariant;
    }): object;
}
export interface UseDisplayContainerClass {
    (options: {
        cell?: SharedProps['cell'];
        cellUnderlineFullWidth?: SharedProps['cellUnderlineFullWidth'];
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
export interface UseDisplayValueStyles {
    (options: {
        color: SharedProps['color'];
        error: MaybeRef<boolean> | boolean | undefined;
        theme: ThemeInstance;
        underlineColor: SharedProps['underlineColor'];
        underlineStyle: SharedProps['underlineStyle'];
        underlineWidth: SharedProps['underlineWidth'];
        underlined: SharedProps['underlined'];
    }): CSSProperties;
}
export interface UsePrependAppendIconClasses {
    (options: {
        inner?: Ref<boolean> | boolean;
        position?: Ref<string> | string;
    }): object;
}
export interface UsePrependAppendIconStyles {
    (options: {
        underlineWidth: SharedProps['underlineWidth'];
    }): CSSProperties;
}
export interface UseFieldContainerClass {
    (options: {
        active?: Ref<boolean> | boolean;
        name?: string;
    }): object;
}
export interface UseCardContainerClass {
    (options: {
        showField?: boolean;
        name?: string;
    }): any;
}
export interface UseGetIcon {
    (options: {
        icon: VIconValue;
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
export interface UseGetFieldCoordinates {
    (options: {
        cardOffsetX: SharedProps['cardOffsetX'];
        cardOffsetY: SharedProps['cardOffsetY'];
        field: HTMLElement | null;
    }): any;
}
export interface UseTruncateText {
    (options: {
        length: SharedProps['truncateLength'];
        suffix: SharedProps['truncateSuffix'];
        text: string;
    }): FieldValue;
}
export declare const CloseSiblingsBus: EventBusKey<TimeOpened>;
export interface UseConvertToUnit {
    (options: {
        str: string | number;
        unit?: string;
    }): string | void;
}
export interface UseTruthyModelValue {
    (options: {
        modelValue: any;
        trueValue?: any;
    }): boolean;
}
export * from '../index';
declare module 'vue' {
    interface GlobalComponents {
        VInlineAutocomplete: typeof VInlineAutocomplete;
        VInlineCheckbox: typeof VInlineCheckbox;
        VInlineCustomField: typeof VInlineCustomField;
        VInlineSelect: typeof VInlineSelect;
        VInlineSwitch: typeof VInlineSwitch;
        VInlineTextField: typeof VInlineTextField;
        VInlineTextarea: typeof VInlineTextarea;
    }
}
