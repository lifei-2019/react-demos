
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的组件和虚拟DOM放到页面上展示


//在JS文件中，混合写入类似于html的语法叫做JSX语法
//在JS文件里默认不能写HTML。但可以用babel来转换JS里的标签
//JSX语法的本质是在运行的时候，被转换成了React.creatElement形式来执行的。

const mydiv = <div id="mydiv" title="div aaa">
    这是一个div
    <h1>这是个h1元素</h1>
    </div>

ReactDOM.render(mydiv,document.getElementById('app'))