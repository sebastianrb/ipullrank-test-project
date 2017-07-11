(function() {
    "use strict";

    //cache dom nodes
    var $accordionButtons = $(".section-content__accordion-header-expand-button");
    var $accordions = $(".section-content__accordion");
    var firstAccordionHeight = $accordions.first().find(".section-content__accordion-content-right-column").outerHeight(true);

    //set first accordion content height so it can animate
    $accordions.first().find(".section-content__accordion-content").css('height', firstAccordionHeight + "px");

    //style the expand/collapse buttons dynamically based on the state of the accordion content for each accordion
    $('.section-content__accordion').each(function(index, element) {
        var $article = $(element).find(".section-content__accordion-content");
        var $verticalBar = $(element).find('.section-content__accordion-header-expand-line-vertical');

        if($article.hasClass("accordion-collapsed")) {
            $verticalBar.removeClass("bar-flat");
        } else {
            $verticalBar.addClass("bar-flat");
        }
    });


    //add event listener for expanding accordions
    $accordionButtons.on('click', function(event) {
        event.preventDefault();

        //expand or collapse article
        //get article height dynamically
        var $article = $(this).closest(".section-content__accordion").find(".section-content__accordion-content");
        var articleHeight = $article.find(".section-content__accordion-content-right-column").outerHeight(true);

        if($article.hasClass("accordion-collapsed")) {
            $article.css({
                height: articleHeight + "px"
            });
            $article.removeClass("accordion-collapsed");
        } else {
            $article.css({
                height: "0"
            });
            $article.addClass("accordion-collapsed");
        }

        //change button
        var $verticalBar = $(this).find('.section-content__accordion-header-expand-line-vertical');
        if($verticalBar.hasClass("bar-flat")) {
            $verticalBar.removeClass("bar-flat");
        } else {
            $verticalBar.addClass("bar-flat");
        }

    });

})();