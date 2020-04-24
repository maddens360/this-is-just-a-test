$(function(){
    $('.menu-trigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('nav').slideUp();
        } else {
            $(this).addClass('active');
            $('nav').slideDown();
        }
    });  
    $('.close').click(function(){
        $('.menu-trigger').removeClass('active');
        $('nav').slideUp();
    })
    $('.top').click(function(){
        $('body,html'),animate({
            scrollTop:0
        },500);
        return false;
    });
    $('.questions').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideToggle('slow');
        }
        else{
            $(this).addClass('active');
            $(this).next().slideToggle('slow');
        }
    });
    $(window).scroll(function () {
        $('.fadeIn').each(function () {
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('scrollIn');
            }
        });
    });
});
