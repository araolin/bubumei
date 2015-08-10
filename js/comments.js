$(function(){
    $(".comment-reply-link").click(function(){
        $(".comment-respond").hide();
        if($(this).parent().parent().parent().has(".children").length){
            var item1 = $('.comment-respond').first();
        }else{
            var item1 = $('.comment-respond');
        }
        $(this).parent().parent().parent().find(item1).show();
    });
    $(".cancel-comment-reply-link").click(function(){
        $(".comment-respond").hide();
        $(".comments_con>.comment-respond").show();
    });
})