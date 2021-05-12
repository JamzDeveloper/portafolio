const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }, 
    module:    {
        rules: [

           /* {
                test:/.css$/i,
                use: ['style-loader','css-loader'],

            },*/
          /*  {
              test: /\.html$/i,
              use: [
                {
                  loader: "html-loader",
                  
                },
              ],
            },*/
            {
              test: /\.(glb|gltf)$/,
              use:
              [
                  {
                      loader: 'file-loader',
                      options:
                      {
                          outputPath: 'assets/models/'
                      }
                  }
              ]
          },
            {
                test: /\.css$/i,
                /*use: [MiniCssExtractPlugin.loader, "css-loader"],*/
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: "./",
                    },
                  },
                  "css-loader",
                ],
              },
              
              
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: ["file-loader?name=assets/[name].[ext]","image-webpack-loader"],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin(),
    ],


}