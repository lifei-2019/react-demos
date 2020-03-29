import React, { Component, Fragment } from 'react'
import{
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

import { getTodos } from './services'

export default class App extends Component {
    // state = {
    //     title: '待办事情'
    // }
    //不知道props还是state就用props
    constructor() {
        super()
        this.state = {
            title: '待办事情',
            desc:'有点多',
            article: '<div>123456 <i>654321</i></div>',
            // todos: [
            // {
            //     id: 1,
            //     title: '看视屏',
            //     assignee: 'Leo',
            //     completed: false
            // },
            // {
            //     id: 2,
            //     title: '实践',
            //     assignee: 'Xiao',
            //     completed: true
            // }]
            todos:[],
            isLoading: true
        }
    }

    getData = () => {
        getTodos()
            .then(resp => {
                //console.log(resp)
                if (resp.status === 200) {
                    this.setState({
                        todos: resp.data
                    })
                    //setTimeout(() => {这里具体操作},5000)
                }else {
                    //处理错误
                }
            })
            .catch(err =>{
                console.log(err)
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    componentDidMount (){
        this.getData()
    }

    addTodo = (todoTitle) => {
        
        //这样写不对，TODOTitle不是一个数组
        // this.setState({
        //     todos: this.state.todos.push({
        //         id: Math.random,
        //         title: todoTitle,
        //         completed: false
        //     })
        // })
        
        
        // 这个代码是对的
        // this.setState({
        //     todos: this.state.todos.concat({
        //         id: Math.random(),
        //         title: todoTitle,
        //         completed: false
        //     })
        // })

        // const newTodos = this.state.todos.slice()
        const newTodos = [...this.state.todos]
        newTodos.push({
            id: Math.random(),
            title: todoTitle,
            completed: false
        })
        this.setState({
            todos: newTodos
        })
        //先post ->
    }



    onCompletedChange = (id) =>{
        this.setState((prevState) =>{
            return{
                todos: prevState.todos.map(tod =>{
                    if(tod.id === id){
                        tod.completed = !tod.completed
                    }
                    return tod
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                {/* {<div dangerouslySetInnerHTML={{__html: this.state.article}} />}
                {this.state.todos[0].completed ? '完成' : '未完成'}
                {
                    this.state.todos.map(todo =>{
                        return <div key={todo.id}>{todo.title}</div>
                    })
                } */}

                <TodoHeader desc={this.state.desc} x={1} y={2}>
                    <i>待办事项列表</i>
                    <br></br>
                    {this.state.title}
                </TodoHeader>

                <TodoInput  
                    addTodo={this.addTodo}
                />

                {
                    this.state.isLoading
                    ?
                    <div>loading..</div>
                    :

                    <TodoList 
                    todos={this.state.todos} 
                    onCompletedChange={this.onCompletedChange}
                    />
                }

                <Like />
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
