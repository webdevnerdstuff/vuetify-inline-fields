declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    [x: string]: {
        type: globalThis.PropType<any>;
    };
    color: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayAppendIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayAppendIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayAppendInnerIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayAppendInnerIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayPrependIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayPrependIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayPrependInnerIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayPrependInnerIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayValue: {
        type: globalThis.PropType<any>;
        required: true;
    };
    empty: {
        type: globalThis.PropType<boolean | globalThis.Ref<boolean>>;
    };
    error: {
        type: globalThis.PropType<import("vue").MaybeRef<boolean>>;
    };
    field: {
        type: globalThis.PropType<string>;
        required: true;
    };
    underlineColor: {
        type: globalThis.PropType<string>;
    };
    underlineStyle: {
        type: globalThis.PropType<string>;
    };
    underlineWidth: {
        type: globalThis.PropType<string>;
    };
    underlined: {
        type: globalThis.PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggleField: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    [x: string]: {
        type: globalThis.PropType<any>;
    };
    color: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayAppendIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayAppendIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayAppendInnerIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayAppendInnerIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayPrependIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayPrependIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayPrependInnerIcon: {
        type: globalThis.PropType<import('../../types').VIconValue | undefined>;
        required: true;
    };
    displayPrependInnerIconColor: {
        type: globalThis.PropType<string | undefined>;
        required: true;
    };
    displayValue: {
        type: globalThis.PropType<any>;
        required: true;
    };
    empty: {
        type: globalThis.PropType<boolean | globalThis.Ref<boolean>>;
    };
    error: {
        type: globalThis.PropType<import("vue").MaybeRef<boolean>>;
    };
    field: {
        type: globalThis.PropType<string>;
        required: true;
    };
    underlineColor: {
        type: globalThis.PropType<string>;
    };
    underlineStyle: {
        type: globalThis.PropType<string>;
    };
    underlineWidth: {
        type: globalThis.PropType<string>;
    };
    underlined: {
        type: globalThis.PropType<boolean>;
    };
}>> & {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
