import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

import {connect} from 'react-redux'
import './login.less'
import {login} from '../../actions/user'
import {Redirect} from 'react-router-dom'
const mapState=state=>({
  isLogin:state.user.isLogin,
  isLoading:state.user.isLoading
})

@connect(mapState,{login})
@withRouter
class Login extends Component {

    onFinish = values => {
        // console.log('Received values of form: ', values)
      this.props.login(values)
    }

    render() {
        return (
          this.props.isLogin
          ?
          <Redirect to='/admin'/>
          :
          <Card
            title="uricorn系统登录"
            className="uricorn-login-wrapper">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名！' }]}
              >
                <Input 
                  disabled={this.props.isLoading}
                  prefix={<UserOutlined className="site-form-item-icon" />} 
                  placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input
                  disabled={this.props.isLoading}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox disabled={this.props.isLoading}>记住我</Checkbox>
                </Form.Item>
                  Forgot password
              </Form.Item>
        
              <Form.Item>
                <Button loading={this.props.isLoading} type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                Or register now!
              </Form.Item>
            </Form>
          </Card>
          )
    }
}
export default Login