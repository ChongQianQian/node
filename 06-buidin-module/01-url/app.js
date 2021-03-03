/*
 * @Author: 云乐
 * @Date: 2021-03-01 15:07:50
 * @LastEditTime: 2021-03-03 10:21:21
 * @LastEditors: 云乐
 * @Description: 内置模块之-url
 */
var log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const logger = log4js.getLogger("cheese");
logger.level = "debug"; //表示输出debug文件到 cheese.log 中

const url = require("url"); //引入内置的url模块
const urlString = "https://www.baidu.com:443/name?age=18&name=lili#tage3";
console.log(url.parse(urlString)); //解析url
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:443',
//   port: '443',
//   hostname: 'www.baidu.com',
//   hash: '#tage3',
//   search: '?age=18&name=lili',
//   query: 'age=18&name=lili',
//   pathname: '/name',
//   path: '/name?age=18&name=lili',
//   href: 'https://www.baidu.com:443/name?age=18&name=lili#tage3'
// }

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
logger.debug(url.format(parseUrl)); //将输出的结果打印到cheese.log中
// https://www.baidu.com:443/name?age=18&name=lili#tage3
