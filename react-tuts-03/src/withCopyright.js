import React,{Component} from 'react'

const withCopyright = (YourComponent) => {
    return class withCopyright extends Component {
        render(){
            return(
                <>
                    <YourComponent {...this.props}/>
                    <div>&copy; 2020 &emsp;raphael&nbsp;哈哈哈</div>
                </>
            )
        }
    }
}

export default withCopyright