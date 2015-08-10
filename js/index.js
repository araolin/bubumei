/**
 * Created by araolin on 2015/7/30.
 */
//首页动画
$(function(){

    $(".gds_bg").addClass("animated zoomInUp").show();
    setTimeout(function(){
        $(".building").addClass("animated rubberBand").show();

    },1000);
    setTimeout(function(){
        $(".plane").addClass("animated zoomInLeft").show();

    },1800);
    setTimeout(function(){
        $(".cloud_s").addClass("animated fadeInLeftBig").show();

    },2400);
    setTimeout(function(){
        $(".cloud_b").addClass("animated bounceInRight").show();

    },2800);

    function tipsshow(b,t){
        $(b).hover(function(){
            $(t).show();
            $(t).hover(function(){
                $(t).show();
            })
            $(t).mouseleave(function(){
                $(t).hide();
            })
        })
        $(b).mouseleave(function(){
            $(t).hide();
            $(t).hover(function(){
                $(t).show();
            })
            $(t).mouseleave(function(){
                $(t).hide();
            })
        })
    }
    tipsshow(".building_l",".building_tips_l");
    tipsshow(".building_r",".building_tips_r");
})

// 云朵动画
var $main = mainwidth = null;
var offset1 = 235;
var offset2 = 465;
$(document).ready(
    function () {
        $main = $("#home .content");
        $body = $("body");
        $cloud1 = $(".cloud_b");
        $cloud2 = $(".cloud_s");
        mainwidth = $main.outerWidth();
    }
);
/// 飘动
setInterval(function flutter() {
    if (offset1 >= mainwidth) {
        offset1 =  -280;
    }

    if (offset2 >= mainwidth) {
        offset2 =  -75;
    }
    offset1 += 1;
    offset2 += 1.5;
    $cloud1.css("background-position", offset1 + "px 165px")

    $cloud2.css("background-position", offset2 + "px 115px")
}, 70);

sc_w=$(window).width();
sc_h=$(window).height();
    setInterval(function(){
        var mm = Math.round(Math.random(0)*20)-10;
        var nn = Math.round(Math.random(0)*20)-10;
        if(sc_w>=1600){
            $(".plane").animate({left:[1366+mm,"linear"],top:[30+nn,"swing"]},1000);
        }else{
            $(".plane").animate({left:[850+mm,"linear"],top:[30+nn,"swing"]},1000);
        }
    },50);

