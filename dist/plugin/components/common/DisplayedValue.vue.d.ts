import { DisplayValueProps } from './';

declare function __VLS_template(): {
    "display.prepend"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import('vue').MaybeRef<boolean> | undefined;
    }): any;
    "display.prependInner"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import('vue').MaybeRef<boolean> | undefined;
    }): any;
    "display.appendInner"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import('vue').MaybeRef<boolean> | undefined;
    }): any;
    "display.append"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import('vue').MaybeRef<boolean> | undefined;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<DisplayValueProps>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    toggleField: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DisplayValueProps>>> & {
    onToggleField?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
