import React, { Component } from 'react'

import {Back} from '../../components'
export default class ArticleDetail extends Component {
    
    
    
    render() {
        return (
            <div>
                文章详情{this.props.match.params.id}
                <Back />
            </div>
        )
    }
}
