import { App } from 'vue';
import VInlineCheckbox from './VInlineCheckbox.vue';
import VInlineCustomField from './VInlineCustomField.vue';
import VInlineSelect from './VInlineSelect.vue';
import VInlineSwitch from './VInlineSwitch.vue';
import VInlineTextField from './VInlineTextField.vue';
import VInlineTextarea from './VInlineTextarea.vue';
import type { SharedProps } from './types';
export declare const globalOptions: unique symbol;
export declare function createVInlineFields(options?: SharedProps): (app: App) => void;
declare const _default: {
    VInlineCheckbox: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            iconFalse: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconFalseColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconFalseTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrue: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconTrueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrueTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            icons: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            iconFalse: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconFalseColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconFalseTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrue: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconTrueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrueTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            icons: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            falseIcon: string;
            trueIcon: string;
            trueValue: string | boolean;
            falseValue: string | boolean;
            hideDetails: boolean;
            loading: boolean;
            underlined: boolean;
            iconFalse: string;
            iconFalseColor: string;
            iconFalseTitle: string;
            iconTrue: string;
            iconTrueColor: string;
            iconTrueTitle: string;
            icons: boolean;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            iconFalse: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconFalseColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconFalseTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrue: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconTrueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrueTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            icons: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            falseIcon: string;
            trueIcon: string;
            trueValue: string | boolean;
            falseValue: string | boolean;
            hideDetails: boolean;
            loading: boolean;
            underlined: boolean;
            iconFalse: string;
            iconFalseColor: string;
            iconFalseTitle: string;
            iconTrue: string;
            iconTrueColor: string;
            iconTrueTitle: string;
            icons: boolean;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        falseIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        trueIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        trueValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        falseValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        iconFalse: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        iconFalseColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        iconFalseTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        iconTrue: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        iconTrueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        iconTrueTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        icons: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cancelButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        cancelButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        cancelIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        cancelIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cardField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cardOffsetX: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardOffsetY: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardProps: {
            type: globalThis.PropType<any>;
            default: () => {};
        };
        cell: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cellUnderlineFullWidth: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayAppendInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        emptyText: {
            type: globalThis.PropType<string>;
            default: string;
        };
        fieldOnly: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideCancelIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideSaveIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        loadingIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        saveButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        saveButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        saveIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        saveIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        tableField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlineColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineStyle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineWidth: {
            type: globalThis.PropType<string>;
            default: string;
        };
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        falseIcon: string;
        trueIcon: string;
        trueValue: string | boolean;
        falseValue: string | boolean;
        hideDetails: boolean;
        loading: boolean;
        underlined: boolean;
        iconFalse: string;
        iconFalseColor: string;
        iconFalseTitle: string;
        iconTrue: string;
        iconTrueColor: string;
        iconTrueTitle: string;
        icons: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        cell: boolean;
        cellUnderlineFullWidth: boolean;
        closeSiblings: boolean;
        displayAppendIcon: import("./types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("./types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("./types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("./types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideCancelIcon: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineCustomField: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            underlined: boolean;
            truncateLength: number;
            truncateSuffix: string;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            underlined: boolean;
            truncateLength: number;
            truncateSuffix: string;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        clearIcon: {
            type: globalThis.PropType<string>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        truncateLength: {
            type: globalThis.PropType<number>;
            default: undefined;
        };
        truncateSuffix: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        cancelButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        cancelIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        cancelIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cardField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cardOffsetX: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardOffsetY: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardProps: {
            type: globalThis.PropType<any>;
            default: () => {};
        };
        cell: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cellUnderlineFullWidth: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayAppendInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        emptyText: {
            type: globalThis.PropType<string>;
            default: string;
        };
        fieldOnly: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideCancelIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideSaveIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        loadingIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        saveButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        saveButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        saveIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        saveIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        tableField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlineColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineStyle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineWidth: {
            type: globalThis.PropType<string>;
            default: string;
        };
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        loading: boolean;
        autofocus: boolean;
        underlined: boolean;
        truncateLength: number;
        truncateSuffix: string;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        cell: boolean;
        cellUnderlineFullWidth: boolean;
        closeSiblings: boolean;
        displayAppendIcon: import("./types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("./types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("./types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("./types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideCancelIcon: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
            default?(_: {
                loading: boolean;
                modelValue: any;
                originalValue: any;
                error: boolean;
                rules: readonly ((string | boolean) | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>) | {
                    then: <TResult1 = string | boolean, TResult2 = never>(onfulfilled?: ((value: string | boolean) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => PromiseLike<TResult1 | TResult2>;
                })[] | undefined;
                clearIcon: string | undefined;
                item: Record<string, unknown> | undefined;
                required: boolean;
                truncateLength: number | undefined;
                truncateSuffix: string;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                hideCancelIcon: boolean;
                hideSaveIcon: boolean;
                loadingIcon: string | undefined;
                loadingIconColor: string;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string | undefined;
                saveIconColor: string;
                autofocus: boolean;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string | undefined;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                cell: boolean;
                cellUnderlineFullWidth: boolean;
                closeSiblings: boolean;
                color: string;
                density: "default" | "comfortable" | "compact" | null;
                disabled: boolean;
                displayAppendIcon: import("./types").VIconValue | undefined;
                displayAppendIconColor: string | undefined;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("./types").VIconValue | undefined;
                displayAppendInnerIconColor: string | undefined;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("./types").VIconValue | undefined;
                displayPrependIconColor: string | undefined;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("./types").VIconValue | undefined;
                displayPrependInnerIconColor: string | undefined;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                hideDetails: boolean;
                label: string;
                loadingWait: boolean;
                name: string;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                underlined: boolean;
                valueColor: string;
            }): any;
        };
    });
    VInlineSelect: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            items: {
                type: globalThis.PropType<readonly any[]>;
                default: () => never[];
            };
            itemTitle: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            itemValue: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            clearable: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSelected: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            menu: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            items: {
                type: globalThis.PropType<readonly any[]>;
                default: () => never[];
            };
            itemTitle: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            itemValue: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            clearable: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSelected: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            menu: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            items: readonly any[];
            itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
            itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            clearIcon: string;
            clearable: boolean;
            hideSelected: boolean;
            menu: boolean;
            underlined: boolean;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            items: {
                type: globalThis.PropType<readonly any[]>;
                default: () => never[];
            };
            itemTitle: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            itemValue: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            clearable: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSelected: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            menu: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            items: readonly any[];
            itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
            itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            clearIcon: string;
            clearable: boolean;
            hideSelected: boolean;
            menu: boolean;
            underlined: boolean;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        items: {
            type: globalThis.PropType<readonly any[]>;
            default: () => never[];
        };
        itemTitle: {
            type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
            default: string;
        };
        itemValue: {
            type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
            default: string;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        clearIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        clearable: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideSelected: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        menu: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        cancelButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        cancelButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        cancelIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        cancelIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cardField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cardOffsetX: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardOffsetY: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardProps: {
            type: globalThis.PropType<any>;
            default: () => {};
        };
        cell: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cellUnderlineFullWidth: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayAppendInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        emptyText: {
            type: globalThis.PropType<string>;
            default: string;
        };
        fieldOnly: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideCancelIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideSaveIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        loadingIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        saveButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        saveButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        saveIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        saveIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        tableField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlineColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineStyle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineWidth: {
            type: globalThis.PropType<string>;
            default: string;
        };
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        items: readonly any[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        loading: boolean;
        autofocus: boolean;
        clearIcon: string;
        clearable: boolean;
        hideSelected: boolean;
        menu: boolean;
        underlined: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        cell: boolean;
        cellUnderlineFullWidth: boolean;
        closeSiblings: boolean;
        displayAppendIcon: import("./types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("./types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("./types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("./types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideCancelIcon: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineSwitch: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
                default: string;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            iconFalse: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconFalseColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconFalseTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrue: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconTrueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrueTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            icons: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
                default: string;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            iconFalse: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconFalseColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconFalseTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrue: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconTrueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrueTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            icons: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            falseIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
            trueValue: string | boolean;
            falseValue: string | boolean;
            hideDetails: boolean;
            loading: boolean;
            underlined: boolean;
            iconFalse: string;
            iconFalseColor: string;
            iconFalseTitle: string;
            iconTrue: string;
            iconTrueColor: string;
            iconTrueTitle: string;
            icons: boolean;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            loadingWait: boolean;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
                default: string;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            iconFalse: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconFalseColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconFalseTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrue: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            iconTrueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            iconTrueTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            icons: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            falseIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
            trueValue: string | boolean;
            falseValue: string | boolean;
            hideDetails: boolean;
            loading: boolean;
            underlined: boolean;
            iconFalse: string;
            iconFalseColor: string;
            iconFalseTitle: string;
            iconTrue: string;
            iconTrueColor: string;
            iconTrueTitle: string;
            icons: boolean;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            loadingWait: boolean;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        falseIcon: {
            type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
            default: string;
        };
        trueValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        falseValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        iconFalse: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        iconFalseColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        iconFalseTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        iconTrue: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        iconTrueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        iconTrueTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        icons: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cancelButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        cancelButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        cancelIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        cancelIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cardField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cardOffsetX: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardOffsetY: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardProps: {
            type: globalThis.PropType<any>;
            default: () => {};
        };
        cell: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cellUnderlineFullWidth: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayAppendInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        emptyText: {
            type: globalThis.PropType<string>;
            default: string;
        };
        fieldOnly: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideCancelIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        tableField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlineColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineStyle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineWidth: {
            type: globalThis.PropType<string>;
            default: string;
        };
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        falseIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
        trueValue: string | boolean;
        falseValue: string | boolean;
        hideDetails: boolean;
        loading: boolean;
        underlined: boolean;
        iconFalse: string;
        iconFalseColor: string;
        iconFalseTitle: string;
        iconTrue: string;
        iconTrueColor: string;
        iconTrueTitle: string;
        icons: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        cell: boolean;
        cellUnderlineFullWidth: boolean;
        closeSiblings: boolean;
        displayAppendIcon: import("./types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("./types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("./types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("./types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideCancelIcon: boolean;
        loadingWait: boolean;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineTextField: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            underlined: boolean;
            truncateLength: number;
            truncateSuffix: string;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            underlined: boolean;
            truncateLength: number;
            truncateSuffix: string;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        clearIcon: {
            type: globalThis.PropType<string>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        truncateLength: {
            type: globalThis.PropType<number>;
            default: undefined;
        };
        truncateSuffix: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        cancelButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        cancelIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        cancelIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cardField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cardOffsetX: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardOffsetY: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardProps: {
            type: globalThis.PropType<any>;
            default: () => {};
        };
        cell: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cellUnderlineFullWidth: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayAppendInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        emptyText: {
            type: globalThis.PropType<string>;
            default: string;
        };
        fieldOnly: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideCancelIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideSaveIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        loadingIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        saveButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        saveButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        saveIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        saveIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        tableField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlineColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineStyle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineWidth: {
            type: globalThis.PropType<string>;
            default: string;
        };
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        loading: boolean;
        autofocus: boolean;
        underlined: boolean;
        truncateLength: number;
        truncateSuffix: string;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        cell: boolean;
        cellUnderlineFullWidth: boolean;
        closeSiblings: boolean;
        displayAppendIcon: import("./types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("./types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("./types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("./types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideCancelIcon: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineTextarea: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            autoGrow: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            rows: {
                type: globalThis.PropType<string | number>;
                default: number;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            autoGrow: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            rows: {
                type: globalThis.PropType<string | number>;
                default: number;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            underlined: boolean;
            autoGrow: boolean;
            rows: string | number;
            truncateLength: number;
            truncateSuffix: string;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            autoGrow: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            rows: {
                type: globalThis.PropType<string | number>;
                default: number;
            };
            truncateLength: {
                type: globalThis.PropType<number>;
                default: undefined;
            };
            truncateSuffix: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            cancelButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cancelButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            cancelIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            cancelIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            cardField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cardOffsetX: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardOffsetY: {
                type: globalThis.PropType<number>;
                default: number;
            };
            cardProps: {
                type: globalThis.PropType<any>;
                default: () => {};
            };
            cell: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            cellUnderlineFullWidth: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayAppendInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayAppendInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayAppendInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            displayPrependInnerIcon: {
                type: globalThis.PropType<import("./types").VIconValue>;
                default: undefined;
            };
            displayPrependInnerIconColor: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            displayPrependInnerIconSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            emptyText: {
                type: globalThis.PropType<string>;
                default: string;
            };
            fieldOnly: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideCancelIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loadingIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            loadingIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            saveButtonColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonSize: {
                type: globalThis.PropType<string | number>;
                default: string;
            };
            saveButtonTitle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            saveButtonVariant: {
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
                default: "text";
            };
            saveIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            saveIconColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            tableField: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlineColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineStyle: {
                type: globalThis.PropType<string>;
                default: string;
            };
            underlineWidth: {
                type: globalThis.PropType<string>;
                default: string;
            };
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>>, {}, {}, {}, {}, {
            name: string;
            color: string;
            label: string;
            disabled: boolean;
            density: "default" | "comfortable" | "compact" | null;
            hideDetails: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            loading: boolean;
            autofocus: boolean;
            underlined: boolean;
            autoGrow: boolean;
            rows: string | number;
            truncateLength: number;
            truncateSuffix: string;
            cancelButtonColor: string;
            cancelButtonSize: string | number;
            cancelButtonTitle: string;
            cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            cancelIcon: string;
            cancelIconColor: string;
            cardField: boolean;
            cardOffsetX: number;
            cardOffsetY: number;
            cardProps: any;
            cell: boolean;
            cellUnderlineFullWidth: boolean;
            closeSiblings: boolean;
            displayAppendIcon: import("./types").VIconValue;
            displayAppendIconColor: string;
            displayAppendIconSize: string | number;
            displayAppendInnerIcon: import("./types").VIconValue;
            displayAppendInnerIconColor: string;
            displayAppendInnerIconSize: string | number;
            displayPrependIcon: import("./types").VIconValue;
            displayPrependIconColor: string;
            displayPrependIconSize: string | number;
            displayPrependInnerIcon: import("./types").VIconValue;
            displayPrependInnerIconColor: string;
            displayPrependInnerIconSize: string | number;
            emptyText: string;
            fieldOnly: boolean;
            hideCancelIcon: boolean;
            hideSaveIcon: boolean;
            loadingIcon: string;
            loadingIconColor: string;
            loadingWait: boolean;
            saveButtonColor: string;
            saveButtonSize: string | number;
            saveButtonTitle: string;
            saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
            saveIcon: string;
            saveIconColor: string;
            tableField: boolean;
            underlineColor: string;
            underlineStyle: string;
            underlineWidth: string;
            valueColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        clearIcon: {
            type: globalThis.PropType<string>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        autoGrow: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        rows: {
            type: globalThis.PropType<string | number>;
            default: number;
        };
        truncateLength: {
            type: globalThis.PropType<number>;
            default: undefined;
        };
        truncateSuffix: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        cancelButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cancelButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        cancelIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        cancelIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        cardField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cardOffsetX: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardOffsetY: {
            type: globalThis.PropType<number>;
            default: number;
        };
        cardProps: {
            type: globalThis.PropType<any>;
            default: () => {};
        };
        cell: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        cellUnderlineFullWidth: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayAppendInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayAppendInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayAppendInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        displayPrependInnerIcon: {
            type: globalThis.PropType<import("./types").VIconValue>;
            default: undefined;
        };
        displayPrependInnerIconColor: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        displayPrependInnerIconSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        emptyText: {
            type: globalThis.PropType<string>;
            default: string;
        };
        fieldOnly: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideCancelIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        hideSaveIcon: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        loadingIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        saveButtonColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonSize: {
            type: globalThis.PropType<string | number>;
            default: string;
        };
        saveButtonTitle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        saveButtonVariant: {
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
            default: "text";
        };
        saveIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        saveIconColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        tableField: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlineColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineStyle: {
            type: globalThis.PropType<string>;
            default: string;
        };
        underlineWidth: {
            type: globalThis.PropType<string>;
            default: string;
        };
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        loading: boolean;
        autofocus: boolean;
        underlined: boolean;
        autoGrow: boolean;
        rows: string | number;
        truncateLength: number;
        truncateSuffix: string;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        cell: boolean;
        cellUnderlineFullWidth: boolean;
        closeSiblings: boolean;
        displayAppendIcon: import("./types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("./types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("./types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("./types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideCancelIcon: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
};
export default _default;
export { VInlineCheckbox, VInlineCustomField, VInlineSelect, VInlineSwitch, VInlineTextField, VInlineTextarea, };
