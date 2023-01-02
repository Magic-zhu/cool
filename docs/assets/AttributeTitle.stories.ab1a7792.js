var u=Object.defineProperty;var r=(t,e)=>u(t,"name",{value:e,configurable:!0});import{d as c,a as d,b as m,e as n,f,n as o,t as b,r as y,o as _}from"./vue.esm-bundler.6bcdb6b4.js";import{M as T}from"./MIcon.76985500.js";import{_ as g}from"./_plugin-vue_export-helper.12824e74.js";const a=c({props:{ExpandStatus:{type:Boolean,required:!0},label:{type:String,required:!0},color:{type:String,default:"white"}},components:{Icon:T},setup(t,e){return{show:r(()=>{e.emit("onClick")},"show"),style:d(()=>({color:t.color}))}}});function A(t,e,s,k,B,C){const i=y("Icon");return _(),m("div",{class:"attribute-title",onClick:e[0]||(e[0]=(...p)=>t.show&&t.show(...p))},[n("span",{style:o(t.ExpandStatus?"transform:rotate(90deg)":"")},[f(i,{type:"start",color:t.color},null,8,["color"])],4),n("span",{class:"attribute-title-label",style:o(t.style)},b(t.label),5)])}r(A,"_sfc_render");const l=g(a,[["render",A],["__scopeId","data-v-f400f55b"]]);a.__docgenInfo={exportName:"default",displayName:"AttributeTitle",description:"",tags:{},props:[{name:"ExpandStatus",type:{name:"boolean"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:'"white"'}}]};const h={parameters:{storySource:{source:`import AttributeTitle from '../components/AttributeTitle/AttributeTitle.vue';\r
\r
export default {\r
    title: 'CoolBlack/AttributeTitle',\r
    component: AttributeTitle,\r
    argTypes: {\r
        onClick: {},\r
    },\r
};\r
\r
const Template = (args) => ({\r
    components: { AttributeTitle },\r
    setup() {\r
        return { args };\r
    },\r
    template: '<AttributeTitle v-bind="args" />',\r
});\r
\r
export const Default = Template.bind({});\r
Default.args = {\r
    label: '\u6807\u9898\u680F',\r
    ExpandStatus: false,\r
};\r
`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:2,line:17},startBody:{col:17,line:11},endBody:{col:2,line:17}}}}},title:"CoolBlack/AttributeTitle",component:l,argTypes:{onClick:{}}},S=r(t=>({components:{AttributeTitle:l},setup(){return{args:t}},template:'<AttributeTitle v-bind="args" />'}),"Template"),v=S.bind({});v.args={label:"\u6807\u9898\u680F",ExpandStatus:!1};const D=["Default"];export{v as Default,D as __namedExportsOrder,h as default};
//# sourceMappingURL=AttributeTitle.stories.ab1a7792.js.map
