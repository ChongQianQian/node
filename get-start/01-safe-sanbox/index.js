const http = require('http')//v14.15.4 在版本13之后 可以使用import

http.get("http://localhost:7005/todolist/list",(res)=>{
    let data = []
    res.on('data',chunk=>{
        data.push(chunk)
    })
    res.on('end',()=>{
        console.log('data: ', data.toString()); //不管有没有关闭跨域 都可以成功请求接口
        // data:  ["第一条数据","第二条数据","第三条数据","第四条数据"]
    })

})
