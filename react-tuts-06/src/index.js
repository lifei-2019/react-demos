import React from 'react'
import {render} from 'react-dom'

//hashRouter会在地址栏多一个#
import {BrowserRouter as Router,Route} from 'react-router-dom'
import App from './App'


render(
    <Router>
        <Route component={App} path="/" />
    </Router>,
    document.querySelector('#root')
)