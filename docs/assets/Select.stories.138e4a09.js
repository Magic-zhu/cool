var p=Object.defineProperty;var s=(e,t)=>p(e,"name",{value:t,configurable:!0});import{d as m,g as u,j as g,l as y,a as h,b as r,w as b,x as v,e as S,F as _,y as f,n as M,o as l,t as C}from"./vue.esm-bundler.9ba8ec38.js";import{_ as B}from"./_plugin-vue_export-helper.12824e74.js";const i=m({name:"MInput",props:{width:{type:String},height:{type:String},value:{type:[String,Boolean]},disabled:{type:Boolean},options:{type:Array}},setup(e,{emit:t}){e=u(e);const a=g(e.value);return y(()=>e.value,o=>{!o||(a.value=o.toString())}),{styles:h(()=>({width:e.width,height:e.height})),inputValue:a,onChange(){t("change",a.value)}}}});const w={class:"MSelect"},T=["disabled"],k=["value","disabled"];function I(e,t,a,o,L,N){return l(),r("div",w,[b(S("select",{name:"",disabled:e.disabled,class:"MSelect-body",style:M(e.styles),onChange:t[0]||(t[0]=(...n)=>e.onChange&&e.onChange(...n)),"onUpdate:modelValue":t[1]||(t[1]=n=>e.inputValue=n)},[(l(!0),r(_,null,f(e.options,(n,c)=>(l(),r("option",{value:n.value,disabled:n.disabled,key:c},C(n.label||n.value),9,k))),128))],44,T),[[v,e.inputValue]])])}s(I,"_sfc_render");const d=B(i,[["render",I],["__scopeId","data-v-046a7c44"]]);i.__docgenInfo={displayName:"MInput",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"value",type:{name:"string|boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"options",type:{name:"array"}}]};const D={parameters:{storySource:{source:`import MSelect from "../components/MSelect/MSelect.vue";\r
\r
export default {\r
  title: "CoolBlack/Select",\r
  component: MSelect,\r
  argTypes: {\r
    onChange:{}\r
  },\r
};\r
\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { MSelect },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    return { args };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: '<MSelect v-bind="args" />',\r
});\r
\r
export const SelectCommon = Template.bind({});\r
SelectCommon.args = {\r
    options:[\r
        {\r
            value:"test1",\r
            label:"test1"\r
        },\r
        {\r
            value:"test2",\r
            label:"test2"\r
        },\r
        {\r
            value:"test3",\r
            label:"test3"\r
        },\r
    ]\r
};\r
`,locationsMap:{"select-common":{startLoc:{col:17,line:11},endLoc:{col:2,line:20},startBody:{col:17,line:11},endBody:{col:2,line:20}}}}},title:"CoolBlack/Select",component:d,argTypes:{onChange:{}}},V=s(e=>({components:{MSelect:d},setup(){return{args:e}},template:'<MSelect v-bind="args" />'}),"Template"),$=V.bind({});$.args={options:[{value:"test1",label:"test1"},{value:"test2",label:"test2"},{value:"test3",label:"test3"}]};const E=["SelectCommon"];export{$ as SelectCommon,E as __namedExportsOrder,D as default};
//# sourceMappingURL=Select.stories.138e4a09.js.map
