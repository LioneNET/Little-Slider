const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: ['es5'],
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "little-slider.js",
    library: "LittleSlider",
    libraryExport: 'default',
    libraryTarget: "umd",
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/,
        /*парсинг лоадеров идет с права на лево*/
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ]
      }
    ],
  },
  mode: "development",
}