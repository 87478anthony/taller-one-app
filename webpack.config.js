const HtmlWebpackPlugin = require('html-webpack-plugin');

// Dev server config
const devServer = {
    static: './dist',
    port: 3000,
    open: true,
    compress: true,
}

const rulesForTypescript = {
    test: /\.ts?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};
    

const rules = [rulesForTypescript];

module.exports = {
    entry: './src/tigo-taller.ts',
    module: {
        rules
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
    ],
    devServer
};

