const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://app.au1.sysdig.com',
  changeOrigin: true
}
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
};