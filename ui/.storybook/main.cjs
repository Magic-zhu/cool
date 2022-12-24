module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    docsPage: "automatic"
  },
  async viteFinal(config) {
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV !== 'development'){
      config.build.assetsDir = "cool-ui/assets"
    };
    return config
  }
};