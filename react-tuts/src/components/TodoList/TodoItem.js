import React, { Component } from 'react'
const noop = ()=> {}

export default class TodoItem extends Component {
    
    //老版本是这样
    // constructor(props){
    //     this.state =({
    //         completedText: props.completed ? 'wancheng' : 'weiwancheng'
    //     })
    // }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     this.setState({
    //         completedText: nextProps.completed?'wancheng' : 'weiwancheng'
    //     })
    // }

    //新版本
    constructor(){
        super()
        this.state = {
            completedText: ''
        }
    }
    
    static getDerivedStateFromProps(props){
        return{
            completedText: props.completed ? 'wancheng':'weiwancheng'
        }
    }
   
    handelCheckboxChange = () =>{
       const {
           onCompletedChange = noop,
           id
       } = this.props
       onCompletedChange(id)
   }
   
   shouldComponentUpdate(nextProps,nextState){
       return (nextProps.completed !== this.props.completed)||(nextProps.xxx !== this.props.xxx)
   }

    render() {
        console.log(`TodoItem ${this.props.title} render`)
        const {
            completed,
            title
        } = this.props
        //下面的this.props.completed可以改成completed
       return (
           <li>
              <input 
                type="checkbox" 
                checked={completed}
                onChange={this.handelCheckboxChange}
                />
              <span>{title}{this.props.completed ? '完成' : '未完成'}</span> 
           </li>
       )
   }
}
