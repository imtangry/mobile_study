var strin ="'i',1,20,3,'a',5，a,v,c";
var num = /\d+/g;
var nums = strin.match(num);
nums = nums.sort(function (a,b) {
    return a-b;
});
console.log(nums);
var str = /[a-z]+/g;
var strs = strin.match(str);
// 字符串为什么不用重写方法
strs = strs.sort();
console.log(strs);
console.log(nums.concat(strs));