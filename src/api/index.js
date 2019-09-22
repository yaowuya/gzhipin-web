/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import http from './http'

// 注册接口
export const reqRegister = (user) => http.post("/register", user)

// 登陆接口
export const reqLogin = ({username, password}) => {
    return http.post("/login", {username, password})
}
