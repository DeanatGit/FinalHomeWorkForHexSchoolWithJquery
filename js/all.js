$(document).ready(function () {
    var scrollFlag = false;
    $('.barnav .baritem > a').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.branch').slideToggle(1000);
        $(this).parent().siblings().find('.branch').slideUp(1000);
        $(this).parent().siblings().find('a').removeClass('active');
    })

    $('.nav .responsive-menu .menu .menu-item > a').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        if ($(this).parent().hasClass('sub')) {
            $(this).parent().find('.sub-menu').slideToggle(1000);
            $(this).parent().siblings().find('.sub-menu').slideUp(1000);
        }
        $(this).parent().siblings().find('a').removeClass('active');
    })

    $('.nav .menu-btn').on('click', function (event) {
        event.preventDefault();
        $('.responsive-menu .menu').slideToggle(1000);
    });

    $(window).smartresize(function () {
        if (window.innerWidth > 767) {
            $('.responsive-menu .menu').slideUp(0);
            $('.responsive-menu .menu .menu-item .sub-menu').slideUp(0);
        }
    });

    $(window).scroll(function () {
        var scrollPosition = $(document).scrollTop();
        $('.nav .barnav .baritem').toArray().forEach(function (e) {
            var target = $(e).find('a').attr('href');

            var targetTop = typeof($(target).offset()) != 'undefined' ? $(target).offset().top:0;
            var targetHeight = $(target).outerHeight();
            
            if (targetTop != 0 && (scrollPosition >= (targetTop - (targetHeight / 2) - 50) && scrollPosition <= (targetTop + targetHeight))) {             
                if (!$(e).hasClass('active')){
                    $(e).find('a').addClass('active');
                }
            }else{
                $(e).find('a').removeClass('active');
            }
        }
        );
    })
})