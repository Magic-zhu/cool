import AttributeTransform from '../components/AttributeTransform/AttributeTransform.vue';

export default {
    title: 'CoolBlack/AttributeTransform',
    component: AttributeTransform,
    argTypes: {
        location: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 0, y: 0, z: 0 },
        onOnChange: {}
    },
};

const Template = (args) => ({
    components: { AttributeTransform },
    setup() {
        return { args };
    },
    template: '<AttributeTransform v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    location: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 0, y: 0, z: 0 }
};
