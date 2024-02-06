import{M as r}from"./MInput-rpwdQObO.js";import"./vue.esm-bundler-h0LkVFgZ.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const c={title:"CoolBlack/Input",component:r,argTypes:{type:{control:{type:"select"},options:["text","checkbox"]},onOnInput:{}}},p=s=>({components:{MInput:r},setup(){return{args:s}},template:'<MInput v-bind="args" />'}),t=p.bind({});t.args={value:"测试输入框"};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    MInput
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<MInput v-bind="args" />'
})`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const d=["InputText"];export{t as InputText,d as __namedExportsOrder,c as default};
