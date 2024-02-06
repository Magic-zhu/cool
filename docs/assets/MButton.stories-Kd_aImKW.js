import{M as r}from"./Button-Qd-AxC7B.js";import"./vue.esm-bundler-h0LkVFgZ.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const c={title:"CoolBlack/Button",component:r,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","default","large"]}}},a=s=>({components:{MyButton:r},setup(){return{args:s}},template:'<my-button v-bind="args" />'}),t=a.bind({});t.args={cool:!0,primary:!0,label:"Button"};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    MyButton
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />'
})`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["Primary"];export{t as Primary,l as __namedExportsOrder,c as default};
