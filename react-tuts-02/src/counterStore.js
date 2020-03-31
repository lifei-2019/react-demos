import React,{Component,createContext} from 'react'

//console.log(createContext())
const{
    Provider,
    Consumer: CounterConsumer  //结构出来重新赋值给一个CounterConsumer的组件
  } = createContext()
  
  
//封装一个基本的Provider，因为直接使用Provider不方便管理状态
class CounterProvider extends Component{
    constructor(){
      super()
      //这里的状态就是共享的，任何CounterProvider的后代组件，都可以通过CounterProvider来接受这个值
      this.state={
        count: 100
      }
    }
  
    //这里的方法也会继续通过Provider共享下去
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
        //使用Provider这个组件，它必须要有一个value，value里可以传递任何的数据，一般还是传递一个比较合理。
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


  export {
      CounterProvider,
      CounterConsumer
  }