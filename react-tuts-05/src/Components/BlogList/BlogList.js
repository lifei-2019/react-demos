import React, { Component } from 'react'
import {connect} from 'react-redux'
import BlogItem from './BlogItem'

class BlogList extends Component {
    //这里还需要对传入的数据做检测prop-types
    render() {

        const {
            list,
            isLoading
        }=this.props
       
        
        return (
            isLoading
            ?
            <div>loading...</div>
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
    }
}

const mapState = state => ({
    //这个blog是reducers里导出来的
    list:state.blog.list,
    isLoading: state.blog.isLoading
})


export default connect(mapState)(BlogList)