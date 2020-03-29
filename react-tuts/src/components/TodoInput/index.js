//react里面通过ref来获取组件或者dom元素，要使用ref之前必须先调用React.createRef创建一个ref
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'


//类组件前面要加this.props 函数用props
export default class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }
    static defaultProps = {
        btnText: '添加TODO'
    }
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
        //this.handelAddClickCopy = this.handelAddClick.bind(this,124)

        //在constructor里来创建Ref
        this.inputDom = createRef()
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    handleKeyUp = (e) =>{
        if(e.keyCode ===13){
            this.handelAddClick()
        }
    }
    handelAddClick = () => {
        //console.log(this.state)
        //实际的项目中，这里还需要区队this.state.inputValue做验证，如果验证通过在执行
        if(this.state.inputValue === ''){
            return
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        },
        () => {
            this.inputDom.current.focus()
        })
    }
    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                onKeyUp={this.handleKeyUp}
                ref={this.inputDom}
                />

                <button onClick={this.handelAddClick}>{this.props.btnText}</button> 
            </div>
        )
    }
}