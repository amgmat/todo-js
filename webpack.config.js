const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports ={
    mode: 'development',
    
    entry: './src/index.js',
    output:{
        clean:true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader:'html-loader',
                options:{
                    sources:false,
                    minimize:false
                }

            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/ ,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
              }
        ]
    },
    plugins:[
        new  HtmlWebPackPlugin({
            title: 'Mi webpack App',
            filename:'index.html',
            template:'./src/index.html',
            inject: 'body'
        }),
        new MiniCssExtract({
            filename:'[name].css',
            // filename: '[name].[fullhash].css',
            ignoreOrder:false
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets/" },
            ],
          }),
    ]
}