import { FieldValue } from '../../types';

declare function __VLS_template(): Partial<Record<NonNullable<string | number>, (_: any) => any>>;
declare const __VLS_component: import('vue').DefineComponent<{
    modelValue: import('vue').PropType<FieldValue>;
    error: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    falseValue: {
        type: globalThis.PropType<string | boolean>;
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
    trueValue: {
        type: globalThis.PropType<string | boolean>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
    hideDetails: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideSaveIcon: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
        type: globalThis.PropType<"default" | "compact" | "comfortable" | null>;
        default: "compact";
    };
    falseIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
        default: string;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<FieldValue>;
    error: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    falseValue: {
        type: globalThis.PropType<string | boolean>;
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
    trueValue: {
        type: globalThis.PropType<string | boolean>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
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
    hideDetails: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    hideSaveIcon: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
        type: globalThis.PropType<"default" | "compact" | "comfortable" | null>;
        default: "compact";
    };
    falseIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent>;
        default: string;
    };
}>>, {
    error: boolean;
    falseValue: string | boolean;
    iconFalse: string;
    iconFalseColor: string;
    iconFalseTitle: string;
    iconTrue: string;
    iconTrueColor: string;
    iconTrueTitle: string;
    icons: boolean;
    trueValue: string | boolean;
    cancelButtonColor: string;
    cancelButtonSize: string | number;
    cancelButtonTitle: string;
    cancelButtonVariant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    cancelIcon: string;
    cancelIconColor: string;
    cardField: boolean;
    cardOffsetX: number;
    cardOffsetY: number;
    cardProps: typeof import('vuetify/lib/components/index.mjs').VCard["$props"];
    cell: boolean;
    cellUnderlineFullWidth: boolean;
    closeSiblings: boolean;
    color: string;
    disabled: boolean;
    displayAppendIcon: string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent;
    displayAppendIconColor: string;
    displayAppendIconSize: string | number;
    displayAppendInnerIcon: string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent;
    displayAppendInnerIconColor: string;
    displayAppendInnerIconSize: string | number;
    displayPrependIcon: string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent;
    displayPrependIconColor: string;
    displayPrependIconSize: string | number;
    displayPrependInnerIcon: string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent;
    displayPrependInnerIconColor: string;
    displayPrependInnerIconSize: string | number;
    emptyText: string;
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
    required: boolean;
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
    density: "default" | "compact" | "comfortable" | null;
    falseIcon: string | (string | [path: string, opacity: number])[] | import('vue').JSXComponent;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
