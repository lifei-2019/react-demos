import React, { Component } from 'react'
import { Layout, Menu,  } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'


import './frame.less'
import logo from './logo.png'
// const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1760641_a9h0d4e6ket.js',
});

@withRouter
class Frame extends Component {
    onMenuClick =({key})=>{
      this.props.history.push(key)
    }


    

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