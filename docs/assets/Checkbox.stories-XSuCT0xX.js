import{d as m,m as u,f,g as a,p as c,s as k,j as g,y as C,k as b,o as x}from"./vue.esm-bundler-h0LkVFgZ.js";import{M as y,I as v}from"./MIcon-TtqHzuQm.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";const h=m({components:{MIcon:y},props:{checked:{type:Boolean,default:!1}},setup(e,o){const t=u(e.checked);return{ifChecked:t,change(){o.emit("onchange",t.value)},IconType:v}}}),_={class:"checkbox-wrapper"},I={class:"checkbox-show"};function M(e,o,t,T,D,E){const i=b("MIcon");return x(),f("div",_,[a("div",I,[c(g(i,{color:"green",width:"17px",height:"17px",type:e.IconType.CHECKED},null,8,["type"]),[[k,e.ifChecked]])]),c(a("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=s=>e.ifChecked=s),class:"checkbox-real",onChange:o[1]||(o[1]=(...s)=>e.change&&e.change(...s))},null,544),[[C,e.ifChecked]])])}const l=B(h,[["render",M],["__scopeId","data-v-79d7c177"]]);h.__docgenInfo={exportName:"default",displayName:"MCheckBox",description:"",tags:{},props:[{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["F:/github/cool/ui/src/components/MCheckBox/MCheckBox.vue"]};const j={title:"CoolBlack/CheckBox",component:l,argTypes:{onChange:{}}},w=e=>({components:{CheckBox:l},setup(){return{args:e}},template:'<CheckBox v-bind="args" />'}),n=w.bind({});n.args={};var r,p,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    CheckBox
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<CheckBox v-bind="args" />'
})`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const F=["Default"];export{n as Default,F as __namedExportsOrder,j as default};
