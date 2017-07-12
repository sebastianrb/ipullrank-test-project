(function() {
    "use strict";

    //code the expand and collapse accordion behavior

    $(document).ready(function() {

        //cache variables
        var $accordionButtons = $(".section-content__accordion-header-expand-button");
        var $accordions = $(".section-content__accordion");

        //add event listener for expanding accordions
        $accordionButtons.on('click', handleAccordions);

        //accordion handler function
        function handleAccordions(event) {
            event.preventDefault();

            //handle accordion heights differently based on the styling of the accordion
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

            //change accordion button based on whether the accordion is expanded or collapsed
            var $verticalBar = $(this).find('.section-content__accordion-header-expand-line-vertical');
            if($verticalBar.hasClass("bar-flat")) {
                $verticalBar.removeClass("bar-flat");
            } else {
                $verticalBar.addClass("bar-flat");
            }
        }

    });

})();
