import React, { Component } from 'react'
//connect方法执行之后是一个高阶组件
import { connect } from 'react-redux'

//导入actionCreators
import {increment, decrement,decrementAsync} from '../../actions/cart'

 class CartList extends Component {
    render() {
        //console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(item =>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick = {this.props.decrementAsync.bind(this,item.id)}>等一会</button>
                                        <button onClick = {this.props.decrement.bind(this,item.id)}>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick = {this.props.increment.bind(this,item.id)}>+</button>
                                    </td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

//这里的state实际上就是store.getState（）的值
const mapState = (state) => {
    //console.log(state)
    //这里return了什么，在组件里就可以通过this.props获取
    return{
        cartList: state.cart
    }
}

// const mapDispatchToProps = dispatch =>{
//     return{
//         add: (id) => dispatch(increment(id)),
//         reduce: (id) => dispatch(decrement(id))
//     }
// }

//函数柯里化
// export default connect(mapState,mapDispatchToProps)(CartList)

//connect方法有四个参数，常用的就是前面两个
//第一个参数是mapStateToProps，作用是从store注入到当前组建的props上
//第二个参数可以使mapDispatchToProps，这个得主要作用是把action生成的方法注入到当前组件的props
//但是第二个参数可以直接传递一个对象，这里的对象就是actionCreators，只要传入了actionCreators，在组件内部通过this.props.actionCreator来调用，这样的话，在调用之后，actionCreator会自动帮你把她内部的action dispatch出去。
export default connect(mapState,{increment, decrement,decrementAsync})(CartList)
