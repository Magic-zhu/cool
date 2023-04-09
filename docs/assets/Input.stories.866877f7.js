var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{M as e}from"./MInput.4a4f6f62.js";import"./vue.esm-bundler.9ba8ec38.js";import"./_plugin-vue_export-helper.12824e74.js";const i={parameters:{storySource:{source:`import MInput from "../components/MInput/MInput.vue";\r
\r
export default {\r
  title: "CoolBlack/Input",\r
  component: MInput,\r
  argTypes: {\r
    type: {\r
      control: { type: 'select' },\r
      options: ['text', 'checkbox'],\r
    },\r
    onOnInput: {}\r
  },\r
};\r
\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { MInput },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    return { args };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: '<MInput v-bind="args" />',\r
});\r
\r
export const InputText = Template.bind({});\r
InputText.args = {\r
  value: "\u6D4B\u8BD5\u8F93\u5165\u6846"\r
};\r
`,locationsMap:{"input-text":{startLoc:{col:17,line:15},endLoc:{col:2,line:24},startBody:{col:17,line:15},endBody:{col:2,line:24}}}}},title:"CoolBlack/Input",component:e,argTypes:{type:{control:{type:"select"},options:["text","checkbox"]},onOnInput:{}}},p=n(t=>({components:{MInput:e},setup(){return{args:t}},template:'<MInput v-bind="args" />'}),"Template"),s=p.bind({});s.args={value:"\u6D4B\u8BD5\u8F93\u5165\u6846"};const m=["InputText"];export{s as InputText,m as __namedExportsOrder,i as default};
//# sourceMappingURL=Input.stories.866877f7.js.map
