/*
1 面试题：'i',1,20,3,'a',5  显示结果：1 3 5 20 a i

2 返回顶部的js

3 表格中的奇数行的奇数列的和

1   3    5    6   7

2   4    8    10  3

3   9    10   19  18

*/

// console.log(typeof a==='number');
// console.log('a'<'A');
function main_a(arr) {
    var num=[];
    var str=[];
    var outstr='';
    var l =arr.length;
    for(var i =0;i<l;i++){
        if(arr[i]&&(typeof arr[i]==="number")){
            num.push(arr[i])
        }else if(arr[i]&&(typeof arr[i]==="string")){
            str.push(arr[i]);
        }
    }
    sort(num);
    sort(str);
    out(num);
    out(str);
    console.log(outstr);
    // 开始输出
    function out(arr) {
        var l = arr.length;
        for(var i=0;i<l;i++){
           // console.log(arr[i]+" ");
            outstr+=arr[i]+" ";
        }
    }
    // 开始排序
    function sort(arr){
        var l = arr.length;
        for(var i=0;i<l-1;i++){
            for(var j=0;j<l-i-1;j++){
                if(arr[j]>arr[j+1]){
                    var temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    }
}

main_a(['i',1,20,3,'a',5]);



function go_top(ele) {
    // ele为传入的dom元素
    ele.addEventListener('click',function (e) {
        console.log(window.pageYOffset);
        // window.pageYOffset=0;
        // window.scrollTo(0,0);
        // 这个有兼容性功能
        document.documentElement.scrollTop=document.body.scrollTop=0;
        console.log(window.pageYOffset);
    })
}

// 表格中奇数行，奇数列
// 可以使用二维数组

function oddsum(ele) {
    var sum=0;
    var rows = ele.rows;
    var cols = rows[0].cells;
    for(var i =0;i<rows;i+=2);
    for(var j=0;j<cols;j+=2){
        sum+=parseInt(row[i].cells[j].innerHTML,10);
    }
}



//
// var strin ="'i',1,20,3,'a',5，a,v,c";
// var num = /\d+/g;
// var nums = strin.match(num);
// nums = nums.sort(function (a,b) {
//     return a-b;
// });
// console.log(nums);
// var str = /[a-z]+/g;
// var strs = strin.match(str);
// // 字符串为什么不用重写方法
// strs = strs.sort();
// console.log(strs);
// console.log(nums.concat(strs));






