const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 
const CopyPlugin = require('copy-webpack-plugin');

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: 'public/admin.html',
    title: 'webpack',
    filename: 'index.html'
})

// const minicssPlugin = new MiniCssExtractPlugin({
//     filename: 'static/css/[name].[chunkHash:8].css',
// })两种形式

module.exports = {                                           
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(process.cwd(),"dist"),
        filename: 'js/[name].[hash:8].js'        //可以用chunkHash同一次操作每个文件都不一样
    },           
    plugins: [
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
        }),
        new CopyPlugin([
            { from: path.resolve(process.cwd(),'src/static/'), 
              to: path.resolve(process.cwd(),'dist/static/') },
          ]),
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                exclude: /node_modules/
            },
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader:'less-loader',
                        options:{
                            
                        } 
                    }                   //和上面对比两种写法
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                        loader: 'url-loader',
                        options: {
                            limit: 512,                 //小于512则放到css里，大于512以图片
                            name: 'images/[name].[ext]',
                            publicPath: '/'
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                  }
                }
              }
        ],
    },
    devServer: {
        publicPath: "/",
        progress: true,
        //contentBase: "./dist", //服务启动在哪一个文件夹下
        open: true, // 启动服务时，自动打开浏览器
        port: 3000, // 端口号
        hot: true, // devServer开启Hot Module Replacement的功能 与chunkhash冲突所以原先在此关闭
        hotOnly: false, // 即便HMP的功能没有生效，浏览器也不能自动刷新
        compress: true
    }
}