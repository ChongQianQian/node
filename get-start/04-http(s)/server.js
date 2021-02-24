/*
 * @Author: 云乐
 * @Date: 2021-02-24 14:04:18
 * @LastEditTime: 2021-02-24 14:22:10
 * @LastEditors: 云乐
 * @Description: 创建服务器:这种http都是node的内置模块
 */
const http = require('http')

const serve = http.createServer((request,response)=>{
    let url = request.url
    response.write(url)//向前端写入内容
    response.end() //结束写入
})
serve.listen(8000,()=>{
    console.log("服务器创建成功，地址是："+"http://localhost:8000")
})