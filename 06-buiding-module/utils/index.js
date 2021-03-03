/*
 * @Author: 云乐
 * @Date: 2021-03-03 13:50:25
 * @LastEditTime: 2021-03-03 13:55:43
 * @LastEditors: 云乐
 * @Description: 工具类之单独打印控制台文件
 */
var log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const logger = log4js.getLogger("cheese");
logger.level = "debug"; //表示输出debug文件到 cheese.log 中

module.exports = logger
