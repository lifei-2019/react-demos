import React, { Component } from 'react'
import withCopyright from './withCopyright'
import { connect} from 'tls'

@withCopyright
@withRouter

class Another extends Component {
    render() {
        return (
            <div>
                Another {this.props.name}
            </div>
        )
    }
}

export default Another