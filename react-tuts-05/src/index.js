import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

//Provider是react-redux提供的一个组件
import store from './store'
import App from './App'


// window.store = store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)