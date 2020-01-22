"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js', // главный файл
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            { // Для сборки js-jsx файлов
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {// Для сборки css файлов
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    }

    /* devServer: {
         stats: "error-only",
     }*/
};

/*
babel-core: Преобразует код ES6 в ES5.
babel-loader: Помощник Webpack для транспайлинга кода, задает пресеты.
babel-preset-env: Пресет, который помогает babel конвертировать код ES6, ES7 и ES8 в код ES5.
babel-preset-react: Пресет, преобразующий JSX в JavaScript.
* */