/**
 * Created by AdrianS on 2015-10-21.
 */


$(document).ready(function() {

//replace menu imgs

 var menuHover = $(".menuHover").on("mouseenter", function(){
     $(this).css("backgroundImage", "url(img/active.png)");
 });
 menuHover.on("mouseleave", function(){
     $(this).css("backgroundImage", "url(img/border.png)");
 });

//replace features imgs

var diamondImg = $(".diamondImg").on("mouseenter", function(){
    $(this).css("backgroundImage", "url(img/diamondImgHover.png)");
});
diamondImg = $(".diamondImg").on("mouseleave", function(){
    $(this).css("backgroundImage", "url(img/diamondImg.png)");
});

var binImg = $(".binImg").on("mouseenter", function(){
    $(this).css("backgroundImage", "url(img/binImgHover.png)");
});
binImg = $(".binImg").on("mouseleave", function(){
    $(this).css("backgroundImage", "url(img/binImg.png)");
});

var phoneImg = $(".phoneImg").on("mouseenter", function(){
    $(this).css("backgroundImage", "url(img/phoneImgHover.png)");
});
phoneImg = $(".phoneImg").on("mouseleave", function(){
    $(this).css("backgroundImage", "url(img/phoneImg.png)");
});

//replace arrow img

var arrowDown = $(".arrowDown").on("mouseenter", function(){
    $(this).css("backgroundImage", "url(img/arrowActive.png)");
});
arrowDown.on("mouseleave", function(){
    $(this).css("backgroundImage", "url(img/arrowDown.png)");
});


//animate anchors

$('a[href*=#mainNav]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});


$('a[href*=#services]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
});

$('a[href*=#portfolio]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
})

$('a[href*=#about]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
})

$('a[href*=#team]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
})

$('a[href*=#contact]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
})

// sticky menu

    var menu = $(".mainNav");
    var menuBar = $(".mainNav .row");
    //var paragraphs = $("p");
    var links = $(".mainNav .nav a");
    var lastMenuPositionFromTop = 0;
    var menuHeight = menu.height();

    $(window).scroll(function(event){
        if( menu.hasClass("sticky") === false &&
            $(this).scrollTop() > menu.offset().top && $(window).width() > 1020) {

            lastMenuPositionFromTop = menu.offset().top;
            menu.addClass("sticky");
            menuBar.css("padding", "1% 0 0 0");
        }

        if( menu.hasClass("sticky") &&
            $(this).scrollTop() < lastMenuPositionFromTop){

            menu.removeClass("sticky");
            menuBar.css("padding", "5% 0 4% 0");
        }
        /*paragraphs.each(function(index){
            if(index + 1 >= paragraphs.length){
                if( paragraphs.eq(index).offset().top < $(window).scrollTop()){
                    links.eq(index).addClass("active");
                }
                else{
                    links.eq(index).removeClass("active");
                }
            }
            else{

                if( paragraphs.eq(index).offset().top < $(window).scrollTop() &&
                    paragraphs.eq(index + 1).offset().top > $(window).scrollTop()){

                    links.eq(index).addClass("active");
                }
                else{
                    links.eq(index).removeClass("active");
                }
            }
        });*/
    });


});

