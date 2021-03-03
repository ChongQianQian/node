/*
 * @Author: 云乐
 * @Date: 2021-03-01 15:07:50
 * @LastEditTime: 2021-03-03 13:53:18
 * @LastEditors: 云乐
 * @Description: 内置模块之-url
 * 记住常见的用法：parse、format、resolve、URLSearchParams
 */
const logger  = require("../utils/index")
const url = require("url"); //引入内置的url模块

const urlString = "https://www.baidu.com:443/name?age=18&name=lili#tage3";
logger.debug(url.parse(urlString))
logger.debug(url.resolve(urlString,"../"))

const parseUrl = {
  protocol: "https:",
  slashes: true,
  auth: null,
  host: "www.baidu.com:443",
  port: "443",
  hostname: "www.baidu.com",
  hash: "#tage3",
  search: "?age=18&name=lili",
  query: "age=18&name=lili",
  pathname: "/name",
  path: "/name?age=18&name=lili",
  href: "https://www.baidu.com:443/name?age=18&name=lili#tage3",
};
logger.debug(url.format(parseUrl)); //将url格式化字符串，打印到cheese.log中

const newSearchParams = new URLSearchParams(url.parse(urlString).search);
console.log('newSearchParams: ', newSearchParams.get("age")); //18

