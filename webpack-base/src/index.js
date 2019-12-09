
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的组件和虚拟DOM放到页面上展示

let a = 10
let str = '你好，中国'
let boo = true
let title ='999'
const h1 = <h1>哈哈哈哈哈哈哈</h1>

//jsx XML比HTML严格
//在JSX控制的区域内，写JS表达式，则需要把JS代码写到｛｝里
ReactDOM.render(<div>
    {a + 2}
    <hr/>
    {str}
    <hr/>
    {boo.toString()}
    {boo ? '条件为真' : '条件为佳'}
    <hr/>
    <p title={title}>这是p标签</p>
    <hr/>
    {h1}
    </div>,document.getElementById('app'))