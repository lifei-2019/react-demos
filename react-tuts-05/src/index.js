import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

//Provider是react-redux提供的一个组件
import store from './store'
import App from './App'


// window.store = store
render(
  //一般直接把这个组件放在应用程序的最顶层，这个组件必须有一个store属性，这个store属性的值就是创建的store。
  //只要在最外层包裹了这个Provider，那么所有后代组件都可以使用Redux.connect作连接。
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)