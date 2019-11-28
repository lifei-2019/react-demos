const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
//向外暴露一个打包的配置对象
module.exports = {
    mode: 'development' ,//也可以是 production
    plugins: [
        htmlPlugin
    ]
}