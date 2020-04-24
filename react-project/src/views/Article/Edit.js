import React, { Component, createRef } from 'react'

import {Form, Input, Card, Button, DatePicker} from 'antd'
import E from 'wangeditor'
import './edit.less'

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

const onFinish = values => {
    console.log('Received values of form: ', values);
};

class Edit extends Component {
    constructor(){
        super()
        this.editorRef = createRef()
    }
    formRef = React.createRef();
    
    initEditor=()=>{
        this.editor = new E(this.editorRef.current)
        this.editor.customConfig.onchange= (html)=>{
            console.log(this)
            this.formRef.current.setFieldsValue({
                content:html
            })
        }
        this.editor.create()

    }
    componentDidMount(){
        this.initEditor()
    }

    render() {
        return (
            <Card 
                title="编辑文章"
                bordered={false}
                extra={<Button >取消</Button>}  
                >

                    <Form
                        {...formItemLayout}
                        onFinish={onFinish}
                        initialValues={{}}
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
            </Card>
        )
    }
}

export default Edit