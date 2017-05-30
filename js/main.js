$(document).ready(function(e){
    /** Content Reveal Animation */
    window.sr = ScrollReveal();
    sr.reveal("section .wrapper",{duration:1000,reset:true,easing:'linear',delay:200, viewFactor:0.3});

    /** Initialize Typed.js */
    $("#aboutOne .animated-type").typed({
        strings: ["Student", "Programmer","Dreamer"],
        shuffle: true,
        loop: true,
        loopCount: null,
        typeSpeed: 60
    });
    
    /** Scroll to home */
    $("html,body").animate({
        scrollTop: 0
    },2000);

    /** Load Particles Background */
    particlesJS.load('particles','js/particles-config.json');

    /** Load Progress Bar */
    $(document).pageProgress();

    fixAbsCenter(); // Absolute Position all elements with .absolute-center class

    /** Bind Window Size dependent operations*/
    $(window).resize(function(){
        fixAbsCenter();
        particlesJS.load('particles','js/particles-config.json');
        $("#console").html("Width: "+$(this).width()+" <br>Height: "+$(this).height());
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
});

 $(window).on("load",function(e){
        setTimeout(function(){$("#preloader").fadeOut(1000);},1000);
});