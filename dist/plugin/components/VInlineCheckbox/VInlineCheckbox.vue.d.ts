import { FieldValue } from '../../types';
import { VInlineCheckboxProps } from './';
declare let __VLS_typeProps: VInlineCheckboxProps;
type __VLS_PublicProps = {
    modelValue?: FieldValue;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    refs: {
        inlineFieldsContainer: HTMLDivElement;
        cardFieldRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{}>, {
    falseValue: import('vuetify/lib/components/index.mjs').VCheckbox["falseValue"];
    iconFalse: string;
    iconFalseColor: string;
    iconFalseTitle: string;
    iconTrue: string;
    iconTrueColor: string;
    iconTrueTitle: string;
    icons: boolean;
    trueValue: import('vuetify/lib/components/index.mjs').VCheckbox["trueValue"];
    cancelButtonColor: string;
    cancelButtonSize: string | number;
    cancelButtonTitle: string;
    cancelButtonVariant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
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
    displayAppendIcon: string | (string | [path: string, opacity: number])[] | ((new () => any) | import('vue').FunctionalComponent<any, {}, any, {}>);
    displayAppendIconColor: string;
    displayAppendIconSize: string | number;
    displayAppendInnerIcon: string | (string | [path: string, opacity: number])[] | ((new () => any) | import('vue').FunctionalComponent<any, {}, any, {}>);
    displayAppendInnerIconColor: string;
    displayAppendInnerIconSize: string | number;
    displayPrependIcon: string | (string | [path: string, opacity: number])[] | ((new () => any) | import('vue').FunctionalComponent<any, {}, any, {}>);
    displayPrependIconColor: string;
    displayPrependIconSize: string | number;
    displayPrependInnerIcon: string | (string | [path: string, opacity: number])[] | ((new () => any) | import('vue').FunctionalComponent<any, {}, any, {}>);
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
    required: boolean;
    saveButtonColor: string;
    saveButtonSize: string | number;
    saveButtonTitle: string;
    saveButtonVariant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    saveIcon: string;
    saveIconColor: string;
    tableField: boolean;
    underlineColor: string;
    underlineStyle: string;
    underlineWidth: string;
    underlined: boolean;
    valueColor: string;
    density: import('vuetify/lib/components/index.mjs').VCheckbox["density"];
    falseIcon: string;
    trueIcon: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
