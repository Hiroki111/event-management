const mix = require('laravel-mix');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Fiber = require('fibers');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

mix.webpackConfig({
		devtool: "inline-source-map",
		entry: './resources/js/app.js',
		resolve: {
			extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
		},
		output: {
			filename: 'app.js',
			path: path.resolve(__dirname, 'public/js')
		},
		module: {
			rules: [{
				test: /\.(js|jsx)?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			}, {
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			}, {
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}, {
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options: {
						implementation: require("sass"),
						fiber: Fiber
					}
				}]
			}]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css"
			}),
			new CleanWebpackPlugin(),
		]
	}).react('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css');