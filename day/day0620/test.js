var a = 'test,tttt';
var arr=[];
for(var i of a){
    console.log(i);
    if(i===','){
    }else{
        arr.push(i);
        // arr.push(',');
    }
}
console.log(arr.toString());
var arr2 = [];
for(var i = 0;i<10; i++){
    arr2.push(parseInt(Math.random()*91+10));
}
console.log(arr2)