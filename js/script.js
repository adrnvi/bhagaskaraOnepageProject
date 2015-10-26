/**
 * Created by AdrianS on 2015-10-21.
 */
$(document).ready(function() {

var Application = function() {

    function replaceImg() {
        var menuHover = $(".menuHover").on("mouseenter", function(){
            $(this).css("backgroundImage", "url(img/active.png)");
        });
        menuHover.on("mouseleave", function(){
            $(this).css("backgroundImage", "url(img/border.png)");
        });
    }

    function replaceFeatureImg() {
        var diamondImg = $(".diamondImg").on("mouseenter", function(){
            $(this).css("backgroundImage", "url(img/diamondImgHover.png)");
        });
        diamondImg.on("mouseleave", function(){
            $(this).css("backgroundImage", "url(img/diamondImg.png)");
        });

        var binImg = $(".binImg").on("mouseenter", function(){
            $(this).css("backgroundImage", "url(img/binImgHover.png)");
        });
        binImg.on("mouseleave", function(){
            $(this).css("backgroundImage", "url(img/binImg.png)");
        });

        var phoneImg = $(".phoneImg").on("mouseenter", function(){
            $(this).css("backgroundImage", "url(img/phoneImgHover.png)");
        });
        phoneImg.on("mouseleave", function(){
            $(this).css("backgroundImage", "url(img/phoneImg.png)");
        });
    }

    function replaceArrow() {
        var arrowDown = $(".arrowDown").on("mouseenter", function(){
            $(this).css("backgroundImage", "url(img/arrowActive.png)");
        });
        arrowDown.on("mouseleave", function(){
            $(this).css("backgroundImage", "url(img/arrowDown.png)");
        });
    }

    function animateAnchors() {
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
        });

        $('a[href*=#about]').on('click', function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
        });

        $('a[href*=#team]').on('click', function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
        });

        $('a[href*=#contact]').on('click', function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
        });

    }

    function makeSticky() {
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
    }

    function makeCarousel() {
        var leftArrow = $(".leftArrow");
        var rightArrow = $(".rightArrow");

        var person1 = $(".person1");
        var person2 = $(".person2");
        var person3 = $(".person3");

        var skillset1 = $(".personOneSkills");
        var skillset2 = $(".personTwoSkills");
        var skillset3 = $(".personThreeSkills");

        var allPersons = $(".allItems");

        rightArrow.on("click", function(event){

            event.preventDefault();
            var people = $(".person");

            people.eq(2).clone(true).prependTo(allPersons);
            people.eq(2).remove();

            if(people.eq(0).hasClass("person1")) {
                skillset2.hide(500);
                skillset3.hide(500);
                skillset1.show(500);
            } else if (people.eq(0).hasClass("person2")) {
                skillset1.hide(500);
                skillset3.hide(500);
                skillset2.show(500);
            } else if (people.eq(0).hasClass("person3")) {
                skillset1.hide(500);
                skillset2.hide(500);
                skillset3.show(500);
            }

        });

        leftArrow.on("click", function(event){

            event.preventDefault();
            var people = $(".person");

            people.eq(0).clone(true).appendTo(allPersons);
            people.eq(0).remove();

            if(people.eq(2).hasClass("person1")) {
                skillset2.hide(500);
                skillset3.hide(500);
                skillset1.show(500);
            } else if (people.eq(2).hasClass("person2")) {
                skillset1.hide(500);
                skillset3.hide(500);
                skillset2.show(500);
            } else if (people.eq(2).hasClass("person3")) {
                skillset1.hide(500);
                skillset2.hide(500);
                skillset3.show(500);
            }

        });

    }

    return {
        replaceImg: replaceImg,
        replaceFeatureImg: replaceFeatureImg,
        replaceArrow: replaceArrow,
        animateAnchors: animateAnchors,
        makeSticky: makeSticky,
        makeCarousel: makeCarousel
    }
};

var app = new Application();

app.replaceImg();
app.replaceFeatureImg();
app.replaceArrow();
app.animateAnchors();
app.makeSticky();
app.makeCarousel();
});