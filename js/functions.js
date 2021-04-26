$(function(){
    // loading page
    $('.loder-screen').fadeOut(1000, function(){
        $(this.parent).fadeOut(1000);
    });
    // Focus for input div in Login Page
    $('.div-inpt input').focus(function () { 
        $(this).parent().css("box-shadow", "0px 0px 15px 5px #65c03b");
        console.log('karam')
    });
    $('.div-inpt input').blur(function(){
        $(this).parent().css("box-shadow", "none");
    });
});