import React, { Component } from 'react'
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
        this.props.addTodo(this.state.inputValue)
    }
    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                onKeyUp={this.handleKeyUp}
                />

                <button onClick={this.handelAddClick}>{this.props.btnText}</button> 
            </div>
        )
    }
}
