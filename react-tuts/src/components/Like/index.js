import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state = {
            isliked: false
        }
    }
    handleLikedClick = () =>{
        //使用这种方式在react里是不允许的，可以修改数据，但界面不会重新渲染
        //this.state.isLiked = !this.state.isLiked
        //要修改数据，就要使用setState方法，setState方法有两种情况
        //第一个参数又有两种情况，第一种情况是一个对象
        // this.setState({
        //     isliked: !this.state.isliked
        // })
        //第二种情况是一个方法
        this.setState((prevState,props)=>{
            console.log('setState内部的状态',this.state.isliked)
            return{
                isliked: !prevState.isliked
            }
        },() =>{
            //由于setState是异步的，如果要获取到最新的state，应该在这个回调里获取
            console.log(this.state.isliked)
        })
        console.log('setState外部的状态',this.state.isliked)
    }

    render() {
        return (
            <div>
                <span onClick={this.handleLikedClick}>
                {
                    this.state.isliked ? '取消❤️' : '喜欢🖤'
                }
                </span>
            </div>
        )
    }
}
