import MSelect from "../components/MSelect/MSelect.vue";

export default {
  title: "CoolBlack/Select",
  component: MSelect,
  argTypes: {
    onChange:{}
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MSelect },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MSelect v-bind="args" />',
});

export const SelectCommon = Template.bind({});
SelectCommon.args = {
    options:[
        {
            value:"test1",
            label:"test1"
        },
        {
            value:"test2",
            label:"test2"
        },
        {
            value:"test3",
            label:"test3"
        },
    ]
};
