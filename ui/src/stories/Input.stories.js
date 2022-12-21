import MInput from "../components/MInput/MInput.vue";

export default {
  title: "CoolBlack/Input",
  component: MInput,
  argTypes: {
    type:{
        control: { type: 'select' },
        options: ['text', 'checkbox'],
    },
    onInput:{}
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MInput v-bind="args" />',
});

export const InputText = Template.bind({});
InputText.args = {
    value:"测试输入框"
};
