// const { glob } = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const path = require('path')

const ruleJs = {
   test: /\.js$/,
   exclude: /node_modules/,
   use: ['babel-loader']
}
const ruleStyle = {
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
}
const ruleImg = {
   test: /\.(png|jpg|gif|svg)$/i,
   type: "asset/resource",
   generator: {
      filename: 'img/[name][ext]',
   }
}

const rules = [ruleStyle, ruleJs, ruleImg]

module.exports = {
   // mode: development,
   entry: './src/js/app.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'login.html',
         template: 'src/login.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'register.html',
         template: 'src/register.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: 'src/index.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'nosotros.html',
         template: 'src/nosotros.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'contacto.html',
         template: 'src/contacto.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'producto.html',
         template: 'src/producto.html'
      }),
   ],
   module: {rules}
}