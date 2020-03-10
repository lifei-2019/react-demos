import React from 'react'
import { render } from 'react-dom'

//定义组建的第二种方式，使用类继承React.Component

class App extends React.Component{
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>类组件继承</h1>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}


//类组件渲染的原理
// const app = new App({
//     desc: '类组件是继承React.Component'
// }).render

//render是react dom提供的方法，通常只会用一次
render(
    <App desc="类组件是继承React.Component" />,
    document.querySelector('#root')
)

