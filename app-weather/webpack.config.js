const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV;

//configura todo para que en el build.js este todo cargado como los archivos js, css y html del proyecto
module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    mode: "development",
    modules: {//array de objetos
        rules: [ 
            {
                test: /\.js/, //todos los objetos javascript seran cargado por el siguiente modulo
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, 
                use: [ //todos los archivos de tipo css seran cargados por el siguiente modulo
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({//se inicializa porque es una clase, ubico mi archivo html
            template: './src/index.html'  
        }),
        new MiniCssExtractPlugin({ //ubico mi archivo css
            filename: "blunde.css" 
        })
    ]
}