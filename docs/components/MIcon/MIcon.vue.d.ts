export declare enum IconType {
    START = "start",
    PAUSE = "pause",
    PROMPT = "prompt",
    CHECK_SQUARE_FILL = "check_square_fill",
    CHECKED = "checked"
}
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    type: {
        type: StringConstructor;
        requied: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
}, {
    styles: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        width: string;
        height: string;
    }>;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        requied: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
    width: string;
    height: string;
}, {}>;
export default _default;
