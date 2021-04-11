$(function(){
    $(".menu li").hover(function() {
        $(".bar").toggle();

        var listLeft = $(this).offset().left;
        var listWidth = $(this).width();

        $(".bar").width(listWidth);
        $(".bar").offset({ left:listLeft +25});
    });
});