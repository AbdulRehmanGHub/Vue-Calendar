const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/Vue-Calendar/',
  transpileDependencies: true
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'prdoduction' ? '/Vue-Calendar/' : '/'
};
