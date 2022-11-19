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
      title: 'shiho-aoki | profile',
    },
    academic: {
      entry: 'src/pages/academic/main.ts',
      template: 'public/academic.html',
      filename: 'academic.html',
      title: 'shiho-aoki | academic history'
    },
    business: {
      entry: 'src/pages/business/main.ts',
      template: 'public/business.html',
      filename: 'business.html',
      title: 'shiho-aoki | business history'
    },
    timeline: {
      entry: 'src/pages/timeline/main.ts',
      template: 'public/timeline.html',
      filename: 'timeline.html',
      title: 'shiho-aoki | timeline'
    },
    events: {
      entry: 'src/pages/events/main.ts',
      template: 'public/events.html',
      filename: 'events.html',
      title: 'shiho-aoki | events'
    },
    activity: {
      entry: 'src/pages/activity/main.ts',
      template: 'public/activity.html',
      filename: 'activity.html',
      title: 'shiho-aoki | activity'
    },
  },
});
