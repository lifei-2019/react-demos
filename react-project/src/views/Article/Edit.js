import React, { Component } from 'react'

import {Card, Button} from 'antd'
export default class Edit extends Component {
    render() {
        return (
            <Card 
                title="编辑文章"
                bordered={false}
                extra={<Button >导出excel</Button>}  
                >
            表单区域
            </Card>
        )
    }
}
