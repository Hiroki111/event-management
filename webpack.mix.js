const mix = require('laravel-mix');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Fiber = require('fibers');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

mix.webpackConfig({
	devtool: "inline-source-map",
	entry: './resources/js/index.tsx',
	resolve: {
		extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
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
			test: /\.(ts|tsx)?$/,
			use: [{ loader: 'ts-loader' }],
			exclude: /node_modules|\.d\.ts$/
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
}).react('resources/js/index.tsx', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.browserSync('event-management-test');