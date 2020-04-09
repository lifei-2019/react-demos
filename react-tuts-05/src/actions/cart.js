import actionType from './actionTypes'

//action有两种写法
//第一种写成一个对象，是一个标准的action，但是传递不了参数
// export const increment = {
//         type: actionType.CART_AMOUNT_INCREMENT,
//         payload:{
//             id
//         }

// }

//实际情况常用是使用actionCreator，它是一个方法返回一个对象，这个对象才是真正的action。
export const increment = (id) => {
    return{
        type: actionType.CART_AMOUNT_INCREMENT,
        payload:{
            id
        }
    }

}

export const decrement = (id) => {
    return{
        type: actionType.CART_AMOUNT_DECREMENT,
        payload:{
            id
        }
    }

}


//异步action，使用redux-thunk之后，就可以在actionCreator里return一个方法，这个方法的参数是dispatch
export const decrementAsync =id =>dispatch =>{
        setTimeout(()=>{
            dispatch(decrement(id))
        },2000)
}