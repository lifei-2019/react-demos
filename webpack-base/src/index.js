
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的组件和虚拟DOM放到页面上展示



//在JS文件里不能写HTML。但可以用babel来转换JS里的标签
//JSX是在运行的时候，被转换成了React.creatElement形式来执行的。

const mydiv = <div id="mydiv" title="div aaa">这是一个div</div>

ReactDOM.render(mydiv,document.getElementById('app'))