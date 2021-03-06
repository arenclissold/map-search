const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./lib/index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname),
    filename: "main.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
