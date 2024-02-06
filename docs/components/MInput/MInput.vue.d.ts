declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}, {
    inputType: string;
    styles: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        width: string | undefined;
        height: string | undefined;
    }>;
    inputValue: any;
    onInput(): void;
    onChange(): void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: string;
    disabled: boolean;
}, {}>;
export default _default;
