import React, { PureComponent } from 'react'
const noop = ()=> {}

export default class TodoItem extends PureComponent {
    
    //老版本是这样
    // constructor(props){
    //     this.state =({
    //         completedText: props.isCompleted ? 'wancheng' : 'weiwancheng'
    //     })
    // }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     this.setState({
    //         completedText: nextProps.isCompleted?'wancheng' : 'weiwancheng'
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
            completedText: props.isCompleted ? 'wancheng':'weiwancheng'
        }
    }
   
    handelCheckboxChange = () =>{
       const {
           onCompletedChange = noop,
           id
       } = this.props
       onCompletedChange(id)
   }
   
//    shouldComponentUpdate(nextProps,nextState){
//        return (nextProps.isCompleted !== this.props.isCompleted)||(nextProps.xxx != this.props.xxx)
//    }

    render() {
        console.log(`TodoItem ${this.props.title} render`)
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
