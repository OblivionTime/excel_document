/*
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-10-24 10:43:30
 * @LastEditors: solid
 * @LastEditTime: 2022-12-15 14:09:07
 */
const fs = require('fs');
const path = require('path');
var res = [], files = fs.readdirSync(path.join(__dirname, "word"));
files.forEach(function (file) {
   let filename = file.substring(0, file.lastIndexOf(".html"))
   res.push({ t: filename, d: filename, p: "word/" + file })
});
window.exports = {
   "excel": { // 注意：键对应的是 plugin.json 中的 features.code
      mode: "doc", // 文档模式
      args: {
         // 索引集合
         indexes: res,
         // 子输入框为空时的占位符，默认为字符串"搜索"
         placeholder: "搜索"
      }
   }
}