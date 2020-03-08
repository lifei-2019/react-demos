import React from 'react'
import ReactDOM from 'react-dom'

//const app=<h1>Welcome React</h1>

// const createApp = (props) => {
//     return (
//     <div>
//         {/* 只要在jsx里插入js的代码，就加一层花括号即可，注释也是js，所以这里的注释加了一层花括号 */}
//         <h1>welcome {props.title}</h1>
//         <p>优秀的{props.title}</p>
//     </div>
//     )
// }

// const app = createApp({
//     title: 'React 16.8'
// })


const App = (props) => {
    return (
    <div>
        {/* 只要在jsx里插入js的代码，就加一层花括号即可，注释也是js，所以这里的注释加了一层花括号 */}
        <h1>welcome {props.title}</h1>
        <p>优秀的{props.title}</p>
    </div>
    )
}
ReactDOM.render(
    <App title="2020" />,
    document.querySelector('#root')
)