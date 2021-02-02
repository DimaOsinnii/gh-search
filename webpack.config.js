const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = () => ({
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "js/[name].bundle.js",
    path: __dirname + "/dist",
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.less|.css$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "src/index.html",
      inject: "body",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    writeToDisk: true,
    open: true,
  },
});
