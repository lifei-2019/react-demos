import React, { Component } from 'react'
import {Card, Button,Table} from 'antd'

import { getArticles } from '../../requests'





export default class ArticleList extends Component {
   constructor() {
     super()
     this.state = {
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (text, record,index)=>{
              // console.log({text,record,index})
              return <Button>编辑</Button>
          }
        },
      ],
      total: 0
     }
   } 
  
  componentDidMount(){
      getArticles()
        .then(resp => {
          console.log(resp)
          this.setState({
            total: resp[0].total
          })
        })
    }
  
  
    render() {
        return (
            <Card 
                title="文章列表"
                bordered={false}
                extra={<Button>导出excel</Button>}  >
            <Table 
                dataSource={this.state.dataSource} 
                columns={this.state.columns} 
                // loading={true}
                pagination={{
                    total: this.state.total,
                    hideOnSinglePage:true
                }}
            />
            </Card>
        )
    }
}
