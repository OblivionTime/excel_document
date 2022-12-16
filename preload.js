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
function getDescribe(filePath) {
   try {
      var data = fs.readFileSync(filePath, "binary")
      const buffer = new Buffer.from(data, 'binary');
      var str = buffer.toString()
      var re = "<h3 id='函数功能'><span>函数功能</span></h3>(.*)<h3 id='函数语法'>"
      var re2 = new RegExp('<span>|<p>|</span>|</p>', 'g');
      return str.match(re)[1].replace(re2, '').replace(" ", "")
   } catch (error) {
      console.log(filePath);
   }

}
files.forEach(function (file) {
   let filename = file.substring(0, file.lastIndexOf(".html"))
   res.push({ t: filename, d: getDescribe(path.join(__dirname, "word", file)), p: "word/" + file })
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