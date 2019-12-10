import React from 'react'

//第一种创建组建的方式
export default function Hello(props){
    //如果在一个组件中return一个null，则表示此组件是空的，什么都不会渲染
    //return null
    console.log(props)
    //props.name = 'zs'
    //组件中的props都是只读的，不能被重新赋值。
    return <div>zheshige hello -- ｛props.name｝</div>
}

//把组件暴露出去
//export default Hello