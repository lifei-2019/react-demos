//创建store，createStore是redux提供的一个用于创建store的方法；

import { createStore} from 'redux'
//引入合并后的reducer；
import rootReducer from './reducers'

//createStore的第一个参数必须输一个reducer，如果是多个，要在reducers目录下先试用combineReudcer进行合并之后再导出。
export default createStore(rootReducer)