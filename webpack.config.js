const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development", // production
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // root to serve static files
    },
    port: 5001, // default 8080
    open: true, // open default browser
    hot: true, // hot module reloading
    // watchFiles: true, // watch root (dist) folder
  },
  // loaders
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
      // js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Test",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
}
