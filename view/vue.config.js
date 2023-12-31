module.exports = {
    outputDir: '../docs',
    transpileDependencies: [],
    lintOnSave: false,
    pages: {
      index: {
        entry: 'src/pages/index/main.ts',
        template: 'public/index.html',
        filename: 'index.html',
        title: 'shiho-aoki | profile'
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
    },
  };
  