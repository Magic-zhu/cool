declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    ExpandStatus: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    show: () => void;
    style: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        color: string;
    }>;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    ExpandStatus: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
}, {}>;
export default _default;
