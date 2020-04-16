import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, } from 'antd'
// import { Icon } from '@ant-design/compatible';
import { createFromIconfontCN } from '@ant-design/icons';



import './frame.less'
import logo from './logo.png'
// const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1760641_a9h0d4e6ket.js',
});


export default class Frame extends Component {
    onMenuClick =()=>{

    }


    

    render() {
        return (
            <Layout>
            <Header className="header unicorn-header" >
              <div className="unicorn-logo" >
                <img src={logo} alt="独角兽" />
              </div>
            </Header>
            
            <Layout>
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  onClick={this.onMenuClick}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  {
                    this.props.menus.map(item => {
                      return (
                        <Menu.Item key={item.pathname}>
                          <IconFont type={item.icon} />
                          {/* <Icon type={item.icon}/> */}
                          {item.title}
                        </Menu.Item>
                    )
                  })
                  }
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  className="site-layout-background"
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
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
