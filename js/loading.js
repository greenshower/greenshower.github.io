$(function() {
    var h = $(window).height();
    $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).on('load', function () {
    $('#loader-bg').delay(6000).fadeOut(800);
    $('#loader').delay(5900).fadeOut(300);
    $('#main-contents').css('display', 'block');
});
