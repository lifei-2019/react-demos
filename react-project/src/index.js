import React from 'react'
import { render } from 'react-dom'
import{ HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import './index.less'
import {ConfigProvider} from 'antd'

import {mainRoutes} from './routes'

import App from './App'

import store from './store'
import {Provider} from 'react-redux'

render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Router>
                <Switch>
                    <Route  path="/admin" render={(routerProps)=>{
                        //TODO: 权限，需要登录才能访问/admin
                        return <App {...routerProps} />
                    }} />
                    {
                        mainRoutes.map(route =>{
                            return <Route key={route.pathname} path={route.pathname} render={(routerProps)=>{
                                return <route.component  {...routerProps} />
                            }} />
                        })
                    }
                    <Redirect to="/admin" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ConfigProvider>
    </Provider>,
    document.querySelector('#root')
)