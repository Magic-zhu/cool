import{d as A,m as j,f as C,j as i,p as E,s as k,g as o,k as x,o as M,u as N,x as B}from"./vue.esm-bundler-h0LkVFgZ.js";import{M as $}from"./MInput-rpwdQObO.js";import{T as D}from"./AttributeTitle-o2K8l6q1.js";import{_ as F}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./MIcon-TtqHzuQm.js";const g=A({props:{location:{type:Object},rotation:{type:Object},scale:{type:Object},label:String},components:{MInput:$,Title:D},setup(t,s){var y,a,l,r,u,d,c,p,b;const v=j(!0),z=()=>{v.value=!v.value},f={location:{x:((y=t.location)==null?void 0:y.x)||0,y:((a=t.location)==null?void 0:a.y)||0,z:((l=t.location)==null?void 0:l.z)||0},rotation:{x:((r=t.rotation)==null?void 0:r.x)||0,y:((u=t.rotation)==null?void 0:u.y)||0,z:((d=t.rotation)==null?void 0:d.z)||0},scale:{x:((c=t.scale)==null?void 0:c.x)||0,y:((p=t.scale)==null?void 0:p.y)||0,z:((b=t.scale)==null?void 0:b.z)||0}};return{ExpandStatus:v,show:z,props:t,out:(_,h,e)=>{f[_][h]=+e,s.emit("onChange",f)}}}}),n=t=>(N("data-v-9b2e5eda"),t=t(),B(),t),R={class:"attribute-transform"},X={class:""},Y={class:"attribute"},Z=n(()=>o("div",{class:"attribute-label"},"Translation",-1)),V={class:"attribute-body"},q={class:"attribute-body-item"},G=n(()=>o("span",{class:"x"},"X",-1)),H={class:"attribute-body-item"},J=n(()=>o("span",{class:"y"},"Y",-1)),K={class:"attribute-body-item"},L=n(()=>o("span",{class:"z"},"Z",-1)),P={class:"attribute"},Q=n(()=>o("div",{class:"attribute-label"},"Rotation",-1)),U={class:"attribute-body"},W={class:"attribute-body-item"},tt=n(()=>o("span",{class:"x"},"X",-1)),ot={class:"attribute-body-item"},st=n(()=>o("span",{class:"y"},"Y",-1)),et={class:"attribute-body-item"},at=n(()=>o("span",{class:"z"},"Z",-1)),nt={class:"attribute"},it=n(()=>o("div",{class:"attribute-label"},"Scale",-1)),lt={class:"attribute-body"},rt={class:"attribute-body-item"},ut=n(()=>o("span",{class:"x"},"X",-1)),dt={class:"attribute-body-item"},ct=n(()=>o("span",{class:"y"},"Y",-1)),pt={class:"attribute-body-item"},bt=n(()=>o("span",{class:"z"},"Z",-1));function mt(t,s,v,z,f,S){var l,r,u,d,c,p,b,_,h;const y=x("Title"),a=x("MInput");return M(),C("div",R,[i(y,{label:t.label||"TRANSFORM",ExpandStatus:t.ExpandStatus,onOnClick:t.show},null,8,["label","ExpandStatus","onOnClick"]),E(o("div",X,[o("div",Y,[Z,o("div",V,[o("div",q,[G,i(a,{width:"60px",value:(l=t.props.location)==null?void 0:l.x,onOnInput:s[0]||(s[0]=e=>{t.out("location","x",e)})},null,8,["value"])]),o("div",H,[J,i(a,{width:"60px",value:(r=t.props.location)==null?void 0:r.y,onOnInput:s[1]||(s[1]=e=>{t.out("location","y",e)})},null,8,["value"])]),o("div",K,[L,i(a,{width:"60px",value:(u=t.props.location)==null?void 0:u.z,onOnInput:s[2]||(s[2]=e=>{t.out("location","z",e)})},null,8,["value"])])])]),o("div",P,[Q,o("div",U,[o("div",W,[tt,i(a,{width:"60px",value:(d=t.props.rotation)==null?void 0:d.x,onOnInput:s[3]||(s[3]=e=>{t.out("rotation","x",e)})},null,8,["value"])]),o("div",ot,[st,i(a,{width:"60px",value:(c=t.props.rotation)==null?void 0:c.y,onOnInput:s[4]||(s[4]=e=>{t.out("rotation","y",e)})},null,8,["value"])]),o("div",et,[at,i(a,{width:"60px",value:(p=t.props.rotation)==null?void 0:p.z,onOnInput:s[5]||(s[5]=e=>{t.out("rotation","z",e)})},null,8,["value"])])])]),o("div",nt,[it,o("div",lt,[o("div",rt,[ut,i(a,{width:"60px",value:(b=t.props.scale)==null?void 0:b.x},null,8,["value"])]),o("div",dt,[ct,i(a,{width:"60px",value:(_=t.props.scale)==null?void 0:_.y,onOnInput:s[6]||(s[6]=e=>{t.out("scale","y",e)})},null,8,["value"])]),o("div",pt,[bt,i(a,{width:"60px",value:(h=t.props.scale)==null?void 0:h.z,onOnInput:s[7]||(s[7]=e=>{t.out("scale","z",e)})},null,8,["value"])])])])],512),[[k,t.ExpandStatus]])])}const w=F(g,[["render",mt],["__scopeId","data-v-9b2e5eda"]]);g.__docgenInfo={exportName:"default",displayName:"AttributeTransform",description:"",tags:{},props:[{name:"location",type:{name:"object"}},{name:"rotation",type:{name:"object"}},{name:"scale",type:{name:"object"}},{name:"label",type:{name:"string"}}],sourceFiles:["F:/github/cool/ui/src/components/AttributeTransform/AttributeTransform.vue"]};const xt={title:"CoolBlack/AttributeTransform",component:w,argTypes:{location:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:0,y:0,z:0},onOnChange:{}}},vt=t=>({components:{AttributeTransform:w},setup(){return{args:t}},template:'<AttributeTransform v-bind="args" />'}),m=vt.bind({});m.args={location:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:0,y:0,z:0}};var T,I,O;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AttributeTransform
  },
  setup() {
    return {
      args
    };
  },
  template: '<AttributeTransform v-bind="args" />'
})`,...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const Tt=["Default"];export{m as Default,Tt as __namedExportsOrder,xt as default};
