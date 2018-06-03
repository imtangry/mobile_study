window.onload = function () {


    var ccl = document.getElementsByClassName("cc_l")[0],
        ccul = document.getElementsByClassName('ccl_ul')[0],
        startY = 0, nowY = 0, changeY = 0, itemY = 0,
        min = ccl.offsetHeight - ccul.offsetHeight,
        animateMin = min - 60,
        animateMax = 60;
    ccul.addEventListener("touchstart", function (e) {
        ccul.style.transition="none";
        startY = e.targetTouches[0].clientY;
    });
    ccul.addEventListener("touchmove", function (e) {
        nowY = e.targetTouches[0].clientY;
        changeY = nowY - startY;


        if ((itemY + changeY) >animateMax) {
            console.log("a");
            itemY = animateMax;
            changeY=0;
            // ccul.style.top = itemY + "px";
            return;
        } else if ((itemY + changeY) < animateMin) {
            console.log("b");
            itemY = animateMin;
            changeY=0;
            // ccul.style.top = itemY + "px";
            return;
        }
        ccul.style.top = itemY + changeY + "px";
    });
    ccul.addEventListener("touchend", function (e) {
        // 实现回弹
        itemY = itemY + changeY;
        if (itemY>0) {
            // console.log("执行a1");
            ccul.style.top = "0px";
            ccul.style.transition="top .5s"
            itemY = 0;
            return;

        } else if (itemY<min){
            // console.log("执行b1");
            ccul.style.top = min+"px";
            ccul.style.transition="top .5s"
            itemY = min;
            return;
        }

    });
    // var lis_content = document.querySelector("content>c_content>cc_l>.ccl_ul");
    var lis = document.querySelectorAll(".content>.c_content>.cc_l>.ccl_ul>li");

// 可以设置属性，用来实现自动上滑
    for(var i=0;i<lis.length;i++){
        lis[i].idx = i;
    }
    eve.tap(ccul,function (e) {
        // 实现点击改变样式
        console.log(lis);
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("active");
        }
        var li = e.target.parentNode
        li.classList.add("active");

        // 实现点击自动上滑
        var height = li.offsetHeight;
        // console.log(height);
        // console.log(li.idx);
        ccul.style.transition="top .5s"
        // 当li太靠下，则不会向上滑，且将top设为最下
        if(-height*li.idx<min){
            ccul.style.top = min+"px";
            itemY=min;
        }else{
            ccul.style.top = -li.idx*height+"px";
            itemY=-li.idx*height;
        }

    });

}