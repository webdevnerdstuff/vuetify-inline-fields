declare const _default: import("vue").DefineComponent<{
    error: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    cancelButtonColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    cancelButtonSize: {
        type: globalThis.PropType<string | number>;
        required: true;
    };
    cancelButtonTitle: {
        type: globalThis.PropType<string>;
        required: true;
    };
    cancelButtonVariant: {
        type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
        required: true;
    };
    cancelIcon: {
        type: globalThis.PropType<string>;
    };
    cancelIconColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    fieldOnly: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    hideSaveIcon: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    loadingIcon: {
        type: globalThis.PropType<string>;
    };
    loadingIconColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    saveButtonColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    saveButtonSize: {
        type: globalThis.PropType<string | number>;
        required: true;
    };
    saveButtonTitle: {
        type: globalThis.PropType<string>;
        required: true;
    };
    saveButtonVariant: {
        type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
        required: true;
    };
    saveIcon: {
        type: globalThis.PropType<string>;
    };
    saveIconColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    save: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    error: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    loading: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    cancelButtonColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    cancelButtonSize: {
        type: globalThis.PropType<string | number>;
        required: true;
    };
    cancelButtonTitle: {
        type: globalThis.PropType<string>;
        required: true;
    };
    cancelButtonVariant: {
        type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
        required: true;
    };
    cancelIcon: {
        type: globalThis.PropType<string>;
    };
    cancelIconColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    fieldOnly: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    hideSaveIcon: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    loadingIcon: {
        type: globalThis.PropType<string>;
    };
    loadingIconColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    saveButtonColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
    saveButtonSize: {
        type: globalThis.PropType<string | number>;
        required: true;
    };
    saveButtonTitle: {
        type: globalThis.PropType<string>;
        required: true;
    };
    saveButtonVariant: {
        type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
        required: true;
    };
    saveIcon: {
        type: globalThis.PropType<string>;
    };
    saveIconColor: {
        type: globalThis.PropType<string>;
        required: true;
    };
}>> & {
    onSave?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
