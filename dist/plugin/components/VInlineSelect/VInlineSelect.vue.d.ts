declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: globalThis.PropType<any>;
    autofocus: {
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
        type: globalThis.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
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
    color: {
        type: globalThis.PropType<string>;
        default: string;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    displayAppendIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
    error: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    fieldOnly: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideCancelIcon: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideDetails: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideSaveIcon: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    item: {
        type: globalThis.PropType<Record<string, unknown>>;
    };
    label: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loading: {
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
    name: {
        type: globalThis.PropType<string>;
        default: string;
    };
    required: {
        type: globalThis.PropType<boolean>;
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
        type: globalThis.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
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
    underlined: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    valueColor: {
        type: globalThis.PropType<string>;
        default: string;
    };
    density: {
        type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
        default: "compact";
    };
    rules: {
        type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
    };
    variant: {
        type: globalThis.PropType<"underlined" | "outlined" | "plain" | "filled" | "solo" | "solo-inverted" | "solo-filled">;
        default: "underlined";
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: globalThis.PropType<any>;
    autofocus: {
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
        type: globalThis.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
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
    color: {
        type: globalThis.PropType<string>;
        default: string;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    displayAppendIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
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
    error: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    fieldOnly: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideCancelIcon: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideDetails: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideSaveIcon: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    item: {
        type: globalThis.PropType<Record<string, unknown>>;
    };
    label: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loading: {
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
    name: {
        type: globalThis.PropType<string>;
        default: string;
    };
    required: {
        type: globalThis.PropType<boolean>;
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
        type: globalThis.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
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
    underlined: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    valueColor: {
        type: globalThis.PropType<string>;
        default: string;
    };
    density: {
        type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
        default: "compact";
    };
    rules: {
        type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
    };
    variant: {
        type: globalThis.PropType<"underlined" | "outlined" | "plain" | "filled" | "solo" | "solo-inverted" | "solo-filled">;
        default: "underlined";
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
}>>, {
    autofocus: boolean;
    cancelButtonColor: string;
    cancelButtonSize: string | number;
    cancelButtonTitle: string;
    cancelButtonVariant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    cancelIcon: string;
    cancelIconColor: string;
    cardField: boolean;
    cardOffsetX: number;
    cardOffsetY: number;
    cardProps: any;
    cell: boolean;
    cellUnderlineFullWidth: boolean;
    closeSiblings: boolean;
    color: string;
    disabled: boolean;
    displayAppendIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    displayAppendIconColor: string;
    displayAppendIconSize: string | number;
    displayAppendInnerIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    displayAppendInnerIconColor: string;
    displayAppendInnerIconSize: string | number;
    displayPrependIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    displayPrependIconColor: string;
    displayPrependIconSize: string | number;
    displayPrependInnerIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    displayPrependInnerIconColor: string;
    displayPrependInnerIconSize: string | number;
    emptyText: string;
    error: boolean;
    fieldOnly: boolean;
    hideCancelIcon: boolean;
    hideDetails: boolean;
    hideSaveIcon: boolean;
    label: string;
    loading: boolean;
    loadingIcon: string;
    loadingIconColor: string;
    loadingWait: boolean;
    name: string;
    saveButtonColor: string;
    saveButtonSize: string | number;
    saveButtonTitle: string;
    saveButtonVariant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    saveIcon: string;
    saveIconColor: string;
    tableField: boolean;
    underlineColor: string;
    underlineStyle: string;
    underlineWidth: string;
    underlined: boolean;
    valueColor: string;
    density: "default" | "comfortable" | "compact" | null;
    variant: "underlined" | "outlined" | "plain" | "filled" | "solo" | "solo-inverted" | "solo-filled";
    items: readonly any[];
    itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    clearIcon: string;
    clearable: boolean;
    hideSelected: boolean;
    menu: boolean;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
