$(function () {
    var $item = $(".carousel-inner .item");
    $(window).on('resize', function () {
        var $width = $(window).width();
        // console.log($width);
        if ($width >= 768) {
            console.log("屏幕大于等于768px");
            $($item).each(function (index, value) {
                var item = $(this);
                var img = item.data("largeImg");
                item.html('<a href="#" class="pc_img hidden-xs" style="background:url(' + img + ') center"></a>');
            })
        } else {
            console.log("屏幕小于768px");
            $($item).each(function (index, value) {
                var item = $(this);
                var img = item.data("smallImg");
                item.html('<a href="#" class="mobile_img hidden-sm hidden-md hidden-lg"> <img src="' + img + '" alt="..."> </a>')
            })
        }
    }).trigger('resize');


    var c = $(".carousel")[0];
    // var ci = $(".carousel-inner")[0];
    var sx = 0;
    var ex = 0;
    c.addEventListener("touchstart", function (e) {
        sx = e.targetTouches[0].clientX;
    });
    c.addEventListener('touchend', function (e) {
        ex = e.changedTouches[0].clientX;
        if(ex-sx>=0){
            $(c).carousel('prev');
        }else{
            $(c).carousel('next');
        }
    })


})