// 一)Nav 需要固定住
// 二)截取 window.offsetTop的高度
// 三)針對 window.scroll而設定互動
// 四)計算每個區塊的位置，才能在 scroll到的時候而給予動作
$(document).ready(function () {
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
        if ($(this).parent().hasClass('sub'))
        {
            $(this).parent().find('.sub-menu').slideToggle(1000); 
            $(this).parent().siblings().find('.sub-menu').slideUp(1000);
        }        
        $(this).parent().siblings().find('a').removeClass('active');  
    })

    $('.nav .menu-btn').on('click', function (event) {
        event.preventDefault();
        $('.responsive-menu .menu').slideToggle(1000); 
    });

    $(window).smartresize(function(){
        console.log(window.innerWidth);
       if (window.innerWidth > 767){
          $('.responsive-menu .menu').slideUp(0); 
          $('.responsive-menu .menu .menu-item .sub-menu').slideUp(0); 
       }
   });
})