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
    rules: {
        type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
    };
    hideDetails: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    autofocus: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: "underlined";
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
    autoGrow: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    rows: {
        type: globalThis.PropType<string | number>;
        default: number;
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
    saveButtonColor: {
        type: globalThis.PropType<string>;
        default: string;
    };
    saveButtonSize: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    saveIcon: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    saveIconColor: {
        type: globalThis.PropType<string>;
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
    truncateLength: {
        type: globalThis.PropType<number>;
    };
    truncateSuffix: {
        type: globalThis.PropType<string>;
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
    rules: {
        type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
    };
    hideDetails: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    autofocus: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: "underlined";
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
    autoGrow: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    rows: {
        type: globalThis.PropType<string | number>;
        default: number;
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
    saveButtonColor: {
        type: globalThis.PropType<string>;
        default: string;
    };
    saveButtonSize: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    saveIcon: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    saveIconColor: {
        type: globalThis.PropType<string>;
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
    truncateLength: {
        type: globalThis.PropType<number>;
    };
    truncateSuffix: {
        type: globalThis.PropType<string>;
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
    hideDetails: boolean;
    loading: boolean;
    autofocus: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    underlined: boolean;
    autoGrow: boolean;
    rows: string | number;
    hideSaveIcon: boolean;
    loadingIcon: string;
    loadingIconColor: string;
    saveButtonColor: string;
    saveButtonSize: string | number;
    saveIcon: string;
    saveIconColor: string;
    saveButtonTitle: string;
    saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
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
