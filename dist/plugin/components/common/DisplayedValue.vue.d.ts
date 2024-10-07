declare function __VLS_template(): {
    slots: {
        "display.prepend"?(_: {
            displayValue: any;
            empty: boolean | globalThis.Ref<boolean, boolean> | undefined;
            error: import('vue').MaybeRef<boolean> | undefined;
        }): any;
        "display.prependInner"?(_: {
            displayValue: any;
            empty: boolean | globalThis.Ref<boolean, boolean> | undefined;
            error: import('vue').MaybeRef<boolean> | undefined;
        }): any;
        "display.appendInner"?(_: {
            displayValue: any;
            empty: boolean | globalThis.Ref<boolean, boolean> | undefined;
            error: import('vue').MaybeRef<boolean> | undefined;
        }): any;
        "display.append"?(_: {
            displayValue: any;
            empty: boolean | globalThis.Ref<boolean, boolean> | undefined;
            error: import('vue').MaybeRef<boolean> | undefined;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    toggleField: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onToggleField?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
