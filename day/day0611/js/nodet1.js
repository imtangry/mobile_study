// console.log("测试node");

//加载文件模块
var fs = require('fs');
fs.readFile('test',function (err,data) {
if(err){
    console.log("读取错误");
}else {
    console.log(data.toString());
}
})