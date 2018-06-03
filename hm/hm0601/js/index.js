window.onload = function () {
    var p1 = document.getElementsByClassName('p1')[0],
        p2 = document.getElementsByClassName('p2')[0];
    p1.addEventListener("transitionend", function (e) {
    });
    setTimeout(function () {
        p1.style.opacity = 0;
    }, 500);
    p1.addEventListener("transitionend", function (e) {
        p1.classList.remove("show");
        p2.classList.add("show");
        p2.style.opacity=1;
         sectionB();
    });


    function sectionB() {
        // 实现拖动的主要变量
        var img_container = document.getElementsByClassName("imgs")[0],
            img_ul = document.getElementsByClassName('i_ul')[0],
            startX = 0, nowX = 0, changeX = 0, itemX = 0,
            max = 0,
            min = img_container.offsetWidth - img_ul.offsetWidth,
            animateMin = min - 60,
            animateMax = 60;
        // 实现自动播放的主要变量
        var width = img_container.offsetWidth,
            index = 0,
            position = 0,
            pointers = document.getElementsByClassName("pointer"),
            pl = pointers.length-1,
            interval;

        // 借用之前的代码，这里公共的位置判断应该全部用一个
        // 这里用translateX吧
        img_ul.addEventListener("touchstart", function (e) {
            img_ul.style.transition = "none";
            clearInterval(interval);
            startX = e.targetTouches[0].clientX;
            console.log(animateMax);
            console.log(animateMin);

        });
        img_ul.addEventListener("touchmove", function (e) {
            nowX = e.targetTouches[0].clientX;
            changeX = nowX - startX;
            console.log(changeX);
            if ((itemX + changeX) > animateMax) {
                console.log("a");
                img_ul.style.transform = "translateX(" + animateMax+ "px)";
                itemX = animateMax;
                changeX = 0;
                // ccul.style.top = itemY + "px";
                return;
            } else if ((itemX + changeX) < animateMin) {
                console.log("b");
                img_ul.style.transform = "translateX(" + animateMin + "px)";
                itemX = animateMin;
                changeX = 0;
                // ccul.style.top = itemY + "px";
                return;
            }
            img_ul.style.transform = "translateX(" + (itemX + changeX) + "px)";
            // img_ul.style.left = itemX + changeX + "px";
        });

        img_ul.addEventListener("touchend", function (e) {
            // 实现回弹
            itemX = itemX + changeX;
            console.log("itemX:"+itemX);
            var distance = itemX/width;
            console.log("distance:"+distance);
            var indexNext = -Math.round(distance);
            console.log("indexNext:"+indexNext);
            index = indexNext;
            if(indexNext==0){
                index = 0;
            }
            if(indexNext>pl){
                index = pl;
            }
            // 使用完itemX之后需要把他重置一下
            itemX=-index*width;
            console.log("index:"+index);
            console.log("itemX:"+itemX);
            img_ul.style.transition = ".5s";
            img_ul.style.transform = "translateX(" + (itemX) + "px)";
            // 修改小点点
            for (var j = 0; j < pl+1; j++) {
                // console.log(pointers);
                // console.log(j);
                // console.log(pointers[0]);
                pointers[j].classList.remove("p_active");
            }
            pointers[index].classList.add("p_active");
            roll();

            // if (itemX > max) {
            //     // console.log("执行a1");
            //     img_ul.style.transition = ".5s";
            //     img_ul.style.transform = "translateX(" + max + "px)";
            //     itemX = max;
            //     return;
            // } else if (itemX < min) {
            //     // console.log("执行b1");
            //     img_ul.style.transition = ".5s";
            //     img_ul.style.transform = "translateX(" + min + "px)";
            //     itemX = min;
            //     return;
            // }

        });
        // var lis_content = document.querySelector("content>c_content>cc_l>.ccl_ul");
        //var lis = document.querySelectorAll(".content>.c_content>.cc_l>.ccl_ul>li");

// 可以设置属性，用来实现自动上滑
//         for(var i=0;i<lis.length;i++){
//             lis[i].idx = i;
//         }
//         eve.tap(ccul,function (e) {
//             // 实现点击改变样式
//             console.log(lis);
//             for(var i=0;i<lis.length;i++){
//                 lis[i].classList.remove("active");
//             }
//             var li = e.target.parentNode
//             li.classList.add("active");
//
//             // 实现点击自动上滑
//             var height = li.offsetHeight;
//             // console.log(height);
//             // console.log(li.idx);
//             ccul.style.transition="top .5s"
//             // 当li太靠下，则不会向上滑，且将top设为最下
//             if(-height*li.idx<min){
//                 ccul.style.top = min+"px";
//                 itemY=min;
//             }else{
//                 ccul.style.top = -li.idx*height+"px";
//                 itemY=-li.idx*height;
//             }
//
//         });
        roll();

// 实现自动滚动
        function roll() {
            console.log(pl);
            interval = setInterval(function () {
                move();
            }, 3000);
            function move() {
                position = -index * width;
                console.log(position);
                img_ul.style.transition = ".5s";
                img_ul.style.transform = "translateX(" + position + "px)";
                for (var j = 0; j < pl+1; j++) {
                    // console.log(pointers);
                    // console.log(j);
                    // console.log(pointers[0]);
                    pointers[j].classList.remove("p_active");
                }
                pointers[index].classList.add("p_active");
                itemX = -index*width;
                index++;
                if (index == pl+1) {
                    index = 0;
                }
            }
        }
    }

var click = document.getElementsByClassName('more')[0],
    p3=document.getElementsByClassName("p3")[0];

// 点击切换
eve.tap(click,function () {
    p2.classList.remove("show");
    p3.classList.add("show");
});









}