const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})


//向外暴露一个打包的配置对象 因为webpack是基于Node构建，所以支持所有的Node API和语法
//webpack默认只能打包js后缀名的文件，.png和.vue无法主动处理，所以要配置第三方的loader，放到module里；
module.exports = {
    mode: 'development' ,//也可以是 production
    plugins: [
        htmlPlugin
    ],

    module:{
    //所有第三方模块的配置规则
        rules:[//第三方匹配规则
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude:/node_modules/     //一定要添加excule排除项
            },
        ]
    }
}