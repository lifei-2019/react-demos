import React, { Component, Fragment } from 'react'
import{
    TodoHeader,
    TodoInput,
    TodoList
} from './components'


export default class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoHeader desc="今日事，今日了" x={1} y={2}>
                    <i>待办事项列表</i>
                </TodoHeader>
                <TodoInput btnText="ADD" />
                <TodoList />
            </Fragment>
        //     <>
        //     <TodoHeader />
        //     <TodoInput />
        //     <TodoList />
        // </>
        //两种方法都可以
        )
    }
}
