window.onload = function () {

    // 等会封装
    // 等会考虑兼容性
    var welcome = document.getElementsByClassName("welcome")[0],
        detail = document.getElementsByClassName("p2")[0],
        startTime = new Date().getTime();

    setTimeout(function () {
        welcome.style.opacity = 0;
    }, 3000);

    welcome.addEventListener("transitionend", function (e) {
        welcome.classList.remove("show");
        detail.classList.add("show");
        sectionB();
    });


    // 第二页的实现头部图片滑动
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
            pl = pointers.length - 1,
            interval;

        // 借用之前的代码，这里公共的位置判断应该全部用一个
        // 这里用translateX吧
        img_ul.addEventListener("touchstart", function (e) {
            console.log("chumoshijian ");
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
                img_ul.style.transform = "translateX(" + animateMax + "px)";
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
            console.log("itemX:" + itemX);
            var distance = itemX / width;
            console.log("distance:" + distance);
            var indexNext = -Math.round(distance);
            console.log("indexNext:" + indexNext);
            index = indexNext;
            if (indexNext == 0) {
                index = 0;
            }
            if (indexNext > pl) {
                index = pl;
            }
            // 使用完itemX之后需要把他重置一下
            itemX = -index * width;
            console.log("index:" + index);
            console.log("itemX:" + itemX);
            img_ul.style.transition = ".5s";
            img_ul.style.transform = "translateX(" + (itemX) + "px)";
            // 修改小点点
            for (var j = 0; j < pl + 1; j++) {
                // console.log(pointers);
                // console.log(j);
                // console.log(pointers[0]);
                pointers[j].classList.remove("p_active");
            }
            pointers[pl - index].classList.add("p_active");
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
                for (var j = 0; j < pl + 1; j++) {
                    // console.log(pointers);
                    // console.log(j);
                    // console.log(pointers[0]);
                    pointers[j].classList.remove("p_active");
                }
                pointers[pl - index].classList.add("p_active");
                itemX = -index * width;
                index++;
                if (index == 5) {
                    index = 0;
                }
            }
        }

        // 实现小心心
        var li_star = document.querySelectorAll(".p2>.score>ul>li");
        var c_value = ["很差", "失望", "一般", "良好", "很好"];
        // 循环li里的小心心
        for (var i = 0; i < li_star.length; i++) {
            var stars = li_star[i].querySelectorAll("nav>a");
            // 给小心心加下标
            // 循环添加时间的循环里拿的stars一直是最后的starts，有bug
            // 可以加一个自执行的匿名函数，保存一下stars
            var input = li_star[i].querySelectorAll("input")[0];
            (function (stars, input) {
                for (var j = 0; j < stars.length; j++) {
                    stars[j].index = j;
                    stars[j].linow = i;
                    // 添加触摸事件
                    stars[j].addEventListener("touchstart", function (e) {
                        input.value = c_value[e.target.index];
                        console.log(e.target.index);
                        console.log(e.target.linow);
                        console.log(e.target.parentNode);
                        var as = e.target.parentNode.getElementsByTagName("a");
                        //清除所有的星号的active样式,会有最后一行的bug
                        for (var m = 0; m < stars.length; m++) {
                            console.log(this.linow);

                            if (m <= this.index) {
                                //将当前点击的a设置为active样式
                                console.log(this.linow);
                                console.log(stars);
                                stars[m].classList.add("active");
                            } else {
                                stars[m].classList.remove("active");
                            }
                        }
                    })
                }
            })(stars, input);

        }

        // 实现提交检查的功能
        var btn_check = document.getElementById("btn_submit");
        eve.tap(btn_check, check);

        function check() {
            var values = document.querySelectorAll(".p2>.score>ul>li>input"),
                flag = 0,
                tag = document.querySelectorAll('.p2 > .tags input:checked '),
                p_info = document.getElementsByClassName("info")[0];

            for (var i = 0; i < values.length; i++) {
                if (values[i].value == "") {
                    flag = 1;
                }
            }
            console.log(flag);
            console.log(tag.length);
            if (flag == 1 && tag.length == 0) {
                flag = 3;
            } else if (tag.length == 0) {
                flag = 2
            }
            console.log(flag);
            if (flag == 0) {
                alert('开始跳转页面');
            }
            else if (flag == 1) {
                animation_check(p_info, "请完成评分");
            } else if (flag == 2) {
                animation_check(p_info, "请添加标签");
            } else if (flag == 3) {
                animation_check(p_info, "请完成评分和添加标签");
            }
        }

        // 提交检查的动画
        function animation_check(ele, info) {
            ele.innerHTML = info;
            ele.style.transform = "scale(1)";
            ele.style.opacity = 1;
            setTimeout(function () {
                ele.style.transform = "scale(0)";
                ele.style.opacity = 0;
            }, 1000)
        }

        // sectionB()的括号
    }


}