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
    var meta, links, home, about, portfolio, contact;
    var homeLabel = $(".homeLabel");
    var aboutLabel = $(".aboutLabel");
    var portfolioLabel = $(".portfolioLabel");
    var contactLabel = $(".contactLabel");

    /** Home Section **/
    var homeTitle = $("#aboutTitle");
    var homeSubTitle = $("#aboutSubTitle>span");
    var avatar = $(".avatar>img");
    /*  About Section */
    var aboutSection = $("#aboutSection");
    var aboutHeading = aboutSection.find(".heading");
    var aboutDescripton = aboutSection.find(".description").children("p");

    var feature1_icon = $("#feature1 .feature-icon>i.fa");
    var feature1_info = $("#feature1 .feature-info>p");
    var feature1_subinfo = $("#feature1 .feature-info>.feature-subinfo");

    var feature2_icon = $("#feature2 .feature-icon>i.fa");
    var feature2_info = $("#feature2 .feature-info>p");
    var feature2_subinfo = $("#feature2 .feature-info>.feature-subinfo");

    var feature3_icon = $("#feature3 .feature-icon>i.fa");
    var feature3_info = $("#feature3 .feature-info>p");
    var feature3_subinfo = $("#feature3 .feature-info>.feature-subinfo");

    var feature4_icon = $("#feature4 .feature-icon>i.fa");
    var feature4_info = $("#feature4 .feature-info>p");
    var feature4_subinfo = $("#feature4 .feature-info>.feature-subinfo");

    /** Portfolio Section */
    var portfolioSection = $("#portfolioSection");
    var portfolioHeading = portfolioSection.find(".heading");
    var portfolioDescripton = portfolioSection.find(".description").children("p");

    var portfolio1_image = $("#portfolio1 .portfolio-image>img");
    var portfolio1_info = $("#portfolio1 .portfolio-info>p");
    var portfolio1_subinfo = $("#portfolio1 .portfolio-subinfo");

    var portfolio2_image = $("#portfolio2 .portfolio-image>img");
    var portfolio2_info = $("#portfolio2 .portfolio-info>p");
    var portfolio2_subinfo = $("#portfolio2 .portfolio-subinfo");

    var portfolio3_image = $("#portfolio3 .portfolio-image>img");
    var portfolio3_info = $("#portfolio3 .portfolio-info>p");
    var portfolio3_subinfo = $("#portfolio3 .portfolio-subinfo");

    var portfolio4_image = $("#portfolio4 .portfolio-image>img");
    var portfolio4_info = $("#portfolio4 .portfolio-info>p");
    var portfolio4_subinfo = $("#portfolio4 .portfolio-subinfo");

    /** Contact Section **/
    var contactSection = $("#contactSection");
    var contactHeading = contactSection.find(".heading");
    var contactDescripton = contactSection.find(".description").children("p");

    /** Links Container */
    var linksContainer = $(".linksContainer>ul");

    function getData(){
        $.getJSON("data.json",function(response){
            r = response;
            processR(r);
        });
        function processR(r){
            home = r.home;
            about = r.about;
            portfolio = r.portfolio;
            contact = r.contact;
            links = r.links;
            meta = r.meta;
            loadData();
        }
    }

    function loadData(){
        document.title = meta.title;

        /** Home Section */
        homeLabel.html(home.title);
        homeTitle.html(home.heading);
        avatar.attr("src",home.avatar);
        /** Initialize Typed.js */
        homeSubTitle.typed({
            strings: home.subheading,
            shuffle: true,
            loop: true,
            loopCount: null,
            typeSpeed: 60
        });
        
        /**  About Section **/
        aboutLabel.html(about.title);
        aboutHeading.html(about.heading);
        aboutDescripton.html(about.description);

        feature1_icon.addClass(about.featureBox[0].icon);
        feature1_icon.addClass("hover-"+about.featureBox[0].hover);
        feature1_info.html(about.featureBox[0].info);
        feature1_subinfo.html(about.featureBox[0].subinfo);
        
        feature2_icon.addClass(about.featureBox[1].icon);
        feature2_icon.addClass("hover-"+about.featureBox[1].hover);
        feature2_info.html(about.featureBox[1].info);
        feature2_subinfo.html(about.featureBox[1].subinfo);
        
        feature3_icon.addClass(about.featureBox[2].icon);
        feature3_icon.addClass("hover-"+about.featureBox[2].hover);
        feature3_info.html(about.featureBox[2].info);
        feature3_subinfo.html(about.featureBox[2].subinfo);

        feature4_icon.addClass(about.featureBox[3].icon);
        feature4_icon.addClass("hover-"+about.featureBox[3].hover);
        feature4_info.html(about.featureBox[3].info);
        feature4_subinfo.html(about.featureBox[3].subinfo);

        /** Portfolio Section **/
        portfolioLabel.html(portfolio.title);
        portfolioHeading.html(portfolio.heading);
        portfolioDescripton.html(portfolio.description);

        portfolio1_image.attr("src",portfolio.portfolioBox[0].image);
        portfolio1_info.html(portfolio.portfolioBox[0].info);
        portfolio1_subinfo.html(portfolio.portfolioBox[0].subinfo);

        portfolio2_image.attr("src",portfolio.portfolioBox[1].image);
        portfolio2_info.html(portfolio.portfolioBox[1].info);
        portfolio2_subinfo.html(portfolio.portfolioBox[1].subinfo);

        portfolio3_image.attr("src",portfolio.portfolioBox[2].image);
        portfolio3_info.html(portfolio.portfolioBox[2].info);
        portfolio3_subinfo.html(portfolio.portfolioBox[2].subinfo);


        portfolio4_image.attr("src",portfolio.portfolioBox[3].image);
        portfolio4_info.html(portfolio.portfolioBox[3].info);
        portfolio4_subinfo.html(portfolio.portfolioBox[3].subinfo);

        /** Contact Section **/
        contactLabel.html(contact.title);
        contactHeading.html(contact.heading);
        contactDescripton.html(portfolio.description);

        /** Links **/
        $.each(links,function(i,v){
            var h = '<li class="col hover-'+v.color+'"><a href="'+v.url+'" title="'+v.title+'"><i class="icon fa '+v.icon+'"></i></a></li>';
            linksContainer.append(h);
        });
        $(document).trigger("fs-dataLoaded");
    }
    getData();
});

