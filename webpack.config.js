const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")

function getEntry() {
  const entry = {};
  glob.sync("./src/pages/**/index.js").forEach((file) => {
    const name = file.match(/\/pages\/(.+)\/index.js/)[1];
    entry[name] = file;
  });
  return entry;
}

function getHtmlTemplate() {
  return glob
    .sync("./src/pages/**/index.html")
    .map((file) => {
      return { name: file.match(/\/pages\/(.+)\/index.html/)[1], path: file };
    })
    .map(
      (template) =>
        // [
        new HtmlWebpackPlugin({
          title: `${template.name}`,
          template: template.path,
          chunks: [template.name.toString()],
          filename: `${template.name}.html`,
        })
      // new HtmlWebpackPartialsPlugin({
      //   path: path.resolve(__dirname, "src/pages/partials/analytics.html"),
      //   location: "head",
      //   priority: "high",
      //   options: {
      //     ga_property_id: "UA-156189593-1",
      //   },
      // }),
      // ]
    );
  // .flat();
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
    watchFiles: [
      path.resolve(__dirname, "dist"),
      path.resolve(__dirname, "src"),
    ], // watch root (dist) folder and src (for html)
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        type: "asset/inline",
      },
      // css
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // // Translates CSS into CommonJS
          "css-loader",
          // Help Sass rewrite urls
          "resolve-url-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        // https://webpack.js.org/loaders/css-loader/#root
        test: /\.css$/i,
        // test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|mp4|webm)$/,
        type: "asset/resource",
      },
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
    noParse: [/benchmark/],
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      process: require.resolve("process/browser"),
    },
  },
  // plugins
  plugins: [
    new MiniCssExtractPlugin(),
    ...getHtmlTemplate(),
    // new HtmlWebpackPartialsPlugin({
    //   path: path.resolve(__dirname, "src/pages/partials/analytics.html"),
    //   location: "head",
    //   priority: "high",
    //   options: {
    //     ga_property_id: "UA-156189593-1",
    //   },
    // }),
    // new CleanWebpackPlugin(),
  ],
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
};
