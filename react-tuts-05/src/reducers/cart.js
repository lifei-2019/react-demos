import actionType from '../actions/actionType'

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

export default (state = initState, action) => {
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
        default:
            return state
    }
}