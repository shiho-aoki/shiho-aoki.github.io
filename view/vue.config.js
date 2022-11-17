const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: '../docs',
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    top: {
      entry: 'src/pages/profile/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
    timeline: {
      entry: 'src/pages/timeline/main.ts',
      template: 'public/timeline.html',
      filename: 'timeline.html',
    },
  },
});
