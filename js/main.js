/**
    Express Me | A personal portfolio HTML Template 
    Author: Ayush Agarwal (Friendsocial Developer Network) (contact@thisisayush.com)
    License: MIT
    Features:
    1. Particles Background (Customisable)
    2. Social Links
    3. 4 Sections - Home, About, Portfolio, Contact
    4. Smooth Scrolling
    5. JSON Data Implementation
    6. Typed.js Animated Section
    7. Scroll Reveal Effects
    8. 4 Personal FEatures in About Section
    9. 4 Portfolio Boxes in Portfolio Section
    10. Section Headings
    11. Preloader (CSS Powered)
    12. Page Progress Indicator
 **/

$(document).ready(function(e){
    getData();

    /** Load Particles Background **/
    particlesJS.load('particles','js/particles-config.json');

    $(document).on("fs-dataLoaded",function(){
        /** Content Reveal Animation */
        window.sr = ScrollReveal();
        sr.reveal("section .wrapper",{duration:1000,reset:true,easing:'linear',delay:200, viewFactor:0.3});

        /** Load Progress Bar */
        $(document).pageProgress();

        fixAbsCenter(); // Absolute Position all elements with .absolute-center class
    });

    /** Bind Window Size dependent operations*/
    $(window).resize(function(){
        fixAbsCenter();
        particlesJS.load('particles','js/particles-config.json');
    });

    function fixAbsCenter(){
        var mHeight = 0;
        $(".absolute-center").each(function(){
            mHeight = 0;
            $(this).children("div").each(function(){
                mHeight += $(this).height();
            });
            $(this).height(mHeight);
            $(this).parent("section.slide").css("min-height",mHeight+40);
        });
    }
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() == 0){
            $("#pageTop").fadeOut(500);
        }else{
            $("#pageTop").fadeIn(500);
        }
    });
});

 $(window).on("load",function(e){
     /** Scroll to home */
    $("html,body").animate({
        scrollTop: 0
    },2000);
    setTimeout(function(){$("#preloader").fadeOut(1000);},1000);
});