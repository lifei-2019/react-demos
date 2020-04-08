import React, { Component } from 'react'

import BlogItem from './BlogItem'

export default class BlogList extends Component {
    //这里还需要对传入的数据做检测prop-types
    render() {
        return (
            <ul>
                <BlogItem />
            </ul>
        )
    }
}
