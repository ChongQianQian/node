/*
 * @Author: 云乐
 * @Date: 2021-03-03 16:55:48
 * @LastEditTime: 2021-03-03 17:07:14
 * @LastEditors: 云乐
 * @Description: 获取实际接口数据
 * :读取远程数据，启动服务器，在服务器中显示出来；
 * :解决了跨域问题，学习http中的get请求
 */
const logger = require("../utils/index");
const http = require("http");
const https = require("https");

const server = http.createServer((request, response) => {
  https.get("https://m.xiaomiyoupin.com/mtop/market/cat/detail", (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    
    res.on("end", () => {
      logger.debug(data)
      response.write(data);
      response.end();
    });
  });
});

server.listen(8021, () => {
  console.log("http://localhost:8021");
});
