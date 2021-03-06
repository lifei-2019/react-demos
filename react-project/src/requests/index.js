import axios from 'axios'
import {message} from 'antd'

const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
    baseURL:isDev ? 'http://rap2.taobao.org:38080/app/mock/251220':''
})

//这个service1不需要进行拦截
const service1 = axios.create({
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
    // console.log(resp)
    if(resp.data.code === 200){
        return resp.data.data
    }else{
        //全局处理错误
        message.error(resp.data.errMsg)
    }
})

//获取文章列表
export const getArticles =( offset = 0,limited=10)=>{
    return service.post('/api/v1/articleList',{
        offset,
        limited
    })
}


//通过id删除文章
export const deleteArticleById =(id) =>{
    return service.post(`/api/v1/articleDelete/${id}`)
}

//通过id获取文章
export const getArticleById =(id) =>{
    return service.post(`/api/v1/article/${id}`)
}

//保存文章
export const saveArticle =(id,data) =>{
    return service.post(`/api/v1/articleEdit/${id}`,data)
}

//获取文章阅读量
export const getArticleAmount =() =>{
    return service.post(`/api/v1/articleAmount`)
}

//获取通知列表
export const getNotifications =() =>{
    return service.post(`/api/v1/notifications`)
}

//登录
export const loginRequest =(userInfo) =>{
    return service1.post(`/api/v1/login`,userInfo)
}