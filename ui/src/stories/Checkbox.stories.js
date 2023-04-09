import CheckBox from "../components/MCheckBox/MCheckBox.vue";

export default {
    title: "CoolBlack/CheckBox",
    component: CheckBox,
    argTypes: {
        onChange: {}
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { CheckBox },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<CheckBox v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {

};
