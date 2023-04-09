var I=Object.defineProperty;var r=(t,n)=>I(t,"name",{value:n,configurable:!0});import{d as w,j as A,b as S,f as i,w as C,v as j,e as o,r as z,o as k,p as B,k as E}from"./vue.esm-bundler.9ba8ec38.js";import{M}from"./MInput.4a4f6f62.js";import{T as D}from"./AttributeTitle.deba6043.js";import{_ as N}from"./_plugin-vue_export-helper.12824e74.js";import"./MIcon.67ee647b.js";const T=w({props:{location:{type:Object},rotation:{type:Object},scale:{type:Object},label:String},components:{MInput:M,Title:D},setup(t,n){var v,e,l,u,d,c,p,m,b;const y=A(!0),x=r(()=>{y.value=!y.value},"show"),h={location:{x:((v=t.location)==null?void 0:v.x)||0,y:((e=t.location)==null?void 0:e.y)||0,z:((l=t.location)==null?void 0:l.z)||0},rotation:{x:((u=t.rotation)==null?void 0:u.x)||0,y:((d=t.rotation)==null?void 0:d.y)||0,z:((c=t.rotation)==null?void 0:c.z)||0},scale:{x:((p=t.scale)==null?void 0:p.x)||0,y:((m=t.scale)==null?void 0:m.y)||0,z:((b=t.scale)==null?void 0:b.z)||0}};return{ExpandStatus:y,show:x,props:t,out:r((_,f,s)=>{h[_][f]=+s,n.emit("onChange",h)},"out")}}});const a=r(t=>(B("data-v-50631d0c"),t=t(),E(),t),"_withScopeId"),$={class:"attribute-transform"},R={class:""},X={class:"attribute"},Y=a(()=>o("div",{class:"attribute-label"},"Translation",-1)),Z={class:"attribute-body"},L={class:"attribute-body-item"},V=a(()=>o("span",{class:"x"},"X",-1)),F={class:"attribute-body-item"},q=a(()=>o("span",{class:"y"},"Y",-1)),G={class:"attribute-body-item"},H=a(()=>o("span",{class:"z"},"Z",-1)),J={class:"attribute"},K=a(()=>o("div",{class:"attribute-label"},"Rotation",-1)),P={class:"attribute-body"},Q={class:"attribute-body-item"},U=a(()=>o("span",{class:"x"},"X",-1)),W={class:"attribute-body-item"},tt=a(()=>o("span",{class:"y"},"Y",-1)),ot={class:"attribute-body-item"},nt=a(()=>o("span",{class:"z"},"Z",-1)),st={class:"attribute"},et=a(()=>o("div",{class:"attribute-label"},"Scale",-1)),at={class:"attribute-body"},it={class:"attribute-body-item"},rt=a(()=>o("span",{class:"x"},"X",-1)),lt={class:"attribute-body-item"},ut=a(()=>o("span",{class:"y"},"Y",-1)),dt={class:"attribute-body-item"},ct=a(()=>o("span",{class:"z"},"Z",-1));function pt(t,n,y,x,h,g){var l,u,d,c,p,m,b,_,f;const v=z("Title"),e=z("MInput");return k(),S("div",$,[i(v,{label:t.label||"TRANSFORM",ExpandStatus:t.ExpandStatus,onOnClick:t.show},null,8,["label","ExpandStatus","onOnClick"]),C(o("div",R,[o("div",X,[Y,o("div",Z,[o("div",L,[V,i(e,{width:"60px",value:(l=t.props.location)==null?void 0:l.x,onOnInput:n[0]||(n[0]=s=>{t.out("location","x",s)})},null,8,["value"])]),o("div",F,[q,i(e,{width:"60px",value:(u=t.props.location)==null?void 0:u.y,onOnInput:n[1]||(n[1]=s=>{t.out("location","y",s)})},null,8,["value"])]),o("div",G,[H,i(e,{width:"60px",value:(d=t.props.location)==null?void 0:d.z,onOnInput:n[2]||(n[2]=s=>{t.out("location","z",s)})},null,8,["value"])])])]),o("div",J,[K,o("div",P,[o("div",Q,[U,i(e,{width:"60px",value:(c=t.props.rotation)==null?void 0:c.x,onOnInput:n[3]||(n[3]=s=>{t.out("rotation","x",s)})},null,8,["value"])]),o("div",W,[tt,i(e,{width:"60px",value:(p=t.props.rotation)==null?void 0:p.y,onOnInput:n[4]||(n[4]=s=>{t.out("rotation","y",s)})},null,8,["value"])]),o("div",ot,[nt,i(e,{width:"60px",value:(m=t.props.rotation)==null?void 0:m.z,onOnInput:n[5]||(n[5]=s=>{t.out("rotation","z",s)})},null,8,["value"])])])]),o("div",st,[et,o("div",at,[o("div",it,[rt,i(e,{width:"60px",value:(b=t.props.scale)==null?void 0:b.x},null,8,["value"])]),o("div",lt,[ut,i(e,{width:"60px",value:(_=t.props.scale)==null?void 0:_.y,onOnInput:n[6]||(n[6]=s=>{t.out("scale","y",s)})},null,8,["value"])]),o("div",dt,[ct,i(e,{width:"60px",value:(f=t.props.scale)==null?void 0:f.z,onOnInput:n[7]||(n[7]=s=>{t.out("scale","z",s)})},null,8,["value"])])])])],512),[[j,t.ExpandStatus]])])}r(pt,"_sfc_render");const O=N(T,[["render",pt],["__scopeId","data-v-50631d0c"]]);T.__docgenInfo={exportName:"default",displayName:"AttributeTransform",description:"",tags:{},props:[{name:"location",type:{name:"object"}},{name:"rotation",type:{name:"object"}},{name:"scale",type:{name:"object"}},{name:"label",type:{name:"string"}}]};const zt={parameters:{storySource:{source:`import AttributeTransform from '../components/AttributeTransform/AttributeTransform.vue';\r
\r
export default {\r
    title: 'CoolBlack/AttributeTransform',\r
    component: AttributeTransform,\r
    argTypes: {\r
        location: { x: 0, y: 0, z: 0 },\r
        rotation: { x: 0, y: 0, z: 0 },\r
        scale: { x: 0, y: 0, z: 0 },\r
        onOnChange: {}\r
    },\r
};\r
\r
const Template = (args) => ({\r
    components: { AttributeTransform },\r
    setup() {\r
        return { args };\r
    },\r
    template: '<AttributeTransform v-bind="args" />',\r
});\r
\r
export const Default = Template.bind({});\r
Default.args = {\r
    location: { x: 0, y: 0, z: 0 },\r
    rotation: { x: 0, y: 0, z: 0 },\r
    scale: { x: 0, y: 0, z: 0 }\r
};\r
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:20},startBody:{col:17,line:14},endBody:{col:2,line:20}}}}},title:"CoolBlack/AttributeTransform",component:O,argTypes:{location:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:0,y:0,z:0},onOnChange:{}}},mt=r(t=>({components:{AttributeTransform:O},setup(){return{args:t}},template:'<AttributeTransform v-bind="args" />'}),"Template"),bt=mt.bind({});bt.args={location:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:0,y:0,z:0}};const Tt=["Default"];export{bt as Default,Tt as __namedExportsOrder,zt as default};
//# sourceMappingURL=AttributeTransform.stories.c3f0ab67.js.map
