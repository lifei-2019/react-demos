
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的组件和虚拟DOM放到页面上展示

//默认，如果不做单独配置的话，不能省略.jsx后缀名
import Hello from './components/Hello.jsx'


const dog = {
    name: '大黄',
    age: 3,
    gender:'雄性'
}
ReactDOM.render(<div>
    123
    {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
    <Hello {...dog}></Hello>


    </div>,document.getElementById('app'))


    // 展开运算符
    // var o2 = {
    //     age: 22,
    //     address: 'nanjing',
    //     phone: '133'
    // }

    // var o1 = {
    //     name: 'zs',
    //     ...o2
    // }
    // console.log(o1)