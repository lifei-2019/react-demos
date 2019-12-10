
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的组件和虚拟DOM放到页面上展示

//第一种创建组建的方式
function Hello(props){
    //如果在一个组件中return一个null，则表示此组件是空的，什么都不会渲染
    //return null
    console.log(props)
    //props.name = 'zs'
    //组件中的props都是只读的，不能被重新赋值。
    return <div>zheshige hello -- ｛props.name｝</div>
}


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