import React, { Component } from 'react'

import {Card,Upload,Button, Spin} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
import axios from 'axios'

import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeAvatar } from '../../actions/user'

const mapState= state=>{
    return{
        avatarUrl:state.user.avatar
    }
}

@withRouter
@connect(mapState,{changeAvatar})
class Profile extends Component {
    state={
        isUploading:false,
        // avatarUrl: ''
    }

    handleUploadAvatar=({file})=>{
        // console.log(file)
        const data = new FormData()
        data.append('Token',
            'd16fb97357983092ad19b2c511f7fc1b983328a8:9kCZl52omhe4Z7oxUfzJqD8Ors8=:eyJkZWFkbGluZSI6MTU4ODgxOTQ1NCwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzE4MzM5IiwiYWlkIjoiMTY4Njg0NSIsImZyb20iOiJmaWxlIn0=')
        data.append('file',file)
        this.setState({
            isUploading:true
        })
        axios.post('http://up.imgapi.com/',data)
            .then(resp=>{
                console.log(resp)
                if(resp.status===200){
                    this.setState({
                        // avatarUrl:resp.data.linkurl,
                        isUploading:false
                    })
                    this.props.changeAvatar(resp.data.linkurl)
                }else{
                    //自己处理错误
                }
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        return (
            <Card
                title="个人设置"
                bordered={false}>
                   
                    <br />
                    <Upload
                        showUploadList={true}
                        customRequest={this.handleUploadAvatar}
                        style={{border:'1px dashed #dedede',width:80,height:80,display:'block'}}
                    >
                        <Spin
                            spinning={this.state.isUploading}>
                                {
                                    this.props.avatarUrl
                                    ?
                                    <img src={this.props.avatarUrl } alt="头像" style={{width:78,height:78}} />
                                    :
                                    <span>点击上传</span>
                                }
                                <br />
                                <Button>
                                    <UploadOutlined onClick={this.handleUploadAvatar}/> 点击上传
                                </Button>
                            
                        </Spin>
                    </Upload>
            </Card>
        )
    }
}

export default Profile