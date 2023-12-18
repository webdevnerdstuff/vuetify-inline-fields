declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: globalThis.PropType<any>;
    autofocus: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
    clearIcon: {
        type: globalThis.PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: globalThis.PropType<any>;
    autofocus: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
    clearIcon: {
        type: globalThis.PropType<string>;
    };
}>>, {
    autofocus: boolean;
    truncateLength: number;
    truncateSuffix: string;
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
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
    default?(_: {
        loading: boolean;
        modelValue: any;
        originalValue: any;
        item: Record<string, unknown> | undefined;
        required: boolean;
        rules: readonly ((string | boolean) | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>) | {
            then: <TResult1 = string | boolean, TResult2 = never>(onfulfilled?: ((value: string | boolean) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => PromiseLike<TResult1 | TResult2>;
        })[] | undefined;
        clearIcon: string | undefined;
        truncateLength: number | undefined;
        truncateSuffix: string;
        variant: "underlined" | "outlined" | "plain" | "filled" | "solo" | "solo-inverted" | "solo-filled";
        hideCancelIcon: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string | undefined;
        loadingIconColor: string;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        saveIcon: string | undefined;
        saveIconColor: string;
        autofocus: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
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
        displayAppendIcon: (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | undefined;
        displayAppendIconColor: string | undefined;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | undefined;
        displayAppendInnerIconColor: string | undefined;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | undefined;
        displayPrependIconColor: string | undefined;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | undefined;
        displayPrependInnerIconColor: string | undefined;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        error: boolean;
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
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
