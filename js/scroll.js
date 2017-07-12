(function() {
    "use strict";

    //cache variables
    var sidebar = document.querySelector(".main-sidebar");
    var sidebarMobileMenuButton = document.querySelector(".mobile-sidebar-button");
    var sidebarHeight = sidebar.offsetHeight;
    var sidebarOffsetTop = $(sidebar).offset().top;
    var articleMenu = document.querySelector(".main-sidebar__in-this-article");
    var articleList = Array.from(document.querySelectorAll(".main-sidebar__in-this-article-item:not(.in-this-article-header)"));
    var stickyheader = document.querySelector(".header__sticky-nav-content");
    var topOffset = 20;
    //get offset tops for the sections
    var sections = Array.from(document.querySelectorAll(".main-section"));
    //create object of section offsets
    var sectionOffsets = makeSectionOffsetObject(sections);
    //offsets and breakpoints
    var stickyMenuHeightOffset = 190;
    var phoneBarFoldedDown = 320;
    var stickyMenuBreakpoint = 950


    //throttle scrolling and handle sticky menu
    window.addEventListener('scroll', throttle(handleScrollEvents, 60));

    function throttle(fn, wait) {
      var time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      }
    }

    function handleScrollEvents() {

        //make article menu sticky
        if(window.innerWidth > 950) {
            if($(window).scrollTop() > sidebarHeight + sidebarOffsetTop - topOffset) {
                articleMenu.classList.add("sticky");
            } else {
                articleMenu.classList.remove("sticky");
            }
        }

        //highlight current article in article menu
        sectionOffsets = makeSectionOffsetObject(sections);
        var selectedArticle = document.querySelector(".article-selected");
        selectedArticle.classList.remove("article-selected");

        if($(window).scrollTop() > sectionOffsets[0] && $(window).scrollTop() < sectionOffsets[1]) {
            articleList[0].classList.add("article-selected");
        } else if($(window).scrollTop() > sectionOffsets[1] && $(window).scrollTop() < sectionOffsets[2]) {
            articleList[1].classList.add("article-selected");
        } else if($(window).scrollTop() > sectionOffsets[2] && $(window).scrollTop() < sectionOffsets[3]) {
            articleList[2].classList.add("article-selected");
        } else if($(window).scrollTop() > sectionOffsets[3] && $(window).scrollTop() < sectionOffsets[4]) {
            articleList[3].classList.add("article-selected");
        } else if($(window).scrollTop() > sectionOffsets[4] && $(window).scrollTop() < sectionOffsets[5]) {
            articleList[4].classList.add("article-selected");
        } else if($(window).scrollTop() > sectionOffsets[5]) {
             articleList[5].classList.add("article-selected");
        } else {
            articleList[0].classList.add("article-selected");
        }

        //format header
        if($(window).scrollTop() > phoneBarFoldedDown) {
            stickyheader.classList.add("pushed");
        } else {
            stickyheader.classList.remove("pushed");
        }
    }


    //get new dimensions when user resizes screen
    window.addEventListener('resize', handleResize);

    function handleResize(event) {
        sidebarHeight = sidebar.offsetHeight;
        sidebarOffsetTop = $(sidebar).offset().top;

        sectionOffsets = makeSectionOffsetObject(sections);
        // console.log(sectionOffsets);

        if(window.innerWidth > 950) {
            sidebar.classList.remove("mobile-sidebar-expanded");
            sidebarMobileMenuButton.classList.remove("mobile-sidebar-button-activated");
        }
    }


    //helper functions
    function makeSectionOffsetObject(sections) {
        var offsetObject = {};

        sections.forEach( function(element, index) {
            offsetObject[index] = $(element).offset().top - stickyMenuHeightOffset;
        });

        // console.log(offsetObject);
        return offsetObject;
    }

})();
