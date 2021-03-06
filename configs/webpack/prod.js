// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const commonConfig = require("./common");

const prodWebpackConfigureation = {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../build"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [],
};

module.exports = merge(commonConfig, prodWebpackConfigureation);
