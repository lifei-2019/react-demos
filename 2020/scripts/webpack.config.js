const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

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
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(process.cwd(),"dist"),
        filename: 'static/js/[name].[hash:8].js'        //可以用chunkHash同一次操作每个文件都不一样
    },           
    plugins: [
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'                    //后写的先执行
                ],
                exclude: /node_modules/
            },
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