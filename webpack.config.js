const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: { 
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ],
          },
        ],
    },
    plugins: [
      new Dotenv()
    ]
}