/*
 * @Author: 云乐
 * @Date: 2021-03-03 11:57:17
 * @LastEditTime: 2021-03-03 14:21:52
 * @LastEditors: 云乐
 * @Description: querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。
 */
const logger = require("../utils/index");
const querystring = require("querystring");

const query = "age=18&name=lili&from=北京";
const queryObj = { age: "18", name: "lili", from: "北京" };
const queryEscape = "age%3D18%26name%3Dlili%26from%3D%E5%8C%97%E4%BA%AC";

//将字符串转换为对象
logger.debug(querystring.decode(query)); //函数是 querystring.parse() 的别名。
logger.debug(querystring.parse(query));

//将对象转换为字符串
logger.debug(querystring.encode(queryObj, "/", ":")); //函数是 querystring.stringify() 的别名。
logger.debug(querystring.stringify(queryObj, "/", ":"));

//编码和解码url
logger.debug(querystring.escape(query)); //编码url
logger.debug(querystring.unescape(queryEscape)); //解码url

//特殊情况下
const newQuery = querystring.stringify(queryObj, null, null, {
  encodeURIComponent(string) {
    return querystring.unescape(string);
  },
});
logger.debug(newQuery);
