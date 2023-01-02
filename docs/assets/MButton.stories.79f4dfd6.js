var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{M as r}from"./Button.eef95f4e.js";import"./vue.esm-bundler.6bcdb6b4.js";import"./_plugin-vue_export-helper.12824e74.js";const u={parameters:{storySource:{source:`import MyButton from '../components/Button/Button.vue';\r
\r
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export\r
export default {\r
    title: 'CoolBlack/Button',\r
    component: MyButton,\r
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
    argTypes: {\r
        backgroundColor: { control: 'color' },\r
        onClick: {},\r
        size: {\r
            control: { type: 'select' },\r
            options: ['small', 'default', 'large'],\r
        },\r
    },\r
};\r
\r
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args\r
const Template = (args) => ({\r
    // Components used in your story \`template\` are defined in the \`components\` object\r
    components: { MyButton },\r
    // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
    setup() {\r
        return { args };\r
    },\r
    // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
    template: '<my-button v-bind="args" />',\r
});\r
\r
export const Primary = Template.bind({});\r
// More on args: https://storybook.js.org/docs/vue/writing-stories/args\r
Primary.args = {\r
    cool: true,\r
    primary: true,\r
    label: 'Button',\r
};\r
\r
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"CoolBlack/Button",component:r,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","default","large"]}}},s=t(o=>({components:{MyButton:r},setup(){return{args:o}},template:'<my-button v-bind="args" />'}),"Template"),a=s.bind({});a.args={cool:!0,primary:!0,label:"Button"};const m=["Primary"];export{a as Primary,m as __namedExportsOrder,u as default};
//# sourceMappingURL=MButton.stories.79f4dfd6.js.map
