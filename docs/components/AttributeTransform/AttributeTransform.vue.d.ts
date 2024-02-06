declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    location: {
        type: ObjectConstructor;
    };
    rotation: {
        type: ObjectConstructor;
    };
    scale: {
        type: ObjectConstructor;
    };
    label: StringConstructor;
}, {
    ExpandStatus: import('../../../vue/dist/vue.esm-bundler.js').Ref<boolean>;
    show: () => void;
    props: import("@vue/shared").LooseRequired<{
        readonly label?: string | undefined;
        readonly location?: Record<string, any> | undefined;
        readonly rotation?: Record<string, any> | undefined;
        readonly scale?: Record<string, any> | undefined;
    } & {}>;
    out: (type: string, attr: string, v: any) => void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    location: {
        type: ObjectConstructor;
    };
    rotation: {
        type: ObjectConstructor;
    };
    scale: {
        type: ObjectConstructor;
    };
    label: StringConstructor;
}>>, {}, {}>;
export default _default;
