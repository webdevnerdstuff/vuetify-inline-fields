import { DisplayValueProps } from './';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<DisplayValueProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggleField: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DisplayValueProps>>> & {
    onToggleField?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    "display.prepend"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import("vue").MaybeRef<boolean> | undefined;
    }): any;
    "display.prependInner"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import("vue").MaybeRef<boolean> | undefined;
    }): any;
    "display.appendInner"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import("vue").MaybeRef<boolean> | undefined;
    }): any;
    "display.append"?(_: {
        displayValue: any;
        empty: boolean | globalThis.Ref<boolean> | undefined;
        error: import("vue").MaybeRef<boolean> | undefined;
    }): any;
}>;
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
