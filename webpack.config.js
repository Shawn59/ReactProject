"use strict";
const path = require('path');

module.exports = {
    entry: './app/index.js', // главный файл
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        stats: "error-only",
    }
};