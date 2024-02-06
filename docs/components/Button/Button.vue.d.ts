declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    danger: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cool: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    backgroundColor: {
        type: StringConstructor;
    };
}, {
    classes: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
    }>;
    style: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        backgroundColor: string | undefined;
    }>;
    onClick(): void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "click"[], "click", import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    danger: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cool: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    backgroundColor: {
        type: StringConstructor;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    primary: boolean;
    warning: boolean;
    success: boolean;
    danger: boolean;
    cool: boolean;
}, {}>;
export default _default;
