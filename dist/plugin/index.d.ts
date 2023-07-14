declare const _default: {
    VInlineCheckbox: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
                name?: string | undefined;
                color?: string | undefined;
                label?: string | undefined;
                disabled?: boolean | undefined;
                density?: ("default" | "comfortable" | "compact" | null) | undefined;
                falseIcon?: string | undefined;
                trueIcon?: string | undefined;
                trueValue?: string | boolean | undefined;
                falseValue?: string | boolean | undefined;
                hideDetails?: boolean | undefined;
                loading?: boolean | undefined;
                underlined?: boolean | undefined;
                cancelButtonColor?: string | undefined;
                cancelButtonSize?: string | number | undefined;
                cancelButtonTitle?: string | undefined;
                cancelButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                cancelIcon?: string | undefined;
                cancelIconColor?: string | undefined;
                cardField?: boolean | undefined;
                cardOffsetX?: number | undefined;
                cardOffsetY?: number | undefined;
                cardProps?: any;
                closeSiblings?: boolean | undefined;
                displayAppendIcon?: import("../types").VIconValue | undefined;
                displayAppendIconColor?: string | undefined;
                displayAppendIconSize?: string | number | undefined;
                displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor?: string | undefined;
                displayAppendInnerIconSize?: string | number | undefined;
                displayPrependIcon?: import("../types").VIconValue | undefined;
                displayPrependIconColor?: string | undefined;
                displayPrependIconSize?: string | number | undefined;
                displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor?: string | undefined;
                displayPrependInnerIconSize?: string | number | undefined;
                emptyText?: string | undefined;
                fieldOnly?: boolean | undefined;
                hideSaveIcon?: boolean | undefined;
                iconFalse?: string | undefined;
                iconFalseColor?: string | undefined;
                iconFalseTitle?: string | undefined;
                iconTrue?: string | undefined;
                iconTrueColor?: string | undefined;
                iconTrueTitle?: string | undefined;
                icons?: boolean | undefined;
                loadingIcon?: string | undefined;
                loadingIconColor?: string | undefined;
                loadingWait?: boolean | undefined;
                saveButtonColor?: string | undefined;
                saveButtonSize?: string | number | undefined;
                saveButtonTitle?: string | undefined;
                saveButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                saveIcon?: string | undefined;
                saveIconColor?: string | undefined;
                tableField?: boolean | undefined;
                underlineColor?: string | undefined;
                underlineStyle?: string | undefined;
                underlineWidth?: string | undefined;
                valueColor?: string | undefined;
                readonly error?: boolean | undefined;
                style?: unknown;
                class?: unknown;
                readonly modelValue?: any;
                readonly item?: Record<string, unknown> | undefined;
                key?: string | number | symbol | undefined;
                ref?: import("vue").VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                readonly required?: boolean | undefined;
            };
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: globalThis.ComponentPublicInstance | null;
            $parent: globalThis.ComponentPublicInstance | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: globalThis.PropType<any>;
                error: {
                    type: globalThis.PropType<boolean>;
                };
                name: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                color: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                label: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                disabled: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                density: {
                    type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                    default: "compact";
                };
                falseIcon: {
                    type: globalThis.PropType<string>;
                    default: undefined;
                };
                trueIcon: {
                    type: globalThis.PropType<string>;
                    default: undefined;
                };
                trueValue: {
                    type: globalThis.PropType<string | boolean>;
                    default: boolean;
                };
                falseValue: {
                    type: globalThis.PropType<string | boolean>;
                    default: boolean;
                };
                hideDetails: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                closeSiblings: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                displayAppendIcon: {
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                hideSaveIcon: {
                    type: globalThis.PropType<boolean>;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                valueColor: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
            }>> & {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                falseIcon: string;
                trueIcon: string;
                trueValue: string | boolean;
                falseValue: string | boolean;
                hideDetails: boolean;
                loading: boolean;
                underlined: boolean;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                displayAppendIcon: import("../types").VIconValue;
                displayAppendIconColor: string;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue;
                displayAppendInnerIconColor: string;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue;
                displayPrependIconColor: string;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue;
                displayPrependInnerIconColor: string;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                hideSaveIcon: boolean;
                iconFalse: string;
                iconFalseColor: string;
                iconFalseTitle: string;
                iconTrue: string;
                iconTrueColor: string;
                iconTrueTitle: string;
                icons: boolean;
                loadingIcon: string;
                loadingIconColor: string;
                loadingWait: boolean;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string;
                saveIconColor: string;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
            hideSaveIcon: {
                type: globalThis.PropType<boolean>;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        falseIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        trueIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        trueValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        falseValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
        hideSaveIcon: {
            type: globalThis.PropType<boolean>;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        falseIcon: string;
        trueIcon: string;
        trueValue: string | boolean;
        falseValue: string | boolean;
        hideDetails: boolean;
        loading: boolean;
        underlined: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        closeSiblings: boolean;
        displayAppendIcon: import("../types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("../types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("../types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("../types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideSaveIcon: boolean;
        iconFalse: string;
        iconFalseColor: string;
        iconFalseTitle: string;
        iconTrue: string;
        iconTrueColor: string;
        iconTrueTitle: string;
        icons: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineCustomField: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
                name?: string | undefined;
                color?: string | undefined;
                label?: string | undefined;
                disabled?: boolean | undefined;
                density?: ("default" | "comfortable" | "compact" | null) | undefined;
                hideDetails?: boolean | undefined;
                loading?: boolean | undefined;
                autofocus?: boolean | undefined;
                variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
                underlined?: boolean | undefined;
                truncateLength?: number | undefined;
                truncateSuffix?: string | undefined;
                cancelButtonColor?: string | undefined;
                cancelButtonSize?: string | number | undefined;
                cancelButtonTitle?: string | undefined;
                cancelButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                cancelIcon?: string | undefined;
                cancelIconColor?: string | undefined;
                cardField?: boolean | undefined;
                cardOffsetX?: number | undefined;
                cardOffsetY?: number | undefined;
                cardProps?: any;
                closeSiblings?: boolean | undefined;
                displayAppendIcon?: import("../types").VIconValue | undefined;
                displayAppendIconColor?: string | undefined;
                displayAppendIconSize?: string | number | undefined;
                displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor?: string | undefined;
                displayAppendInnerIconSize?: string | number | undefined;
                displayPrependIcon?: import("../types").VIconValue | undefined;
                displayPrependIconColor?: string | undefined;
                displayPrependIconSize?: string | number | undefined;
                displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor?: string | undefined;
                displayPrependInnerIconSize?: string | number | undefined;
                emptyText?: string | undefined;
                fieldOnly?: boolean | undefined;
                hideSaveIcon?: boolean | undefined;
                loadingIcon?: string | undefined;
                loadingIconColor?: string | undefined;
                loadingWait?: boolean | undefined;
                saveButtonColor?: string | undefined;
                saveButtonSize?: string | number | undefined;
                saveButtonTitle?: string | undefined;
                saveButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                saveIcon?: string | undefined;
                saveIconColor?: string | undefined;
                tableField?: boolean | undefined;
                underlineColor?: string | undefined;
                underlineStyle?: string | undefined;
                underlineWidth?: string | undefined;
                valueColor?: string | undefined;
                readonly error?: boolean | undefined;
                style?: unknown;
                class?: unknown;
                readonly modelValue?: any;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                key?: string | number | symbol | undefined;
                ref?: import("vue").VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                readonly required?: boolean | undefined;
            };
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: globalThis.ComponentPublicInstance | null;
            $parent: globalThis.ComponentPublicInstance | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: globalThis.PropType<any>;
                error: {
                    type: globalThis.PropType<boolean>;
                };
                name: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                color: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                label: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                disabled: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                density: {
                    type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                    default: "compact";
                };
                rules: {
                    type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
                };
                hideDetails: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                autofocus: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                variant: {
                    type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                    default: "underlined";
                };
                clearIcon: {
                    type: globalThis.PropType<string>;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                closeSiblings: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                displayAppendIcon: {
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                hideSaveIcon: {
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                valueColor: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
            }>> & {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                underlined: boolean;
                truncateLength: number;
                truncateSuffix: string;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                displayAppendIcon: import("../types").VIconValue;
                displayAppendIconColor: string;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue;
                displayAppendInnerIconColor: string;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue;
                displayPrependIconColor: string;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue;
                displayPrependInnerIconColor: string;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                hideSaveIcon: boolean;
                loadingIcon: string;
                loadingIconColor: string;
                loadingWait: boolean;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string;
                saveIconColor: string;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
            hideSaveIcon: {
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        clearIcon: {
            type: globalThis.PropType<string>;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
        hideSaveIcon: {
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        loading: boolean;
        autofocus: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        underlined: boolean;
        truncateLength: number;
        truncateSuffix: string;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        closeSiblings: boolean;
        displayAppendIcon: import("../types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("../types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("../types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("../types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
            default?(_: {
                loading: boolean;
                modelValue: any;
                originalValue: any;
                error: boolean;
                rules?: readonly ((string | boolean) | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>) | {
                    then: <TResult1 = string | boolean, TResult2 = never>(onfulfilled?: ((value: string | boolean) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => PromiseLike<TResult1 | TResult2>;
                })[] | undefined;
                clearIcon?: string | undefined;
                item?: Record<string, unknown> | undefined;
                required: boolean;
                truncateLength: number | undefined;
                truncateSuffix: string;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                hideSaveIcon: boolean;
                loadingIcon: string | undefined;
                loadingIconColor: string;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string | undefined;
                saveIconColor: string;
                autofocus: boolean;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string | undefined;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                color: string;
                density: "default" | "comfortable" | "compact" | null;
                disabled: boolean;
                displayAppendIcon: import("../types").VIconValue | undefined;
                displayAppendIconColor: string | undefined;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor: string | undefined;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue | undefined;
                displayPrependIconColor: string | undefined;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor: string | undefined;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
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
        };
    });
    VInlineSelect: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
                name?: string | undefined;
                color?: string | undefined;
                label?: string | undefined;
                disabled?: boolean | undefined;
                density?: ("default" | "comfortable" | "compact" | null) | undefined;
                hideDetails?: boolean | undefined;
                items?: readonly any[] | undefined;
                loading?: boolean | undefined;
                autofocus?: boolean | undefined;
                variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
                clearIcon?: string | undefined;
                clearable?: boolean | undefined;
                itemTitle?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
                itemValue?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
                hideSelected?: boolean | undefined;
                menu?: boolean | undefined;
                underlined?: boolean | undefined;
                cancelButtonColor?: string | undefined;
                cancelButtonSize?: string | number | undefined;
                cancelButtonTitle?: string | undefined;
                cancelButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                cancelIcon?: string | undefined;
                cancelIconColor?: string | undefined;
                cardField?: boolean | undefined;
                cardOffsetX?: number | undefined;
                cardOffsetY?: number | undefined;
                cardProps?: any;
                closeSiblings?: boolean | undefined;
                displayAppendIcon?: import("../types").VIconValue | undefined;
                displayAppendIconColor?: string | undefined;
                displayAppendIconSize?: string | number | undefined;
                displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor?: string | undefined;
                displayAppendInnerIconSize?: string | number | undefined;
                displayPrependIcon?: import("../types").VIconValue | undefined;
                displayPrependIconColor?: string | undefined;
                displayPrependIconSize?: string | number | undefined;
                displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor?: string | undefined;
                displayPrependInnerIconSize?: string | number | undefined;
                emptyText?: string | undefined;
                fieldOnly?: boolean | undefined;
                hideSaveIcon?: boolean | undefined;
                loadingIcon?: string | undefined;
                loadingIconColor?: string | undefined;
                loadingWait?: boolean | undefined;
                saveButtonColor?: string | undefined;
                saveButtonSize?: string | number | undefined;
                saveButtonTitle?: string | undefined;
                saveButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                saveIcon?: string | undefined;
                saveIconColor?: string | undefined;
                tableField?: boolean | undefined;
                underlineColor?: string | undefined;
                underlineStyle?: string | undefined;
                underlineWidth?: string | undefined;
                valueColor?: string | undefined;
                readonly error?: boolean | undefined;
                style?: unknown;
                class?: unknown;
                readonly modelValue?: any;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly item?: Record<string, unknown> | undefined;
                key?: string | number | symbol | undefined;
                ref?: import("vue").VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                readonly required?: boolean | undefined;
            };
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: globalThis.ComponentPublicInstance | null;
            $parent: globalThis.ComponentPublicInstance | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: globalThis.PropType<any>;
                error: {
                    type: globalThis.PropType<boolean>;
                };
                name: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                color: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                label: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                disabled: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                density: {
                    type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                    default: "compact";
                };
                rules: {
                    type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
                };
                hideDetails: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                items: {
                    type: globalThis.PropType<readonly any[]>;
                    default: () => never[];
                };
                loading: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                autofocus: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                variant: {
                    type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                    default: "underlined";
                };
                clearIcon: {
                    type: globalThis.PropType<string>;
                    default: undefined;
                };
                clearable: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                itemTitle: {
                    type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
                    default: string;
                };
                itemValue: {
                    type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
                    default: string;
                };
                hideSelected: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                menu: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                closeSiblings: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                displayAppendIcon: {
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                hideSaveIcon: {
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                valueColor: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
            }>> & {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                items: readonly any[];
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                clearIcon: string;
                clearable: boolean;
                itemTitle: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
                itemValue: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
                hideSelected: boolean;
                menu: boolean;
                underlined: boolean;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                displayAppendIcon: import("../types").VIconValue;
                displayAppendIconColor: string;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue;
                displayAppendInnerIconColor: string;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue;
                displayPrependIconColor: string;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue;
                displayPrependInnerIconColor: string;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                hideSaveIcon: boolean;
                loadingIcon: string;
                loadingIconColor: string;
                loadingWait: boolean;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string;
                saveIconColor: string;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            items: {
                type: globalThis.PropType<readonly any[]>;
                default: () => never[];
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            clearIcon: {
                type: globalThis.PropType<string>;
                default: undefined;
            };
            clearable: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            itemTitle: {
                type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
                default: string;
            };
            itemValue: {
                type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
                default: string;
            };
            hideSelected: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            menu: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
            hideSaveIcon: {
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        items: {
            type: globalThis.PropType<readonly any[]>;
            default: () => never[];
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        clearIcon: {
            type: globalThis.PropType<string>;
            default: undefined;
        };
        clearable: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        itemTitle: {
            type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
            default: string;
        };
        itemValue: {
            type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
            default: string;
        };
        hideSelected: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        menu: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
        hideSaveIcon: {
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        items: readonly any[];
        loading: boolean;
        autofocus: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        clearIcon: string;
        clearable: boolean;
        itemTitle: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
        itemValue: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
        hideSelected: boolean;
        menu: boolean;
        underlined: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        closeSiblings: boolean;
        displayAppendIcon: import("../types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("../types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("../types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("../types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineSwitch: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
                name?: string | undefined;
                color?: string | undefined;
                label?: string | undefined;
                disabled?: boolean | undefined;
                density?: ("default" | "comfortable" | "compact" | null) | undefined;
                falseIcon?: (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | undefined;
                trueValue?: string | boolean | undefined;
                falseValue?: string | boolean | undefined;
                hideDetails?: boolean | undefined;
                loading?: boolean | undefined;
                underlined?: boolean | undefined;
                cancelButtonColor?: string | undefined;
                cancelButtonSize?: string | number | undefined;
                cancelButtonTitle?: string | undefined;
                cancelButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                cancelIcon?: string | undefined;
                cancelIconColor?: string | undefined;
                cardField?: boolean | undefined;
                cardOffsetX?: number | undefined;
                cardOffsetY?: number | undefined;
                cardProps?: any;
                closeSiblings?: boolean | undefined;
                displayAppendIcon?: import("../types").VIconValue | undefined;
                displayAppendIconColor?: string | undefined;
                displayAppendIconSize?: string | number | undefined;
                displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor?: string | undefined;
                displayAppendInnerIconSize?: string | number | undefined;
                displayPrependIcon?: import("../types").VIconValue | undefined;
                displayPrependIconColor?: string | undefined;
                displayPrependIconSize?: string | number | undefined;
                displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor?: string | undefined;
                displayPrependInnerIconSize?: string | number | undefined;
                emptyText?: string | undefined;
                fieldOnly?: boolean | undefined;
                iconFalse?: string | undefined;
                iconFalseColor?: string | undefined;
                iconFalseTitle?: string | undefined;
                iconTrue?: string | undefined;
                iconTrueColor?: string | undefined;
                iconTrueTitle?: string | undefined;
                icons?: boolean | undefined;
                loadingWait?: boolean | undefined;
                tableField?: boolean | undefined;
                underlineColor?: string | undefined;
                underlineStyle?: string | undefined;
                underlineWidth?: string | undefined;
                valueColor?: string | undefined;
                readonly error?: boolean | undefined;
                style?: unknown;
                class?: unknown;
                readonly modelValue?: any;
                readonly item?: Record<string, unknown> | undefined;
                key?: string | number | symbol | undefined;
                ref?: import("vue").VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                readonly required?: boolean | undefined;
            };
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: globalThis.ComponentPublicInstance | null;
            $parent: globalThis.ComponentPublicInstance | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: globalThis.PropType<any>;
                error: {
                    type: globalThis.PropType<boolean>;
                };
                name: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                color: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                label: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                disabled: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                density: {
                    type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                    default: "compact";
                };
                falseIcon: {
                    type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
                    default: string;
                };
                trueValue: {
                    type: globalThis.PropType<string | boolean>;
                    default: boolean;
                };
                falseValue: {
                    type: globalThis.PropType<string | boolean>;
                    default: boolean;
                };
                hideDetails: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                closeSiblings: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                displayAppendIcon: {
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                loadingWait: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
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
                valueColor: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
            }>> & {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                falseIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
                trueValue: string | boolean;
                falseValue: string | boolean;
                hideDetails: boolean;
                loading: boolean;
                underlined: boolean;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                displayAppendIcon: import("../types").VIconValue;
                displayAppendIconColor: string;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue;
                displayAppendInnerIconColor: string;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue;
                displayPrependIconColor: string;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue;
                displayPrependInnerIconColor: string;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                iconFalse: string;
                iconFalseColor: string;
                iconFalseTitle: string;
                iconTrue: string;
                iconTrueColor: string;
                iconTrueTitle: string;
                icons: boolean;
                loadingWait: boolean;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            falseIcon: {
                type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
                default: string;
            };
            trueValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            falseValue: {
                type: globalThis.PropType<string | boolean>;
                default: boolean;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
            loadingWait: {
                type: globalThis.PropType<boolean>;
                default: boolean;
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
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        falseIcon: {
            type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
            default: string;
        };
        trueValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        falseValue: {
            type: globalThis.PropType<string | boolean>;
            default: boolean;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
        loadingWait: {
            type: globalThis.PropType<boolean>;
            default: boolean;
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
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        falseIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
        trueValue: string | boolean;
        falseValue: string | boolean;
        hideDetails: boolean;
        loading: boolean;
        underlined: boolean;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        closeSiblings: boolean;
        displayAppendIcon: import("../types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("../types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("../types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("../types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        iconFalse: string;
        iconFalseColor: string;
        iconFalseTitle: string;
        iconTrue: string;
        iconTrueColor: string;
        iconTrueTitle: string;
        icons: boolean;
        loadingWait: boolean;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineTextField: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
                name?: string | undefined;
                color?: string | undefined;
                label?: string | undefined;
                disabled?: boolean | undefined;
                density?: ("default" | "comfortable" | "compact" | null) | undefined;
                hideDetails?: boolean | undefined;
                loading?: boolean | undefined;
                autofocus?: boolean | undefined;
                variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
                underlined?: boolean | undefined;
                truncateLength?: number | undefined;
                truncateSuffix?: string | undefined;
                cancelButtonColor?: string | undefined;
                cancelButtonSize?: string | number | undefined;
                cancelButtonTitle?: string | undefined;
                cancelButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                cancelIcon?: string | undefined;
                cancelIconColor?: string | undefined;
                cardField?: boolean | undefined;
                cardOffsetX?: number | undefined;
                cardOffsetY?: number | undefined;
                cardProps?: any;
                closeSiblings?: boolean | undefined;
                displayAppendIcon?: import("../types").VIconValue | undefined;
                displayAppendIconColor?: string | undefined;
                displayAppendIconSize?: string | number | undefined;
                displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor?: string | undefined;
                displayAppendInnerIconSize?: string | number | undefined;
                displayPrependIcon?: import("../types").VIconValue | undefined;
                displayPrependIconColor?: string | undefined;
                displayPrependIconSize?: string | number | undefined;
                displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor?: string | undefined;
                displayPrependInnerIconSize?: string | number | undefined;
                emptyText?: string | undefined;
                fieldOnly?: boolean | undefined;
                hideSaveIcon?: boolean | undefined;
                loadingIcon?: string | undefined;
                loadingIconColor?: string | undefined;
                loadingWait?: boolean | undefined;
                saveButtonColor?: string | undefined;
                saveButtonSize?: string | number | undefined;
                saveButtonTitle?: string | undefined;
                saveButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                saveIcon?: string | undefined;
                saveIconColor?: string | undefined;
                tableField?: boolean | undefined;
                underlineColor?: string | undefined;
                underlineStyle?: string | undefined;
                underlineWidth?: string | undefined;
                valueColor?: string | undefined;
                readonly error?: boolean | undefined;
                style?: unknown;
                class?: unknown;
                readonly modelValue?: any;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                key?: string | number | symbol | undefined;
                ref?: import("vue").VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                readonly required?: boolean | undefined;
            };
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: globalThis.ComponentPublicInstance | null;
            $parent: globalThis.ComponentPublicInstance | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: globalThis.PropType<any>;
                error: {
                    type: globalThis.PropType<boolean>;
                };
                name: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                color: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                label: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                disabled: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                density: {
                    type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                    default: "compact";
                };
                rules: {
                    type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
                };
                hideDetails: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                autofocus: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                variant: {
                    type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                    default: "underlined";
                };
                clearIcon: {
                    type: globalThis.PropType<string>;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                closeSiblings: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                displayAppendIcon: {
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                hideSaveIcon: {
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                valueColor: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
            }>> & {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                underlined: boolean;
                truncateLength: number;
                truncateSuffix: string;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                displayAppendIcon: import("../types").VIconValue;
                displayAppendIconColor: string;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue;
                displayAppendInnerIconColor: string;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue;
                displayPrependIconColor: string;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue;
                displayPrependInnerIconColor: string;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                hideSaveIcon: boolean;
                loadingIcon: string;
                loadingIconColor: string;
                loadingWait: boolean;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string;
                saveIconColor: string;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
            hideSaveIcon: {
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        clearIcon: {
            type: globalThis.PropType<string>;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
        hideSaveIcon: {
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        loading: boolean;
        autofocus: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        underlined: boolean;
        truncateLength: number;
        truncateSuffix: string;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        closeSiblings: boolean;
        displayAppendIcon: import("../types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("../types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("../types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("../types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineTextarea: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
                name?: string | undefined;
                color?: string | undefined;
                label?: string | undefined;
                disabled?: boolean | undefined;
                density?: ("default" | "comfortable" | "compact" | null) | undefined;
                hideDetails?: boolean | undefined;
                loading?: boolean | undefined;
                autofocus?: boolean | undefined;
                variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
                underlined?: boolean | undefined;
                autoGrow?: boolean | undefined;
                rows?: string | number | undefined;
                truncateLength?: number | undefined;
                truncateSuffix?: string | undefined;
                cancelButtonColor?: string | undefined;
                cancelButtonSize?: string | number | undefined;
                cancelButtonTitle?: string | undefined;
                cancelButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                cancelIcon?: string | undefined;
                cancelIconColor?: string | undefined;
                cardField?: boolean | undefined;
                cardOffsetX?: number | undefined;
                cardOffsetY?: number | undefined;
                cardProps?: any;
                closeSiblings?: boolean | undefined;
                displayAppendIcon?: import("../types").VIconValue | undefined;
                displayAppendIconColor?: string | undefined;
                displayAppendIconSize?: string | number | undefined;
                displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                displayAppendInnerIconColor?: string | undefined;
                displayAppendInnerIconSize?: string | number | undefined;
                displayPrependIcon?: import("../types").VIconValue | undefined;
                displayPrependIconColor?: string | undefined;
                displayPrependIconSize?: string | number | undefined;
                displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                displayPrependInnerIconColor?: string | undefined;
                displayPrependInnerIconSize?: string | number | undefined;
                emptyText?: string | undefined;
                fieldOnly?: boolean | undefined;
                hideSaveIcon?: boolean | undefined;
                loadingIcon?: string | undefined;
                loadingIconColor?: string | undefined;
                loadingWait?: boolean | undefined;
                saveButtonColor?: string | undefined;
                saveButtonSize?: string | number | undefined;
                saveButtonTitle?: string | undefined;
                saveButtonVariant?: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal"> | undefined;
                saveIcon?: string | undefined;
                saveIconColor?: string | undefined;
                tableField?: boolean | undefined;
                underlineColor?: string | undefined;
                underlineStyle?: string | undefined;
                underlineWidth?: string | undefined;
                valueColor?: string | undefined;
                readonly error?: boolean | undefined;
                style?: unknown;
                class?: unknown;
                readonly modelValue?: any;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                key?: string | number | symbol | undefined;
                ref?: import("vue").VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                readonly required?: boolean | undefined;
            };
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: globalThis.ComponentPublicInstance | null;
            $parent: globalThis.ComponentPublicInstance | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                modelValue: globalThis.PropType<any>;
                error: {
                    type: globalThis.PropType<boolean>;
                };
                name: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                color: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                label: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
                disabled: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                density: {
                    type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                    default: "compact";
                };
                rules: {
                    type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
                };
                hideDetails: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                autofocus: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                variant: {
                    type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                    default: "underlined";
                };
                clearIcon: {
                    type: globalThis.PropType<string>;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                required: {
                    type: globalThis.PropType<boolean>;
                };
                autoGrow: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                rows: {
                    type: globalThis.PropType<string | number>;
                    default: number;
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                closeSiblings: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                displayAppendIcon: {
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                    type: globalThis.PropType<import("../types").VIconValue>;
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
                hideSaveIcon: {
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
                    type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
                valueColor: {
                    type: globalThis.PropType<string>;
                    default: string;
                };
            }>> & {
                [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                underlined: boolean;
                autoGrow: boolean;
                rows: string | number;
                truncateLength: number;
                truncateSuffix: string;
                cancelButtonColor: string;
                cancelButtonSize: string | number;
                cancelButtonTitle: string;
                cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                cancelIcon: string;
                cancelIconColor: string;
                cardField: boolean;
                cardOffsetX: number;
                cardOffsetY: number;
                cardProps: any;
                closeSiblings: boolean;
                displayAppendIcon: import("../types").VIconValue;
                displayAppendIconColor: string;
                displayAppendIconSize: string | number;
                displayAppendInnerIcon: import("../types").VIconValue;
                displayAppendInnerIconColor: string;
                displayAppendInnerIconSize: string | number;
                displayPrependIcon: import("../types").VIconValue;
                displayPrependIconColor: string;
                displayPrependIconSize: string | number;
                displayPrependInnerIcon: import("../types").VIconValue;
                displayPrependInnerIconColor: string;
                displayPrependInnerIconSize: string | number;
                emptyText: string;
                fieldOnly: boolean;
                hideSaveIcon: boolean;
                loadingIcon: string;
                loadingIconColor: string;
                loadingWait: boolean;
                saveButtonColor: string;
                saveButtonSize: string | number;
                saveButtonTitle: string;
                saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                saveIcon: string;
                saveIconColor: string;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: globalThis.ComponentPublicInstance | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            modelValue: globalThis.PropType<any>;
            error: {
                type: globalThis.PropType<boolean>;
            };
            name: {
                type: globalThis.PropType<string>;
                default: string;
            };
            color: {
                type: globalThis.PropType<string>;
                default: string;
            };
            label: {
                type: globalThis.PropType<string>;
                default: string;
            };
            disabled: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            density: {
                type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
                default: "compact";
            };
            rules: {
                type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
            };
            hideDetails: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            autofocus: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            variant: {
                type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
                default: "underlined";
            };
            clearIcon: {
                type: globalThis.PropType<string>;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            required: {
                type: globalThis.PropType<boolean>;
            };
            autoGrow: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            rows: {
                type: globalThis.PropType<string | number>;
                default: number;
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            closeSiblings: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            displayAppendIcon: {
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
                type: globalThis.PropType<import("../types").VIconValue>;
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
            hideSaveIcon: {
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
                type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
            valueColor: {
                type: globalThis.PropType<string>;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: globalThis.PropType<any>;
        error: {
            type: globalThis.PropType<boolean>;
        };
        name: {
            type: globalThis.PropType<string>;
            default: string;
        };
        color: {
            type: globalThis.PropType<string>;
            default: string;
        };
        label: {
            type: globalThis.PropType<string>;
            default: string;
        };
        disabled: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        density: {
            type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
            default: "compact";
        };
        rules: {
            type: globalThis.PropType<readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[]>;
        };
        hideDetails: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        variant: {
            type: globalThis.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            default: "underlined";
        };
        clearIcon: {
            type: globalThis.PropType<string>;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        required: {
            type: globalThis.PropType<boolean>;
        };
        autoGrow: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        rows: {
            type: globalThis.PropType<string | number>;
            default: number;
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        closeSiblings: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        displayAppendIcon: {
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
            type: globalThis.PropType<import("../types").VIconValue>;
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
        hideSaveIcon: {
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
            type: globalThis.PropType<NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">>;
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
        valueColor: {
            type: globalThis.PropType<string>;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        loading: boolean;
        autofocus: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        underlined: boolean;
        autoGrow: boolean;
        rows: string | number;
        truncateLength: number;
        truncateSuffix: string;
        cancelButtonColor: string;
        cancelButtonSize: string | number;
        cancelButtonTitle: string;
        cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        cancelIcon: string;
        cancelIconColor: string;
        cardField: boolean;
        cardOffsetX: number;
        cardOffsetY: number;
        cardProps: any;
        closeSiblings: boolean;
        displayAppendIcon: import("../types").VIconValue;
        displayAppendIconColor: string;
        displayAppendIconSize: string | number;
        displayAppendInnerIcon: import("../types").VIconValue;
        displayAppendInnerIconColor: string;
        displayAppendInnerIconSize: string | number;
        displayPrependIcon: import("../types").VIconValue;
        displayPrependIconColor: string;
        displayPrependIconSize: string | number;
        displayPrependInnerIcon: import("../types").VIconValue;
        displayPrependInnerIconColor: string;
        displayPrependInnerIconSize: string | number;
        emptyText: string;
        fieldOnly: boolean;
        hideSaveIcon: boolean;
        loadingIcon: string;
        loadingIconColor: string;
        loadingWait: boolean;
        saveButtonColor: string;
        saveButtonSize: string | number;
        saveButtonTitle: string;
        saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
        saveIcon: string;
        saveIconColor: string;
        tableField: boolean;
        underlineColor: string;
        underlineStyle: string;
        underlineWidth: string;
        valueColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
};
export default _default;
