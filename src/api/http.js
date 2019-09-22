import axios from "axios"
import {Toast} from "antd-mobile"
const http=axios.create({
    baseURL:"/api",//在package.json文件中使用proxy做代理，解决跨域问题
    timeout: 60000
})

http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

http.interceptors.response.use(res => {
    return res
}, err => {
    console.log("error:", err);
    if (err.response.data.message) {
        Toast.fail(err.response.data.message,5 )

        if (err.response.status === 401) {
            this.props.history.push("/login")
        }
    }

    return Promise.reject(err)
})

export default http
