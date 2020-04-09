//为了避免actionType重复，一般会把actionType放在一个文件里统一进行管理，也可以避免写错actionType

import actionType from '../actions/actionTypes'


//对于这个购物车来说，这里有一个初始化的状态
const initState = [{
    id:1,
    title:'Apple',
    price: 8888.86,
    amount: 20
},{
    id:2,
    title:'oppo',
    price: 4455,
    amount: 40
}]

//创建购物车的reducer，reducer的固定写法是两个参数，第一个state并且有初始值，第二个是action
export default (state = initState, action) => {
    //根据不同的action.type，做不同的处理，每次返回一个新的state，返回的类型一样。
    switch(action.type){
        case actionType.CART_AMOUNT_DECREMENT:
            return state.map(item =>{
                if(item.id === action.payload.id){
                item.amount -= 1
                }
            return item
        })
        case actionType.CART_AMOUNT_INCREMENT:
            return state.map(item =>{
                if(item.id === action.payload.id){
                item.amount += 1
                }
            return item
        })
        //一定要有default，当actionType不对的时候，不作任何处理，返回上一次的default。
        default:
            return state
    }
}