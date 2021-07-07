/*
 * @Author: 云乐
 * @Date: 2021-03-03 14:29:19
 * @LastEditTime: 2021-03-04 09:35:43
 * @LastEditors: 云乐
 * @Description: node内置模块：http
 */
const logger = require("../utils/index");
const http = require("http");

const server = http.createServer((req, res) => {
  //获取url中路径
  // let url = req.url // 例如：http://127.0.0.1:8999/home
  // res.write(`"url":"${url}"`); //"url": "/home"

  //获取post请求中的query值
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  
  req.on("end", () => {
    logger.debug(data)

    res.writeHead(200, {
      "content-type": "application/json;charset=utf-8", //'text/plain' 'text/html' 'application/json;charset=utf-8'
    });
    
    res.write(data);
    res.end();
  });
});

// 启动服务器
server.listen(8999, () => {
  console.log("服务器已启动");
});
