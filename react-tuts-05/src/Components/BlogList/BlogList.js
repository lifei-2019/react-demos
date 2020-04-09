import React, { Component } from 'react'
import {connect} from 'react-redux'
import BlogItem from './BlogItem'
import { fetchBlogList } from  '../../actions/blog'


//实际上这是一个容器组件
class BlogList extends Component {
    componentDidMount(){
        this.props.fetchBlogList()
    }
    
    
    
    
    //这里还需要对传入的数据做检测prop-types
    render() {

        const {
            list,
            isLoading,
            errMsg
        }=this.props
       
        const hasErr = Boolean(errMsg)

        return (
            isLoading
            ?
            <div>loading...</div>
            :
            (
                hasErr
                    ?
                    <div>{errMsg}</div>
                    :
                    <ul>
                        {
                            list.map(bl => {
                                return (
                                    <BlogItem key={bl.id} {...bl} />
                                )
                            })
                        }
                    </ul>
            )        
        )
    }
}

const mapState = state => ({
    //这个blog是reducers里导出来的
    list:state.blog.list,
    isLoading: state.blog.isLoading,
    errMsg: state.blog.errMsg
})


export default connect(mapState,{ fetchBlogList })(BlogList)