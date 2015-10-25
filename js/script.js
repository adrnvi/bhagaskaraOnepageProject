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




});

