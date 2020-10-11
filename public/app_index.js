$(function(){
    $('body').on('click', () => {
        $(".fade").each(function(){
            $(this).animate({"opacity":1},8000).siblings().animate({'opacity':0},2000)
        });
    });
});