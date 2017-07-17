var webpack = require("webpack");
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    /* Output bundle name : entry point */
    entry:  {
        "./build/bundle" : "./src/Entry.ts"
    },
    output: {
        filename: PROD ? '[name].min.js' : '[name].js',
        libraryTarget: 'this' // outputs module.exports to 'this', ie. the window.
    },
    devtool: 'source-map', // so we get .map.js.
    resolve: {
        modules: [".", "node_modules"], // specifies that all our modules are relative to the project root (rather than the default node_modules)
        extensions: [".js", ".webpack.js", ".web.js", ".d.ts", ".ts", ".tsx"]
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }

    , plugins:
    // Minify if PROD flag is set to true.
        PROD ? [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            })
        ] : []
};