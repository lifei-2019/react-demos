import React, {useState, useEffect } from 'react'

export default function Counter() {
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