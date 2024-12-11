const path = require('path');

module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, 'src/components'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@data': path.resolve(__dirname, 'src/data'),
    };
    return config;
};