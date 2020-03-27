import React, { Component } from 'react'
const noop = ()=> {}

export default class TodoItem extends Component {
   handelCheckboxChange = () =>{
       const {
           onCompletedChange = noop,
           id
       } = this.props
       onCompletedChange(id)
   }
   
    render() {
        const {
            isCompleted,
            title
        } = this.props
        //下面的this.props.isCompleted可以改成isCompleted
       return (
           <li>
              <input 
                type="checkbox" 
                checked={isCompleted}
                onChange={this.handelCheckboxChange}
                />
              <span>{title}{this.props.isCompleted ? '完成' : '未完成'}</span> 
           </li>
       )
   }
}
