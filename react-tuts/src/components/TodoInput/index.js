import React, { Component } from 'react'

//类组件前面要加this.props 函数用props
export default class TodoInput extends Component {
    render() {
        return (
            <div>
                <input type="text"/><button>{this.props.btnText}</button> 
            </div>
        )
    }
}
