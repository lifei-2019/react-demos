import React ,{useState} from 'react'
import { render } from 'react-dom'


const Counter = () => {
  console.log(useState())
  return(
    <div>
      <button>-</button>
      <span>10</span>
      <button>+</button>
    </div>
  )
}
render(
  <Counter />,
  document.querySelector('#root')
)