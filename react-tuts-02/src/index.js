import React ,{useState, useEffect, Component,createContext} from 'react'
import { render } from 'react-dom'


const Counter = () => {
  const [count,setCount] = useState(0)
  //console.log(useState(10))
  // 可以使用多次
  // const [title,setTitle] = useState('abc')
  //console.log(title)

  useEffect(() => {
    console.log('渲染了')
    document.title=`当前的数量为${count}`
  })

  return(
    <div>
      <p>当前的数量为{count}</p>
      <button onClick={() => {setCount(count - 1)}}>-</button>
      <span>{count}</span>
      <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}
 






//console.log(createContext())
const{
  Provider,
  Consumer:CounterConsumer
} = createContext()



class CounterProvider extends Component{
  constructor(){
    super()
    this.state={
      count: 100
    }
  }
  incrementCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  decrementCount = ()=>{
    this.setState({
      count: this.state.count -1
    })
  }
  render(){
    return(
      <Provider value={{
        count: this.state.count, 
        //这两个括号意义不同，可以简单的理解为：
        //外面的花括号是说：我这里面写的是js语句
        //内部的花括号是说：我里面的不是要显示的文字，而是变量，我要把变量的值解析放在这
        onincrementCount:this.incrementCount,
        ondecrementCount:this.decrementCount
      }}  >
        {this.props.children}
      </Provider>
    )
  }
}

class Count1 extends Component{
  render(){
    return(
      <CounterConsumer>
        {
          ({count})=>{
            return <span>{count}</span>
          }
        }
      </CounterConsumer>
  )}
}

class CountBtn extends Component{
  render() {
    return <CounterConsumer>
      {
        ({onincrementCount, ondecrementCount})=>{
          const handler = this.props.type === 'increment' ? onincrementCount : ondecrementCount
          return <button onClick={handler}>{this.props.children}</button>
        }
      }
    </CounterConsumer>
  }
}

class App extends Component{
  render () {
    return(
    <>
    <Counter />
    <br></br>
    <CountBtn type="decrement">-</CountBtn>
    <Count1 />
    <CountBtn type="increment">+</CountBtn>
    </>
    )}
}






render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.querySelector('#root')
)