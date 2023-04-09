var d=Object.defineProperty;var r=(e,o)=>d(e,"name",{value:o,configurable:!0});import{d as h,j as i,b as m,e as s,w as a,v as u,f,u as k,r as C,o as g}from"./vue.esm-bundler.9ba8ec38.js";import{M as x,I as _}from"./MIcon.67ee647b.js";import{_ as B}from"./_plugin-vue_export-helper.12824e74.js";const c=h({components:{MIcon:x},props:{checked:{type:Boolean,default:!1}},setup(e,o){const n=i(e.checked);return{ifChecked:n,change(){o.emit("onchange",n.value)},IconType:_}}});const y={class:"checkbox-wrapper"},b={class:"checkbox-show"};function v(e,o,n,T,w,D){const l=C("MIcon");return g(),m("div",y,[s("div",b,[a(f(l,{color:"green",width:"17px",height:"17px",type:e.IconType.CHECKED},null,8,["type"]),[[u,e.ifChecked]])]),a(s("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=t=>e.ifChecked=t),class:"checkbox-real",onChange:o[1]||(o[1]=(...t)=>e.change&&e.change(...t))},null,544),[[k,e.ifChecked]])])}r(v,"_sfc_render");const p=B(c,[["render",v],["__scopeId","data-v-79d7c177"]]);c.__docgenInfo={exportName:"default",displayName:"MCheckBox",description:"",tags:{},props:[{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const j={parameters:{storySource:{source:`import CheckBox from "../components/MCheckBox/MCheckBox.vue";\r
\r
export default {\r
    title: "CoolBlack/CheckBox",\r
    component: CheckBox,\r
    argTypes: {\r
        onChange: {}\r
    },\r
};\r
\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: { CheckBox },\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return { args };\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<CheckBox v-bind="args" />',\r
});\r
\r
export const Default = Template.bind({});\r
Default.args = {\r
\r
};\r
`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:2,line:20},startBody:{col:17,line:11},endBody:{col:2,line:20}}}}},title:"CoolBlack/CheckBox",component:p,argTypes:{onChange:{}}},M=r(e=>({components:{CheckBox:p},setup(){return{args:e}},template:'<CheckBox v-bind="args" />'}),"Template"),I=M.bind({});I.args={};const L=["Default"];export{I as Default,L as __namedExportsOrder,j as default};
//# sourceMappingURL=Checkbox.stories.196343a1.js.map
