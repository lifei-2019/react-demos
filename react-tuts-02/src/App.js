import React, { Component } from 'react'
import{
    CountBtn,
    Count1,
    Counter
  } from './components'

export default class App extends Component{
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

