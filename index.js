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
   res.push({ t: filename, d: getDescribe("word/" + file), p: "word/" + file })
});