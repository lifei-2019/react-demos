import React from 'react'
import { render } from 'react-dom'
import{ HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import './index.less'


import {mainRouter} from './routes'

import App from './App'
render(
    <Router>
        <Switch>
            <Route  path="/admin" render={(routerProps)=>{
                //TODO: 权限，需要登录才能访问/admin
                return <App {...routerProps} />
            }} />
            {
                mainRouter.map(route =>{
                    return <Route key={route.pathname} path={route.pathname} render={(routerProps)=>{
                        return <route.component  {...routerProps} />
                    }} />
                })
            }
            <Redirect to="/admin" from="/" exact />
            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.querySelector('#root')
)