declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    value: {
        type: (BooleanConstructor | StringConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
    };
    options: {
        type: ArrayConstructor;
    };
}, {
    styles: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        width: string | undefined;
        height: string | undefined;
    }>;
    inputValue: import('../../../vue/dist/vue.esm-bundler.js').Ref<string | boolean | undefined>;
    onChange(): void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    value: {
        type: (BooleanConstructor | StringConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
    };
    options: {
        type: ArrayConstructor;
    };
}>>, {
    disabled: boolean;
}, {}>;
export default _default;
