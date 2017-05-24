$(document).ready(function(e){
    /** Content Reveal Animation */
    window.sr = ScrollReveal();
    sr.reveal("section",{duration:1000,reset:true,easing:'linear',delay:200, viewFactor:0.3});

    /** Initialize Typed.js */
    $("#aboutOne .animated-type").typed({
        strings: ["Student", "Programmer","Dreamer"],
        shuffle: true,
        loop: true,
        loopCount: null,
        typeSpeed: 60
    });
    
    /** Scroll to active slide */
    $("html,body").animate({
        scrollTop: $(".slide.active").offset().top
    },2000);

    /** Load Particles Background */
    particlesJS.load('particles','js/particles-config.json');

    /** Load Progress Bar */
    $(document).pageProgress();

    fixAbsCenter(); // Absolute Position all elements with .absolute-center class

    /** Bind Window Size dependent operations*/
    $(window).resize(function(){
        fixAbsCenter();
    });

    function fixAbsCenter(){
        var mHeight = 0;
        $(".absolute-center").each(function(){
            mHeight = 0;
            $(this).children("div").each(function(){
                mHeight += $(this).height();
            });
            $(this).height(mHeight);
        });
    }
});

 $(window).on("load",function(e){
        setTimeout(function(){$("#preloader").fadeOut(1000);},1000);
});