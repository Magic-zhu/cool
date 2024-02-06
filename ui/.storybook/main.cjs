module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },

  "features": {
    "storyStoreV7": true
  },

  docs: {
    autodocs: true
  },

  async viteFinal(config) {
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV !== 'development'){
      config.build.assetsDir = "cool-ui/assets"
    };
    return config
  }
};