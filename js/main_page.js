jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>20){
            $('#navigation').addClass('fixed');
        }
        else if ($(this).scrollTop()<20){
            $('#navigation').removeClass('fixed');
        }
    });
});