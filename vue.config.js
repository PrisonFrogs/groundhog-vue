const {
  defineConfig,
} = require('@vue/cli-service');

const port = process.env.port || process.env.npm_config_port || 9000;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
    host: 'localhost',
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000/api', // 相当于我们访问localhost:9001/api 会转发到:localhost:9000/api 解决了本地跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
