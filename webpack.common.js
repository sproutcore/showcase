const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = {
  target: "web",
  name: "ShowCase",
  mode: "development",
  context: __dirname,
  entry: {
    showcase: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          // 'style-loader', // inject in html
          MiniCssExtractPlugin.loader,

          'css-loader', // convert to es modules
          {
            loader: 'sass-loader',
            options: {
              // additionalData: '@import "./node_modules/compass-mixins-fixed/lib/compass";',
              additionalData: fs.readFileSync("./resources/_theme.scss").toString(),
              sassOptions: {
                includePaths: [
                    path.resolve(
                        __dirname, './node_modules/compass-mixins-fixed/lib'
                    ),
                ],
            },
            }
          },
          {
            loader: path.join(__dirname, './node_modules/sproutcore/lib/sc_static_url_loader.js'),
          },

        ]
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(eot|ttf|woff|woff2)/,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(sproutcore)\/).*/,
        use: [
          'imports-loader?wrapper=window',
          {
            loader: path.join(__dirname, './node_modules/sproutcore/lib/sc_super_loader.js'),
            options: {
              useOldStyle: false,
              injectImport: false
            }
          },
          {
            loader: path.join(
              __dirname,
              './node_modules/sproutcore/lib/sc_static_url_loader.js'
            ),
          },
          {
            loader: path.join(
                __dirname,
                './node_modules/sproutcore/lib/sc_ifdebug_fixtures_loader.js'
            ),
          },
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    // filename: "SproutCore.[name].js",
    // filename: "sproutcore.js",
    // library: ["SC"],
    library: ["[name]"],
    libraryTarget: 'var',
    globalObject: 'window',
    // iife: false
  },
  optimization: {
    // useExports: true
    // innerGraph: false
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'SproutCore ShowCase',
      template: './node_modules/sproutcore/lib/index.ejs',
      templateParameters: {
        loading: "Loading..."
      }
    })
  ]
}