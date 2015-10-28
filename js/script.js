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

        $('a[href*=#topOfPage]').on('click', function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
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
        var sections = $("section[id]").not(document.getElementById("topOfPage"));
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

    function slideShow(){
        var slider = $('.slider');
        var leftOffset = parseInt(slider.css('left'),10) - 1020;

//tu blokada jak leftOffset przekroczy granice
        slider.animate({
            'left': leftOffset+'px'
        });
    }

    function juggleTheGallery() {

        var buttonAll = $("*[data-rel='all']");
        var buttonWeb = $("*[data-rel='web']");
        var buttonApps = $("*[data-rel='apps']");
        var buttonIcons = $("*[data-rel='icons']");

        buttonAll.on("click", function () {
            buttonApps.removeClass("buttonActive").addClass("button");
            buttonIcons.removeClass("buttonActive");
            buttonIcons.addClass("button");
            buttonWeb.removeClass("buttonActive");
            buttonWeb.addClass("button");
            $(this).addClass("buttonActive");
            $(this).removeClass("button");
            $("div.img").show(1000);
        });

        buttonWeb.on("click", function () {
            $(this).addClass("buttonActive");
            $(this).removeClass("button");
            buttonAll.removeClass("buttonActive");
            buttonAll.addClass("button");
            buttonApps.removeClass("buttonActive");
            buttonApps.addClass("button");
            buttonIcons.removeClass("buttonActive");
            buttonIcons.addClass("button");
            $("div.img").hide(1000);
            $(".web").show(1000);
        });

        buttonApps.on("click", function () {
            $(this).addClass("buttonActive");
            $(this).removeClass("button");
            buttonAll.removeClass("buttonActive");
            buttonAll.addClass("button");
            buttonWeb.removeClass("buttonActive");
            buttonWeb.addClass("button");
            buttonIcons.removeClass("buttonActive");
            buttonIcons.addClass("button");
            $("div.img").hide(1000);
            $(".apps").show(1000);
        });

        buttonIcons.on("click", function () {
            $(this).addClass("buttonActive");
            $(this).removeClass("button");
            buttonAll.removeClass("buttonActive");
            buttonAll.addClass("button");
            buttonWeb.removeClass("buttonActive");
            buttonWeb.addClass("button");
            buttonApps.removeClass("buttonActive");
            buttonApps.addClass("button");
            $("div.img").hide(1000);
            $(".icons").show(1000);
        })

    }

    function makeCuteFancybox() {

        var thumbnail1 = $(".img1 .divCaption");
        var thumbnail2 = $(".img2 .divCaption");
        var thumbnail3 = $(".img3 .divCaption");
        var thumbnail4 = $(".img4 .divCaption");
        var thumbnail5 = $(".img5 .divCaption");
        var thumbnail6 = $(".img6 .divCaption");


        var buttonClose = $(".toHome");


        thumbnail1.on("click", function () {
            $(".overlay1").css("display", "block");
        });

        buttonClose.on("click", function (event) {
            event.preventDefault();
            $(".overlay1").css("display", "none");
        });

        thumbnail2.on("click", function () {
            $(".overlay2").css("display", "block");
        })

        buttonClose.on("click", function (event) {
            event.preventDefault();
            $(".overlay2").css("display", "none");
        });

        thumbnail3.on("click", function () {
            $(".overlay3").css("display", "block");
        })

        buttonClose.on("click", function (event) {
            event.preventDefault();
            $(".overlay3").css("display", "none");
        });

        thumbnail4.on("click", function () {
            $(".overlay4").css("display", "block");
        })

        buttonClose.on("click", function (event) {
            event.preventDefault();
            $(".overlay4").css("display", "none");
        });

        thumbnail5.on("click", function () {
            $(".overlay5").css("display", "block");
        })

        buttonClose.on("click", function (event) {
            event.preventDefault();
            $(".overlay5").css("display", "none");
        });

        thumbnail6.on("click", function () {
            $(".overlay6").css("display", "block");
        })

        buttonClose.on("click", function (event) {
            event.preventDefault();
            $(".overlay6").css("display", "none");
        });
    }

    function init() {
        setInterval(slideShow, 4000);
    }

    return {
        replaceImg: replaceImg,
        replaceFeatureImg: replaceFeatureImg,
        replaceArrow: replaceArrow,
        animateAnchors: animateAnchors,
        makeSticky: makeSticky,
        makeCarousel: makeCarousel,
        slideShow: slideShow,
        juggleTheGallery: juggleTheGallery,
        makeCuteFancybox: makeCuteFancybox,
        init: init
    }
};

var app = new Application();

app.init();
app.replaceImg();
app.replaceFeatureImg();
app.replaceArrow();
app.animateAnchors();
app.makeSticky();
app.makeCarousel();
app.slideShow();
app.juggleTheGallery();
app.makeCuteFancybox();






});