import React, { Component, createRef } from 'react'
import { withRouter}from 'react-router-dom'
import {Form, Input, Card, Button, DatePicker,Spin,message} from 'antd'
import E from 'wangeditor'
import './edit.less'
import moment from 'moment'
import {getArticleById,saveArticle} from '../../requests'

const formItemLayout ={
    labelCol:{
        span:4
    },
    wrapperCol:{
        span:16
    }
}

const tailFormItemLayout = {
    wrapperCol: {
      offset:4
    }
  };




@withRouter
class Edit extends Component {
    constructor(){
        super()
        this.editorRef = createRef()
        this.state={
            isLoading:false
        }
    }
    formRef = React.createRef();
    
    initEditor=()=>{
        this.editor = new E(this.editorRef.current)
        this.editor.customConfig.onchange= (html)=>{
            
            this.formRef.current.setFieldsValue({
                content:html
            })
        }
        this.editor.create()

    }

    onFinish = (values) => {
        console.log('Received values of form: ', values)
        // console.log(this.formRef)
        const data = Object.assign({},values,{
            createAt: values.createAt.valueOf()
        })
        //在这里可以处理更多的逻辑
        saveArticle(this.props.match.params.id,data)
            .then(resp=>{
                message.success(resp.msg)
                //如果需要跳转
                this.props.history.push('/admin/article')
            })
            .finally()
    }
    
    componentDidMount(){
        this.setState({
            isLoading:false
        })
        this.initEditor()
        
        getArticleById(this.props.match.params.id)
        .then(resp=>{
            const {id,...data} =resp
            data.createAt=moment(resp.createAt)
            this.formRef.current.setFieldsValue(data)
            this.editor.txt.html(data.content)
        })
        .finally(() => {
            this.setState=({
                isLoading: false
            })
        })
    }

    render() {
        
            
            
        
        return (
            <Card 
                title="编辑文章"
                bordered={false}
                extra={<Button onClick={this.props.history.goBack}>取消</Button>}  
                >
                    <Spin spinning={this.state.isLoading}>
                    <Form
                        {...formItemLayout}
                        onFinish={this.onFinish}
                        initialValues={
                            {
                                title: "张三李四王二麻子"
                            }
                        }
                        ref={this.formRef}
                    >
                    <Form.Item
                        name="title"
                        label="标题"
                        rules={[
                            { 
                                required:true,
                                message:'请填写标题'
                            }]}
                    >
                    <Input placeholder="标题" />
                    </Form.Item>
                    <Form.Item
                        name="author"
                        label="作者"
                        rules={[
                            { 
                                required:true,
                                message:'请填写作者'
                            }]}
                    >
                    <Input placeholder="作者" />
                    </Form.Item>
                    <Form.Item
                        name="amount"
                        label="阅读量"
                        rules={[
                            { 
                                required:true,
                                message:'请填写阅读量'
                            }]}
                    >
                    <Input placeholder="0" />
                    </Form.Item>
                    <Form.Item
                        name="createAt"
                        label="编辑时间"
                        rules={[
                            { 
                                required:true,
                                message:'时间是必选的'
                            }]}
                    >
                    <DatePicker showTime placeholder="选择时间" />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="内容"
                        rules={[
                            { 
                                required:true,
                                message:'内容是必写的'
                            }]}
                    >
                    <div className="qf-editor" ref={this.editorRef} />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                        保存
                        </Button>
                    </Form.Item>
                    
                    </Form>
                    </Spin>
            </Card>
        )
    }
}

export default Edit