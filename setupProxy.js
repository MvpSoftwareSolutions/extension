const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://198.251.68.245:2020/',
            changeOrigin: true,
        })
    );
};