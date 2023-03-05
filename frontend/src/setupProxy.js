const { createProxyMiddleware } = require('http-proxy-middleware');

const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || 'http://localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || 5000;

module.exports = function (app) {

    app.use(
        '/api/*',
        createProxyMiddleware({
            target: BACKEND_HOST + ":" + BACKEND_PORT,
            changeOrigin: true,
            logLevel: 'debug'
        })
    );

};