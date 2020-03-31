import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'

//定义一个Count1组件
export default class Count1 extends Component{
    render(){
      return(
        //使用CounterConsumer来接受count，
        <CounterConsumer>
          {
            //注意！！！Consumer的children必须是一个方法，这个方法有一个参数，这个参数就是Provider的value
            ({count})=>{
              return <span>{count}</span>
            }
          }
        </CounterConsumer>
    )}
  }