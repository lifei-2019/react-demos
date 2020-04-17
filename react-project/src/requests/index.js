import axios from 'axios'
import {message} from 'antd'

const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
    baseURL:isDev ? 'http://rap2.taobao.org:38080/app/mock/251220':''
})

service.interceptors.request.use((config)=>{
    // console.log(config)

    config.data=Object.assign({},config.data,{
        // authToken:window.localStorage.getItem('authToken')
        authToken:'asdqweqsadsa'
    })
    return config
})


service.interceptors.response.use((resp)=>{
    console.log(resp)
    if(resp.data.code === 200){
        return resp.data.data
    }else{
        //全局处理错误
        message.error(resp.data.errMsg)
    }
})
export const getArticles =( offset = 0,limited=10)=>{
    return service.post('/api/v1/articleList',{
        offset,
        limited
    })
}