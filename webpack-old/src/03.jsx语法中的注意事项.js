
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的组件和虚拟DOM放到页面上展示

let a = 10
let str = '你好，中国'
let boo = true
let title ='999'
const h1 = <h1>哈哈哈哈哈哈哈</h1>
const arr = [
    <h2>这是h2</h2>,
    <h3>zheshi h3</h3>
]

const arrstr = ['灰原哀','柯南','毛利']

//方法一：定义一个空数组，用来存名称标签
const namearr = []
// React中需要把key添加给 forEach或map或for循环直接控制的元素
arrstr.forEach(item =>{
    const temp = <h5 key={item}>{item}</h5>
    namearr.push(temp)
})


//方法二：数组的map方法 有花括号就要有return
const result = arrstr.map(item => {
    return item + '~~'
})
console.log(result)

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
    <hr/>
    {arr}
    <hr/>
    {namearr}
    <hr/>
    {arrstr.map(item => <h3 key={item}>{item}</h3>)}
    <hr/>
    
    <p className="myele">!!!!</p>
    <label htmlFor="ooo">111</label>
    </div>,document.getElementById('app'))