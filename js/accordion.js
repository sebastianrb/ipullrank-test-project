(function() {
    "use strict";

    $(document).ready(function() {
        //cache dom nodes
        var $accordionButtons = $(".section-content__accordion-header-expand-button");
        var $accordions = $(".section-content__accordion");
        var firstAccordionHeight = $accordions.first().find(".section-content__accordion-content-right-column").outerHeight(true);
        var firstFactDivHeight = $accordions.first().find(".section-content__accordion-content-left-column").outerHeight(true);

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
        $accordionButtons.on('click', handleAccordions);

        //handler function
        function handleAccordions(event) {
            event.preventDefault();
            console.log("Handler fired");
            //expand or collapse article
            //get article height dynamically

            if(window.innerWidth > 750) {
                console.log(this);
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
            } else {
                var $article = $(this).closest(".section-content__accordion").find(".section-content__accordion-content");
                var $factDiv = $(this).closest(".section-content__accordion").find(".section-content__accordion-content-left-column");
                var factDivHeight = $factDiv.outerHeight(true);
                var articleHeight = $article.find(".section-content__accordion-content-right-column").outerHeight(true) + factDivHeight;

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
            }

            //change button
            var $verticalBar = $(this).find('.section-content__accordion-header-expand-line-vertical');
            if($verticalBar.hasClass("bar-flat")) {
                $verticalBar.removeClass("bar-flat");
            } else {
                $verticalBar.addClass("bar-flat");
            }
        }

    });

})();
