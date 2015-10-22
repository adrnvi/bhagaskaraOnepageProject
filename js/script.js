/**
 * Created by AdrianS on 2015-10-21.
 */

$(document).ready(function(){


    var services = $(".services").on("mouseenter", function(){
       $(this).css("backgroundImage", "url(img/active.png)");
    });
    var services = $(".services").on("mouseleave", function(){
        $(this).css("backgroundImage", "url(img/border.png)");
    });

    var portfolio = $(".portfolio").on("mouseenter", function(){
        $(this).css("backgroundImage", "url(img/active.png)");
    });
    var portfolio = $(".portfolio").on("mouseleave", function(){
        $(this).css("backgroundImage", "url(img/border.png)");
    });

    var about = $(".about").on("mouseenter", function(){
        $(this).css("backgroundImage", "url(img/active.png)");
    });
    var about = $(".about").on("mouseleave", function(){
        $(this).css("backgroundImage", "url(img/border.png)");
    });

    var team = $(".team").on("mouseenter", function(){
        $(this).css("backgroundImage", "url(img/active.png)");
    });
    var team = $(".team").on("mouseleave", function(){
        $(this).css("backgroundImage", "url(img/border.png)");
    });

    var blog = $(".blog").on("mouseenter", function(){
        $(this).css("backgroundImage", "url(img/active.png)");
    });
    var blog = $(".blog").on("mouseleave", function(){
        $(this).css("backgroundImage", "url(img/border.png)");
    });

    var contact = $(".contact").on("mouseenter", function(){
        $(this).css("backgroundImage", "url(img/active.png)");
    });
    var contact = $(".contact").on("mouseleave", function(){
        $(this).css("backgroundImage", "url(img/border.png)");
    });





});