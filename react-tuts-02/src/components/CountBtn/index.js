import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'

export default class CountBtn extends Component{
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