//在实际的项目中，由于只有单一的store，但是状态会有很多分类，所以我们需要划分reducer，
//但是createStore的参数只接收一个reducer，所以，redux比较聪明的提供了一个用于合并多个reducer的方法。
import{ combineReducers } from 'redux'

//引入cart reducer，如果有多个继续引入
import cart from './cart'


//导出合并后的reducer
export default combineReducers({
    //把多个reducer作为combineReducers对象参数传入，
    //在外部就可以通过store.getState().cart来获取cartReducer里面的state
    cart
})