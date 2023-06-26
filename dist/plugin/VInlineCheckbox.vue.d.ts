import { FieldValue } from '../src/types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: globalThis.PropType<FieldValue>;
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
    item: {
        type: globalThis.PropType<Record<string, unknown>>;
    };
    underlined: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    required: {
        type: globalThis.PropType<boolean>;
    };
    alignItems: {
        type: globalThis.PropType<import('../src/types').AlignItems>;
        default: "center";
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
        default: "tonal";
    };
    cancelIcon: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    cancelIconColor: {
        type: globalThis.PropType<string>;
        default: string;
    };
    closeSiblings: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    emptyText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    fieldOnly: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: globalThis.PropType<FieldValue>;
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
    item: {
        type: globalThis.PropType<Record<string, unknown>>;
    };
    underlined: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    required: {
        type: globalThis.PropType<boolean>;
    };
    alignItems: {
        type: globalThis.PropType<import('../src/types').AlignItems>;
        default: "center";
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
        default: "tonal";
    };
    cancelIcon: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    cancelIconColor: {
        type: globalThis.PropType<string>;
        default: string;
    };
    closeSiblings: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    emptyText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    fieldOnly: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
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
    alignItems: import('../src/types').AlignItems;
    cancelButtonColor: string;
    cancelButtonSize: string | number;
    cancelButtonTitle: string;
    cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
    cancelIcon: string;
    cancelIconColor: string;
    closeSiblings: boolean;
    emptyText: string;
    fieldOnly: boolean;
    iconFalse: string;
    iconFalseColor: string;
    iconFalseTitle: string;
    iconTrue: string;
    iconTrueColor: string;
    iconTrueTitle: string;
    icons: boolean;
    loadingWait: boolean;
    tableField: boolean;
    underlineColor: string;
    underlineStyle: string;
    underlineWidth: string;
    valueColor: string;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
