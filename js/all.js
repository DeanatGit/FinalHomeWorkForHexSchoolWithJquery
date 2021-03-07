$(document).ready(function () {
    $('.barnav .baritem > a').click(function (event) {
        event.preventDefault();
        
        // $(this).parent().parent().parent().slideToggle(1000);
        // $(this).parent().find('.branch').slideToggle(1000);        
        // $(this).parent().find('.branch').toggleClass('appendbranch');
        // $(this).parent().siblings().find('.branch').slideUp(1000);
        // $(this).parent().siblings().find('.branch').removeClass('branchopen');
        // $(this).parent().siblings().find('.branch').removeClass('appendbranch');        
        // $('.barnav .baritem .branch').slideDown(1000);
        // $('.barnav .baritem .branch').parent().sibling().slideToggle();  
        // console.log($(this).parent().children('.branch').parent().length);
        // https://css-tricks.com/snippets/jquery/test-if-element-inside-element/
        // console.log(typeof($(this).parent().children('.branch').parent()));
        // console.log($(this).parent().children('.branch').parent());
        // console.log($(this).parent().children('.branch'));
        // console.log($(this).parent().children('.branch')[0].children.length);
        if ($(this).parent().children('.branch').length == 1){
            $(this).toggleClass('active');
            
            // $(this).parent().find('.branch').toggleClass('branchopen');
            // $(this).parent().toggleClass('baritemopen');
            // $(this).parent().parent().toggleClass('barnavopen');
            $(this).parent().find('.branch').css('height','calc(147px + 46px * '+ ($(this).parent().children('.branch')[0].children.length).toString()+')'); //.toggleClass('branchopen');
            // https://stackoverflow.com/questions/21911407/use-css-calc-in-jquery
            // $(this).parent().css('height','calc(49px + 46px * '+ ($(this).parent().children('.branch')[0].children.length).toString()+')'); //.toggleClass('baritemopen');
            // $(this).parent().parent().css('height','calc(49px + 46px * '+ ($(this).parent().children('.branch')[0].children.length).toString()+')'); //.toggleClass('barnavopen');
            // console.log($(this).parent().children('.branch').parent().length);
            console.log('calc(147px + 46px * '+ ($(this).parent().children('.branch')[0].children.length).toString()+')');
            console.log(($(this).parent().children('.branch')[0].children.length).toString());
            $(this).parent().siblings().find('a').removeClass('active');
        }               
    })

    $('.nav .showmenu').on('click', function (event) {
        event.preventDefault();
        $('.barnav').toggleClass('menuopen');
        $('.barnav').removeClass('barnavopen');
        $('.barnav .baritem').removeClass('baritemopen');
        $('.barnav .baritem .branch').removeClass('branchopen');
    });
})