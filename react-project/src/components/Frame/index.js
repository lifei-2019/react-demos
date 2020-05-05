import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Avatar,Badge } from 'antd'
import { createFromIconfontCN,DownOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import './frame.less'
import logo from './logo.png'
import {getNotificationList} from '../../actions/notifications'

import {logout} from '../../actions/user'

// const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1760641_a9h0d4e6ket.js',
})


const mapState = state =>{
  return{
    notificationsCount:state.notifications.list.filter(item=>item.hasRead === false).length,
    avatar:state.user.avatar,
    displayName: state.user.displayName
  }
}


@connect(mapState,{getNotificationList, logout})
@withRouter
class Frame extends Component {
    componentDidMount(){
      this.props.getNotificationList()
    }

    onMenuClick =({key})=>{
      this.props.history.push(key)
    }

    onDropdownMenuClick=({key})=>{
      // console.log({key})
      if(key === '/login'){
        this.props.logout()
      }else{
        this.props.history.push(key)
      }
      
    }

    renderDropdown = ()=> (
      <Menu onClick={this.onDropdownMenuClick}>
        <Menu.Item
          key="/admin/notifications"
        >
            <Badge dot={Boolean(this.props.notificationsCount)}>
            通知中心
            </Badge>
        </Menu.Item>
        <Menu.Item
          key="/admin/settings"
        >
            个人设置
        </Menu.Item>
        <Menu.Item
          key="/login"
        >
            退出登录
        </Menu.Item>
      </Menu>
    )

    

    render() {
        const selectedKeyArr = this.props.location.pathname.split('/')
        selectedKeyArr.length=3
        // console.log(selectedKeyArr)
        return (
            <Layout style={{minHeight:'100%'}}>
            <Header className="header unicorn-header" >
              <div className="unicorn-logo" >
                <img src={logo} alt="独角兽" />
              </div>
              <div >
              <Dropdown overlay={this.renderDropdown()}>
                <div style={{display:'flex',alignItems: 'center'}}>
                  <Avatar src={this.props.avatar} />
                  <span>欢迎您！{this.props.displayName}</span>
                  <Badge count={this.props.notificationsCount} offset={[-10,-10]}>
                    <DownOutlined />
                  </Badge>
                </div>
              </Dropdown>
              </div>
            </Header>
            
            <Layout>
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  selectedKeys={[selectedKeyArr.join('/')]}
                  onClick={this.onMenuClick}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  {
                    this.props.menus.map(item => {
                      return (
                        <Menu.Item key={item.pathname} title={item.title} >
                          <IconFont type={item.icon} />
                          {item.title}
                        </Menu.Item>
                    )
                  })
                  }
                </Menu>
              </Sider>
              
              <Layout style={{ padding: '16px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb> */}
                <Content
                  className="site-layout-background"
                  style={{
                    background: '#fff',
                    margin: 0,
                  }}
                >
                  {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}


export default Frame