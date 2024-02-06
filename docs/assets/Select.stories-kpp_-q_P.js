import{d as g,r as h,m as y,w as b,e as v,f as l,p as S,z as f,g as M,F as _,A as C,n as w,o as r,t as B}from"./vue.esm-bundler-h0LkVFgZ.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";const u=g({name:"MInput",props:{width:{type:String},height:{type:String},value:{type:[String,Boolean]},disabled:{type:Boolean},options:{type:Array}},setup(e,{emit:n}){e=h(e);const s=y(e.value);return b(()=>e.value,o=>{o&&(s.value=o.toString())}),{styles:v(()=>({width:e.width,height:e.height})),inputValue:s,onChange(){n("change",s.value)}}}}),F={class:"MSelect"},I=["disabled"],V=["value","disabled"];function $(e,n,s,o,N,T){return r(),l("div",F,[S(M("select",{name:"",disabled:e.disabled,class:"MSelect-body",style:w(e.styles),onChange:n[0]||(n[0]=(...t)=>e.onChange&&e.onChange(...t)),"onUpdate:modelValue":n[1]||(n[1]=t=>e.inputValue=t)},[(r(!0),l(_,null,C(e.options,(t,m)=>(r(),l("option",{value:t.value,disabled:t.disabled,key:m},B(t.label||t.value),9,V))),128))],44,I),[[f,e.inputValue]])])}const c=k(u,[["render",$],["__scopeId","data-v-046a7c44"]]);u.__docgenInfo={displayName:"MInput",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"value",type:{name:"string|boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"options",type:{name:"array"}}],sourceFiles:["F:/github/cool/ui/src/components/MSelect/MSelect.vue"]};const E={title:"CoolBlack/Select",component:c,argTypes:{onChange:{}}},A=e=>({components:{MSelect:c},setup(){return{args:e}},template:'<MSelect v-bind="args" />'}),a=A.bind({});a.args={options:[{value:"test1",label:"test1"},{value:"test2",label:"test2"},{value:"test3",label:"test3"}]};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    MSelect
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<MSelect v-bind="args" />'
})`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const j=["SelectCommon"];export{a as SelectCommon,j as __namedExportsOrder,E as default};
