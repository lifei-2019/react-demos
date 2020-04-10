import React, { Component } from 'react'

import{Link, } from 'react-router-dom'

export default class ArticleList extends Component {
    render() {
        return (
            <div>
                <Link to='/article/1?from=article'>文章一</Link>
                <Link to={{
                    pathname: '/article/2',
                    state:{
                        from: 'article'
                    }
                }}>文章二</Link>
                
            </div>
        )
    }
}
