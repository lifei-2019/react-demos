import React, { Component } from 'react'
import moment from 'moment'
import {Card, Button,Table,Tag, Modal, Typography, message, Tooltip} from 'antd'
import XLSX from 'xlsx'
import { getArticles, deleteArticleById } from '../../requests'
import { withRouter } from 'react-router-dom'

const ButtonGroup = Button.Group

const titleDisplayMap = {
  id:'id',
  title: '标题',
  author: '作者',
  createAt: '创作时间',
  amount: '阅读量'
}
@withRouter
class ArticleList extends Component {
   constructor() {
     super()
     this.state = {
      dataSource: [
      ],
      columns: [
      ],
      total: 0,
      isLoading: false,
      offset:0,
      limited:10,
      deleteArticleTitle:'',
      isShowArticleModal: false,
      deleteArticleConfirmLoading: false,
      deleteArticleID:null
     }
   } 
  

    createColumns =(columnKeys)=>{
      const columns= columnKeys.map(item => {
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

              return (
                <Tooltip title={amount>200 ? '超过200' : '没超过200'}>
                  <Tag color={amount>200 ? 'red' : 'green'} >{record.amount}</Tag>
                </Tooltip>
              )
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
      columns.push({
        title: '操作',
        key: 'action',
        render:(record)=>{
          return (
            <ButtonGroup>
              <Button size="small" type="primary" onClick={this.toEdit.bind(this,record.id)}>编辑</Button>
              <Button size="small" danger onClick={this.showDeleteArticleModal.bind(this,record)}>删除</Button>
            </ButtonGroup>
          )
        }
      })
      return columns
    }

    getData =() =>{
      this.setState({
        isLoading:true
      })
      
      getArticles(this.state.offset,this.state.limited)
        .then(resp => {
          const columnKeys = Object.keys(resp[0].list[0])
          const columns=this.createColumns(columnKeys)
          // console.log(columns)
          this.setState({
            total: resp[0].total,
            dataSource: resp[0].list,
            columns,
          })
        })
        .catch(err =>{

        })
        .finally(()=>{
          this.setState({
            isLoading:false
          })
        })
    }



    onPageChange=(page,pageSize)=>{
      // console.log(page,pageSize)
      this.setState({
        offset:pageSize*(page-1),
        limited:pageSize
      },()=>{
        this.getData()
      })
    }



    onShowSizeChange = (current,size) =>{
      // console.log(current,size)
      //这里必须仔细问清楚需求，究竟是回到第一页还是留在当前页面
      this.setState({
        offset:0,
        limited:size
      },()=>{
        this.getData()
      })
    }



    toExcel=()=>{
      //在实际的项目中，实际上这个功能是前端发送一个ajax请求到后端，然后后端返回一个文件下载的地址
      //组合数据
      const data = [Object.keys(this.state.dataSource[0])] //[['id','title','author','amount','createAt']]
      for (let i=0;i<this.state.dataSource.length;i++){
        data.push([
          this.state.dataSource[i].id,
          this.state.dataSource[i].title,
          this.state.dataSource[i].author,
          this.state.dataSource[i].amount,
          moment(this.state.dataSource[i].createAt).format('YYYY年MM月DD日 HH:mm:ss秒')
        ])
      }
      // console.log(data)
      
      /* convert state to workbook */
		  const ws = XLSX.utils.aoa_to_sheet(data);
		  const wb = XLSX.utils.book_new();
		  XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
		  /* generate XLSX file and send to client */
		  XLSX.writeFile(wb, `articles-${this.state.offset/this.state.limited+1}-${moment().format('YYYYMMDDHHmmss')}.xlsx`)
    }

    showDeleteArticleModal= (record,id)=>{
      //使用函数的方式调用，定制化没那么强
      // Modal.confirm({
      //   title: `此操作不可逆,请谨慎！！！！`,
      //   content: <Typography>确定要删除<span style={{color: '#f00'}}>{record.id}</span>吗</Typography>,
      //   okText: '别墨迹，快删除',
      //   cancelText: '残忍退出',
      //   onOk(){
      //     deleteArticle(id)
      //       .then(resp=>{
      //         console.log(resp)
      //       })
      //   }
      // })
      console.log(record.title)
      this.setState({
        isShowArticleModal: true,
        deleteArticleTitle: record.title,
        deleteArticleID: record.id
      })
    }


    hideDeleteModal=()=>{
      this.setState({
        isShowArticleModal:false,
        deleteArticle:'',
        deleteArticleConfirmLoading:false
      })
    }


    deleteArticle=()=>{
      this.setState({
        deleteArticleConfirmLoading: true
      })
      deleteArticleById(this.state.deleteArticleID)
        .then(resp =>{
          message.success(resp.msg)
          //这里有坑，就形式留在当前页还是到第一页？
          //如果是到第一页
          this.setState({
            offset:0
          },()=>{
            this.getData()
          })
        })
        .finally(()=>{
          this.setState({
            deleteArticleConfirmLoading: false,
            isShowArticleModal:false
          })
        }

        )
    }


    toEdit=(id) => {
      // console.log(this.props)
      this.props.history.push(`/admin/article/edit/${id}`)
    }

    componentDidMount(){
      this.getData()
    }
  
  
    render() {
        return (
            <Card 
                title="文章列表"
                bordered={false}
                extra={<Button onClick={this.toExcel}>导出excel</Button>}  >
            <Table
                rowKey={record=>record.id} 
                dataSource={this.state.dataSource} 
                columns={this.state.columns} 
                loading={this.state.loading}
                pagination={{
                    current: this.state.offset/this.state.limited+1,
                    total: this.state.total,
                    hideOnSinglePage:true,
                    onChange:this.onPageChange,
                    showQuickJumper: true,
                    showSizeChanger:true,
                    onShowSizeChange: this.onShowSizeChange,
                    pageSizeOptions:['10','15','20','30']
                }}
            />
            <Modal
              title='此操作不可逆，请谨慎！！'
              visible={this.state.isShowArticleModal}
              onCancel= {this.hideDeleteModal}
              confirmLoading={this.state.deleteArticleConfirmLoading}
              onOk={this.deleteArticle}
            >
              <Typography>
                确定要删除<span style={{color: '#f00'}}>{this.state.deleteArticleTitle}</span>吗</Typography>,
            </Modal>
            </Card>
        )
    }
}

export default ArticleList