const path = require("path")
const glob = require("glob")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function getEntry() {
  const entry = {}
  glob.sync("./src/pages/**/index.js").forEach((file) => {
    const name = file.match(/\/pages\/(.+)\/index.js/)[1]
    entry[name] = file
  })
  return entry
}

function getHtmlTemplate() {
  return glob
    .sync("./src/pages/**/index.html")
    .map((file) => {
      return { name: file.match(/\/pages\/(.+)\/index.html/)[1], path: file }
    })
    .map(
      (template) =>
        new HtmlWebpackPlugin({
          title: `${template.name}`,
          template: template.path,
          chunks: [template.name.toString()],
          filename: `${template.name}.html`,
        })
    )
}

module.exports = {
  mode: "development",
  // mode: "production",
  // entry: {
  //   main: path.resolve(__dirname, "src/app.js"),
  // },
  entry: getEntry(),
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
      // { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        // https://webpack.js.org/loaders/css-loader/#root
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
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
      {
        // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        // https://webpack.js.org/loaders/html-loader/#usage
        resourceQuery: /template/,
        loader: "html-loader",
      },
    ],
  },
  // plugins
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Webpack Test",
  //     filename: "index.html",
  //     template: path.resolve(__dirname, "src/template.html"),
  //   }),
  // ],
  plugins: [new MiniCssExtractPlugin(), ...getHtmlTemplate()],
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
  },
}
