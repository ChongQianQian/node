/*
 * @Author: 云乐
 * @Date: 2021-02-24 13:50:21
 * @LastEditTime: 2021-02-24 13:54:26
 * @LastEditors: 云乐
 * @Description: 认识node.js-2
 */

const fs = require('fs')
fs.writeFile("log.txt","认识node.js-2认识node.js-2",(err)=>{
 if(err) throw err
 console.log("写入成功")
})