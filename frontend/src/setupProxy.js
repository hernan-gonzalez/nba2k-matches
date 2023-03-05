const { createProxyMiddleware } = require('http-proxy-middleware');

const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:5000';

module.exports = function (app) {

    app.use(
        '/api/*',
        createProxyMiddleware({
            target: BACKEND_HOST,
            changeOrigin: true,
            logLevel: 'debug'
        })
    );

};