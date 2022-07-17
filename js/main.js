$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.navbar').css('background', '#212529');
    } else {
        $('.navbar').css('background', 'transparent');
    }
})