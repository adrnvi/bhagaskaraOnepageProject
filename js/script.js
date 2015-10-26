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
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
});

$('a[href*=#portfolio]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
})

$('a[href*=#about]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
})

$('a[href*=#team]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
})

$('a[href*=#contact]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
})

// sticky menu

    var menu = $(".mainNav");
    var menuBar = $(".mainNav .row");
    var sections = $("section[id]");
    var links = $(".mainNav a[href]").not(document.getElementById("notblog"));
    var lastMenuPositionFromTop = 0;

    $(window).scroll(function(event){
        if( menu.hasClass("sticky") === false &&
            $(this).scrollTop() > menu.offset().top && $(window).width() > 900) {

            lastMenuPositionFromTop = menu.offset().top;
            menu.addClass("sticky");
            menuBar.css("padding", "1% 0 0 0");
        }

        if( menu.hasClass("sticky") &&
            $(this).scrollTop() < lastMenuPositionFromTop){

            menu.removeClass("sticky");
            menuBar.css("padding", "5% 0 4% 0");
        }

        sections.each(function(index){
            if(index + 1 >= sections.length){
                if( sections.eq(index).offset().top < $(window).scrollTop()){
                    links.eq(index).addClass("purple");
                }
                else {
                    links.eq(index).removeClass("purple");
                }
            }
            else {
                if( sections.eq(index).offset().top < $(window).scrollTop() &&
                    sections.eq(index + 1).offset().top > $(window).scrollTop()){

                    links.eq(index).addClass("purple");
                }
                else{
                    links.eq(index).removeClass("purple");
                }
            }
        });
    });


// simple slider


    var leftArrow = $(".leftArrow");
    var rightArrow = $(".rightArrow");

    var people = $(".person");

    var allPersons = $(".allItems");


    rightArrow.on("click", function(event){

        event.preventDefault();


        people.eq(2).clone(true).prependTo(allPersons);
        console.log(people.eq(2))
        people.eq(2).remove();

        /*$.each(people, function(index){

        })*/


    });

    leftArrow.on("click", function(event){

        event.preventDefault();

        people.eq(0).clone(true).appendTo(allPersons);
        people.eq(0).remove();

    });













/*
    var images = $(".ourTeam li");
    var visibleImage = 0;
    images.eq(visibleImage).show();

    $(".rightArrow").click(function(){
        images.eq(visibleImage).hide(0);
        visibleImage++;
        if(visibleImage >= images.length){
            visibleImage = 0;
        }
        images.eq(visibleImage).show(0);
    });

    $(".leftArrow").click(function(){
        images.eq(visibleImage).hide(0);
        visibleImage--;
        if(visibleImage < 0){
            visibleImage = images.length-1;
        }
        images.eq(visibleImage).show(0);
    });
*/

// carrousel slider



});

