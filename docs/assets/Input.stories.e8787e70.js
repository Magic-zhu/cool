var l=Object.defineProperty;var r=(e,t)=>l(e,"name",{value:t,configurable:!0});import{l as i,r as d,m as p,w as m,a as c,b as y,p as g,v as h,e as I,d as v,o as b}from"./vue.esm-bundler.879fb445.js";import{_ as f}from"./_plugin-vue_export-helper.12824e74.js";const s=i({name:"MInput",props:{width:{type:String},height:{type:String},value:{type:[String,Boolean]},disabled:{type:Boolean},type:{type:String,default:"text"}},setup(e,{emit:t}){e=d(e);let n;return e.type==="text"?n=p(e.value):n=p(e.value),m(()=>e.value,a=>{a!==void 0&&(n.value=a.toString())}),{inputType:e.type,styles:c(()=>({width:e.width,height:e.height})),inputValue:n,onInput(){t("input",n.value)},onChange(){t("change",n.value)}}}});const _={class:"minput"},M=["type","disabled"];function x(e,t,n,a,C,w){return b(),y("div",_,[g(I("input",{type:e.type,class:"minput-body",style:v(e.styles),onInput:t[0]||(t[0]=(...o)=>e.onInput&&e.onInput(...o)),onChange:t[1]||(t[1]=(...o)=>e.onChange&&e.onChange(...o)),"onUpdate:modelValue":t[2]||(t[2]=o=>e.inputValue=o),disabled:e.disabled},null,44,M),[[h,e.inputValue]])])}r(x,"_sfc_render");const u=f(s,[["render",x],["__scopeId","data-v-5003174b"]]);s.__docgenInfo={displayName:"MInput",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"value",type:{name:"string|boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}}]};const $={parameters:{storySource:{source:`import MInput from "../components/MInput/MInput.vue";\r
\r
export default {\r
  title: "CoolBlack/Input",\r
  component: MInput,\r
  argTypes: {\r
    type:{\r
        control: { type: 'select' },\r
        options: ['text', 'checkbox'],\r
    },\r
    onInput:{}\r
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
    value:"\u6D4B\u8BD5\u8F93\u5165\u6846"\r
};\r
`,locationsMap:{"input-text":{startLoc:{col:17,line:15},endLoc:{col:2,line:24},startBody:{col:17,line:15},endBody:{col:2,line:24}}}}},title:"CoolBlack/Input",component:u,argTypes:{type:{control:{type:"select"},options:["text","checkbox"]},onInput:{}}},T=r(e=>({components:{MInput:u},setup(){return{args:e}},template:'<MInput v-bind="args" />'}),"Template"),B=T.bind({});B.args={value:"\u6D4B\u8BD5\u8F93\u5165\u6846"};const N=["InputText"];export{B as InputText,N as __namedExportsOrder,$ as default};
//# sourceMappingURL=Input.stories.e8787e70.js.map
