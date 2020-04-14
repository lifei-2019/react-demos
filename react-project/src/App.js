import React, { Component } from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import { adminRouter } from './routes'
import {Frame} from './components'

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
            <Frame>
                <Switch>
                    {
                        adminRouter.map(route =>{
                          return (
                            <Route 
                            key={route.pathname} 
                            path={route.pathname}
                            exact={route.exact} 
                            render={(routerProps)=>{
                                return <route.component {...routerProps} />
                            }}
                            />
                          )
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                    <Redirect to="/404" />
               </Switch>
            </Frame>
        )
    }
}

export default App