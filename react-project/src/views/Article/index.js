import React, { Component } from 'react'
import moment from 'moment'
import {Card, Button,Table,Tag} from 'antd'

import { getArticles } from '../../requests'

window.moment=moment

const titleDisplayMap = {
  id:'id',
  title: '标题',
  author: '作者',
  createAt: '创作时间',
  amount: '阅读量'
}

export default class ArticleList extends Component {
   constructor() {
     super()
     this.state = {
      dataSource: [
      ],
      columns: [
      ],
      total: 0
     }
   } 
  

    createColumns =(columnKeys)=>{
      return columnKeys.map(item => {
        if(item === 'amount'){
          return {
            title:titleDisplayMap[item],
            key:item,
            render: (text,record)=>{
              // console.log(record)
              const {amount} =record
              //这里是根据一个数字的大小做一个条件渲染
              //同理，可以做发货状态、职位级别不同的颜色
              //总经理：'001'，经理：'002'，主管'003'
              // const titleMap={
              //   '001': 'red',
              //   '002': '#09f',
              //   '003':'green'
              // }
              // return<Tag color={titleMap{titleKey}}>{record.titleKey}</Tag>

              return <Tag color={amount>200 ? 'red' : 'green'} >{record.amount}</Tag>
            }
          }
        }


        if(item === 'createAt'){
          return {
            title:titleDisplayMap[item],
            key:item,
            render: (text,record)=>{
              // console.log(record)
              const {createAt} =record

              return moment(createAt).format('YYYY年MM月DD日 HH:mm:ss秒')
            }
          }
        }
        return {
          title:titleDisplayMap[item],
          dataIndex: item,
          key:item
        }
      })
    }

    getData =() =>{
      getArticles()
        .then(resp => {
          const columnKeys = Object.keys(resp[0].list[0])
          const columns=this.createColumns(columnKeys)
          // console.log(columns)
          this.setState({
            total: resp[0].total,
            dataSource: resp[0].list,
            columns
          })
        })
    }

    componentDidMount(){
      this.getData()
    }
  
  
    render() {
        return (
            <Card 
                title="文章列表"
                bordered={false}
                extra={<Button>导出excel</Button>}  >
            <Table
                rowKey={record=>record.id} 
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
