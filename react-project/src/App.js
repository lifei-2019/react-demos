import React, { Component } from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import { adminRoutes } from './routes'
import {Frame} from './components'

import{connect} from 'react-redux'

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


const mapSate=state=>({
    isLogin:state.user.isLogin,
    role:state.user.role
})
@connect(mapSate)
class App extends Component {
    render() {
        return (
            this.props.isLogin
            ?
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
                                // console.log(route.roles)
                                // console.log(this.props.role)
                                // console.log(route.roles.includes(this.props.role))
                                const hasPermission =route.roles.includes(this.props.role)
                                return hasPermission?<route.component {...routerProps} />:<Redirect to="/admin/noauth" />
                            }}
                            />
                          )
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from='/admin' exact />
                    <Redirect to="/404" />
               </Switch>
            </Frame>
            :
            <Redirect to="/login" />
        )
    }
}

export default App