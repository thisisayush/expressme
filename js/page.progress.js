(function($){
    /** jQuery Page Progress Indicator Bar
     * Author: Ayush Agarwal (Friendsocial Developer Network) (contact@thisisayush.com)
     * License: MIT
     * 
     * Display Page Scroll Progress in a nice page top indicator
     * Settings:
     *   height: height of bar in any suitable unit (with suffix)
     *   color: Any valid color value (HEX, RGBa, RGB)
     *   position: position of bar | top || bottom
     * 
     * How to use?
     * 
     * Just call $(document).pageProgress(options);
     */

    /* Settings */ 
    var height,color,position;
    /* Prototype */
    $.fn.extend({
        pageProgress: function(options){
            var settings = $.extend({
                height:'5px',
                color:'#1565c0',
                position: 'top'
            });
            height = settings.height;
            color = settings.color;
            position = settings.position;
            showBar();
            return this;
        }
        
    });
    /* Main Function */
    function showBar(){
        var progressBar = '<div id="pageProgress" style="position: fixed;';
        if(position=="top"){
            progressBar += 'top: 0;';
        }else{
            if(position=="bottom"){
                progressBar += 'bottom:0;'
            }else{
                console.log("pageProgress: Position Not Recognised. Please use 'top' or 'bottom'");
                return false;
            }
        }
        progressBar += 'left: 0;height: '+height+';width: 100%;margin:0;padding:none;z-index: 9999;"><div class="progress-bar" style="width:0%;height:'+height+';transition-duration:500ms;transition-timing-function: linear;background: '+color+'"></div></div>';       
        $("body").prepend(progressBar);
        $(document).scroll(function(){
            var per = $(this).scrollTop() * 100/($(this).height() - $(window).height());
            $("#pageProgress > .progress-bar").css("width",per+"%");
        });    
    }
})(jQuery);

