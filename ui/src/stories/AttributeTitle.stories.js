import AttributeTitle from '../components/AttributeTitle/AttributeTitle.vue';

export default {
    title: 'CoolBlack/AttributeTitle',
    component: AttributeTitle,
    argTypes: {
        onClick: {},
    },
};

const Template = (args) => ({
    components: { AttributeTitle },
    setup() {
        return { args };
    },
    template: '<AttributeTitle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    label: '标题栏',
    ExpandStatus: false,
};
