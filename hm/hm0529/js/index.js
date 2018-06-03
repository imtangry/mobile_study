window.onload = function () {
    var info = document.getElementsByClassName("info")[0],
        info_content = document.getElementsByClassName('info_content')[0],
        startY = 0, nowY = 0, changeY = 0, itemY = 50,
        // 因为定位关系，所以top需要改变,itemY初始值也要改变一下
        max=50,
        min = info.offsetHeight - info_content.offsetHeight-65,
        animateMin = min - 60,
        animateMax = max+60;


    info_content.addEventListener("touchstart", function (e) {
        info_content.style.transition="none";
        startY = e.targetTouches[0].clientY;
    });

    info_content.addEventListener("touchmove", function (e) {
        nowY = e.targetTouches[0].clientY;
        changeY = nowY - startY;


        if ((itemY + changeY) >animateMax) {
            console.log("a");
            itemY = animateMax;
            changeY=0;
            // info_content.style.top = itemY + "px";
            return;
        } else if ((itemY + changeY) < animateMin) {
            console.log("b");
            itemY = animateMin;
            changeY=0;
            // info_content.style.top = itemY + "px";
            return;
        }
console.log(itemY);
        console.log(changeY);

        info_content.style.top = itemY + changeY + "px";
    })
    info_content.addEventListener("touchend", function (e) {
        // 实现回弹
        itemY = itemY + changeY;
        if (itemY>max) {
            console.log("执行a1");
            info_content.style.top = max+"px";
            info_content.style.transition="top .5s"
            itemY = max;
            return;

        } else if (itemY<min){
            console.log("执行b1");
            info_content.style.top = min+"px";
            info_content.style.transition="top .5s"
            itemY = min;
            return;
        }

    })
    // 先实现简单的滑动边界
}