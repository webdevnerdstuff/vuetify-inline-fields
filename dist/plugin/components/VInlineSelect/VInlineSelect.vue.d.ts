import { FieldValue } from '../../types';
import { VInlineSelectProps } from './';
declare let __VLS_typeProps: VInlineSelectProps;
type __VLS_PublicProps = {
    modelValue?: FieldValue;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    refs: {
        inlineFieldsContainer: HTMLDivElement;
        cardFieldRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{}>, {
    autofocus: boolean;
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
    clearIcon: string | (string | [path: string, opacity: number])[] | ((new () => any) | import('vue').FunctionalComponent<any, {}, any, {}>);
    clearable: boolean;
    density: "default" | "comfortable" | "compact" | null;
    hideSelected: boolean;
    itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    items: readonly any[];
    menu: boolean;
    rules: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[];
    variant: "underlined" | "outlined" | "plain" | "filled" | "solo" | "solo-inverted" | "solo-filled";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
