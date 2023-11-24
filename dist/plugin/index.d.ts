declare const _default: {
    VInlineAutocomplete: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                items: readonly any[];
                itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                clearIcon: string;
                clearable: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly hideDetails: boolean;
                readonly items: readonly any[];
                readonly itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                readonly itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                readonly loading: boolean;
                readonly autofocus: boolean;
                readonly variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                readonly clearable: boolean;
                readonly hideSelected: boolean;
                readonly menu: boolean;
                readonly underlined: boolean;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly hideSaveIcon: boolean;
                readonly loadingIconColor: string;
                readonly loadingWait: boolean;
                readonly saveButtonColor: string;
                readonly saveButtonSize: string | number;
                readonly saveButtonTitle: string;
                readonly saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly saveIconColor: string;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
                readonly loadingIcon?: string | undefined;
                readonly saveIcon?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                itemTitle: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
                };
                itemValue: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
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
                hideSelected: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                menu: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "hideDetails" | "items" | "itemTitle" | "itemValue" | "loading" | "autofocus" | "variant" | "clearIcon" | "clearable" | "hideSelected" | "menu" | "underlined" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "hideSaveIcon" | "loadingIcon" | "loadingIconColor" | "loadingWait" | "saveButtonColor" | "saveButtonSize" | "saveButtonTitle" | "saveButtonVariant" | "saveIcon" | "saveIconColor" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                itemTitle: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
                };
                itemValue: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
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
                hideSelected: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                menu: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                items: readonly any[];
                itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                clearIcon: string;
                clearable: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            itemTitle: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            itemValue: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
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
            hideSelected: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            menu: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        itemTitle: {
            type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
            default: string;
        };
        itemValue: {
            type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
            default: string;
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
        hideSelected: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        menu: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        items: readonly any[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
        loading: boolean;
        autofocus: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        clearIcon: string;
        clearable: boolean;
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
    VInlineCheckbox: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
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
                iconFalse: string;
                iconFalseColor: string;
                iconFalseTitle: string;
                iconTrue: string;
                iconTrueColor: string;
                iconTrueTitle: string;
                icons: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly trueValue: string | boolean;
                readonly falseValue: string | boolean;
                readonly hideDetails: boolean;
                readonly loading: boolean;
                readonly underlined: boolean;
                readonly iconFalseColor: string;
                readonly iconFalseTitle: string;
                readonly iconTrueColor: string;
                readonly iconTrueTitle: string;
                readonly icons: boolean;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly hideSaveIcon: boolean;
                readonly loadingIconColor: string;
                readonly loadingWait: boolean;
                readonly saveButtonColor: string;
                readonly saveButtonSize: string | number;
                readonly saveButtonTitle: string;
                readonly saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly saveIconColor: string;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly falseIcon?: string | undefined;
                readonly trueIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly iconFalse?: string | undefined;
                readonly iconTrue?: string | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
                readonly loadingIcon?: string | undefined;
                readonly saveIcon?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "falseIcon" | "trueIcon" | "trueValue" | "falseValue" | "hideDetails" | "loading" | "underlined" | "iconFalse" | "iconFalseColor" | "iconFalseTitle" | "iconTrue" | "iconTrueColor" | "iconTrueTitle" | "icons" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "hideSaveIcon" | "loadingIcon" | "loadingIconColor" | "loadingWait" | "saveButtonColor" | "saveButtonSize" | "saveButtonTitle" | "saveButtonVariant" | "saveIcon" | "saveIconColor" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
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
                iconFalse: string;
                iconFalseColor: string;
                iconFalseTitle: string;
                iconTrue: string;
                iconTrueColor: string;
                iconTrueTitle: string;
                icons: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
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
        iconFalse: string;
        iconFalseColor: string;
        iconFalseTitle: string;
        iconTrue: string;
        iconTrueColor: string;
        iconTrueTitle: string;
        icons: boolean;
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
        $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    });
    VInlineCustomField: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly hideDetails: boolean;
                readonly loading: boolean;
                readonly autofocus: boolean;
                readonly variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                readonly underlined: boolean;
                readonly truncateSuffix: string;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly hideSaveIcon: boolean;
                readonly loadingIconColor: string;
                readonly loadingWait: boolean;
                readonly saveButtonColor: string;
                readonly saveButtonSize: string | number;
                readonly saveButtonTitle: string;
                readonly saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly saveIconColor: string;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly truncateLength?: number | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
                readonly loadingIcon?: string | undefined;
                readonly saveIcon?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "hideDetails" | "loading" | "autofocus" | "variant" | "underlined" | "truncateLength" | "truncateSuffix" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "hideSaveIcon" | "loadingIcon" | "loadingIconColor" | "loadingWait" | "saveButtonColor" | "saveButtonSize" | "saveButtonTitle" | "saveButtonVariant" | "saveIcon" | "saveIconColor" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
                hideCancelIcon: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
            $props: Partial<{
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                items: readonly any[];
                itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                clearIcon: string;
                clearable: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly hideDetails: boolean;
                readonly items: readonly any[];
                readonly itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                readonly itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                readonly loading: boolean;
                readonly autofocus: boolean;
                readonly variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                readonly clearable: boolean;
                readonly hideSelected: boolean;
                readonly menu: boolean;
                readonly underlined: boolean;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly hideSaveIcon: boolean;
                readonly loadingIconColor: string;
                readonly loadingWait: boolean;
                readonly saveButtonColor: string;
                readonly saveButtonSize: string | number;
                readonly saveButtonTitle: string;
                readonly saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly saveIconColor: string;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
                readonly loadingIcon?: string | undefined;
                readonly saveIcon?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                itemTitle: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
                };
                itemValue: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
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
                hideSelected: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                menu: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "hideDetails" | "items" | "itemTitle" | "itemValue" | "loading" | "autofocus" | "variant" | "clearIcon" | "clearable" | "hideSelected" | "menu" | "underlined" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "hideSaveIcon" | "loadingIcon" | "loadingIconColor" | "loadingWait" | "saveButtonColor" | "saveButtonSize" | "saveButtonTitle" | "saveButtonVariant" | "saveIcon" | "saveIconColor" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                itemTitle: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
                };
                itemValue: {
                    type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                    default: string;
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
                hideSelected: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                menu: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
                name: string;
                color: string;
                label: string;
                disabled: boolean;
                density: "default" | "comfortable" | "compact" | null;
                hideDetails: boolean;
                items: readonly any[];
                itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
                loading: boolean;
                autofocus: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                clearIcon: string;
                clearable: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            itemTitle: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
            };
            itemValue: {
                type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
                default: string;
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
            hideSelected: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            menu: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        itemTitle: {
            type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
            default: string;
        };
        itemValue: {
            type: globalThis.PropType<string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null>;
            default: string;
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
        hideSelected: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        menu: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
        name: string;
        color: string;
        label: string;
        disabled: boolean;
        density: "default" | "comfortable" | "compact" | null;
        hideDetails: boolean;
        items: readonly any[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
        loading: boolean;
        autofocus: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        clearIcon: string;
        clearable: boolean;
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
            $props: Partial<{
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
                iconFalse: string;
                iconFalseColor: string;
                iconFalseTitle: string;
                iconTrue: string;
                iconTrueColor: string;
                iconTrueTitle: string;
                icons: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
                loadingWait: boolean;
                tableField: boolean;
                underlineColor: string;
                underlineStyle: string;
                underlineWidth: string;
                valueColor: string;
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly falseIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
                readonly trueValue: string | boolean;
                readonly falseValue: string | boolean;
                readonly hideDetails: boolean;
                readonly loading: boolean;
                readonly underlined: boolean;
                readonly iconFalseColor: string;
                readonly iconFalseTitle: string;
                readonly iconTrueColor: string;
                readonly iconTrueTitle: string;
                readonly icons: boolean;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly loadingWait: boolean;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly iconFalse?: string | undefined;
                readonly iconTrue?: string | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "falseIcon" | "trueValue" | "falseValue" | "hideDetails" | "loading" | "underlined" | "iconFalse" | "iconFalseColor" | "iconFalseTitle" | "iconTrue" | "iconTrueColor" | "iconTrueTitle" | "icons" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "loadingWait" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
                };
                required: {
                    type: globalThis.PropType<boolean>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
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
                iconFalse: string;
                iconFalseColor: string;
                iconFalseTitle: string;
                iconTrue: string;
                iconTrueColor: string;
                iconTrueTitle: string;
                icons: boolean;
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
            };
            required: {
                type: globalThis.PropType<boolean>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
        };
        required: {
            type: globalThis.PropType<boolean>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
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
        iconFalse: string;
        iconFalseColor: string;
        iconFalseTitle: string;
        iconTrue: string;
        iconTrueColor: string;
        iconTrueTitle: string;
        icons: boolean;
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
            $props: Partial<{
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly hideDetails: boolean;
                readonly loading: boolean;
                readonly autofocus: boolean;
                readonly variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                readonly underlined: boolean;
                readonly truncateSuffix: string;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly hideSaveIcon: boolean;
                readonly loadingIconColor: string;
                readonly loadingWait: boolean;
                readonly saveButtonColor: string;
                readonly saveButtonSize: string | number;
                readonly saveButtonTitle: string;
                readonly saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly saveIconColor: string;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly truncateLength?: number | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
                readonly loadingIcon?: string | undefined;
                readonly saveIcon?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "hideDetails" | "loading" | "autofocus" | "variant" | "underlined" | "truncateLength" | "truncateSuffix" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "hideSaveIcon" | "loadingIcon" | "loadingIconColor" | "loadingWait" | "saveButtonColor" | "saveButtonSize" | "saveButtonTitle" | "saveButtonVariant" | "saveIcon" | "saveIconColor" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
            $props: Partial<{
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            }> & Omit<{
                readonly name: string;
                readonly color: string;
                readonly label: string;
                readonly disabled: boolean;
                readonly density: "default" | "comfortable" | "compact" | null;
                readonly hideDetails: boolean;
                readonly loading: boolean;
                readonly autofocus: boolean;
                readonly variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                readonly underlined: boolean;
                readonly autoGrow: boolean;
                readonly rows: string | number;
                readonly truncateSuffix: string;
                readonly cancelButtonColor: string;
                readonly cancelButtonSize: string | number;
                readonly cancelButtonTitle: string;
                readonly cancelButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly cancelIconColor: string;
                readonly cardField: boolean;
                readonly cardOffsetX: number;
                readonly cardOffsetY: number;
                readonly cardProps: any;
                readonly cell: boolean;
                readonly cellUnderlineFullWidth: boolean;
                readonly closeSiblings: boolean;
                readonly displayAppendIconSize: string | number;
                readonly displayAppendInnerIconSize: string | number;
                readonly displayPrependIconSize: string | number;
                readonly displayPrependInnerIconSize: string | number;
                readonly emptyText: string;
                readonly fieldOnly: boolean;
                readonly hideCancelIcon: boolean;
                readonly hideSaveIcon: boolean;
                readonly loadingIconColor: string;
                readonly loadingWait: boolean;
                readonly saveButtonColor: string;
                readonly saveButtonSize: string | number;
                readonly saveButtonTitle: string;
                readonly saveButtonVariant: NonNullable<"flat" | "outlined" | "plain" | "text" | "elevated" | "tonal">;
                readonly saveIconColor: string;
                readonly tableField: boolean;
                readonly underlineColor: string;
                readonly underlineStyle: string;
                readonly underlineWidth: string;
                readonly valueColor: string;
                readonly modelValue?: any;
                readonly error?: boolean | undefined;
                readonly rules?: readonly ((string | boolean) | PromiseLike<string | boolean> | ((value: any) => string | boolean) | ((value: any) => PromiseLike<string | boolean>))[] | undefined;
                readonly clearIcon?: string | undefined;
                readonly item?: Record<string, unknown> | undefined;
                readonly required?: boolean | undefined;
                readonly truncateLength?: number | undefined;
                readonly cancelIcon?: string | undefined;
                readonly displayAppendIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendIconColor?: string | undefined;
                readonly displayAppendInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayAppendInnerIconColor?: string | undefined;
                readonly displayPrependIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependIconColor?: string | undefined;
                readonly displayPrependInnerIcon?: import("../types").VIconValue | undefined;
                readonly displayPrependInnerIconColor?: string | undefined;
                readonly loadingIcon?: string | undefined;
                readonly saveIcon?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, "name" | "color" | "label" | "disabled" | "density" | "hideDetails" | "loading" | "autofocus" | "variant" | "underlined" | "autoGrow" | "rows" | "truncateLength" | "truncateSuffix" | "cancelButtonColor" | "cancelButtonSize" | "cancelButtonTitle" | "cancelButtonVariant" | "cancelIcon" | "cancelIconColor" | "cardField" | "cardOffsetX" | "cardOffsetY" | "cardProps" | "cell" | "cellUnderlineFullWidth" | "closeSiblings" | "displayAppendIcon" | "displayAppendIconColor" | "displayAppendIconSize" | "displayAppendInnerIcon" | "displayAppendInnerIconColor" | "displayAppendInnerIconSize" | "displayPrependIcon" | "displayPrependIconColor" | "displayPrependIconSize" | "displayPrependInnerIcon" | "displayPrependInnerIconColor" | "displayPrependInnerIconSize" | "emptyText" | "fieldOnly" | "hideCancelIcon" | "hideSaveIcon" | "loadingIcon" | "loadingIconColor" | "loadingWait" | "saveButtonColor" | "saveButtonSize" | "saveButtonTitle" | "saveButtonVariant" | "saveIcon" | "saveIconColor" | "tableField" | "underlineColor" | "underlineStyle" | "underlineWidth" | "valueColor">;
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
                underlined: {
                    type: globalThis.PropType<boolean>;
                    default: boolean;
                };
                item: {
                    type: globalThis.PropType<Record<string, unknown>>;
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
                hideCancelIcon: {
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
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                [x: string]: (...args: any[]) => void;
            }, string, {
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
                cell: boolean;
                cellUnderlineFullWidth: boolean;
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
                hideCancelIcon: boolean;
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
            underlined: {
                type: globalThis.PropType<boolean>;
                default: boolean;
            };
            item: {
                type: globalThis.PropType<Record<string, unknown>>;
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
            hideCancelIcon: {
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
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        underlined: {
            type: globalThis.PropType<boolean>;
            default: boolean;
        };
        item: {
            type: globalThis.PropType<Record<string, unknown>>;
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
        hideCancelIcon: {
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        [x: string]: (...args: any[]) => void;
    }, string, {
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
        cell: boolean;
        cellUnderlineFullWidth: boolean;
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
        hideCancelIcon: boolean;
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
