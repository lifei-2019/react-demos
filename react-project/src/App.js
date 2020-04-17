import React, { Component } from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import { adminRoutes } from './routes'
import {Frame} from './components'

const menus = adminRoutes.filter(route => route.isNav === true)
//装饰器
// const testHOC = (WrappedComponent) =>{
//     return class HOCComponent extends Component{
//         render() {
//             return(
//                 <>
//                 <WrappedComponent />
//                 <div>这是高阶组件里的信息</div>
//                 </>
//             )
//         }
//     }
// }

// @testHOC


class App extends Component {
    render() {
        return (
            <Frame menus={menus}>
                <Switch>
                    {
                        adminRoutes.map(route =>{
                          return (
                            <Route 
                            key={route.pathname} 
                            path={route.pathname}
                            exact={route.exact} 
                            title={route.title}
                            render={(routerProps)=>{
                                return <route.component {...routerProps} />
                            }}
                            />
                          )
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from='/admin' exact />
                    <Redirect to="/404" />
               </Switch>
            </Frame>
        )
    }
}

export default App