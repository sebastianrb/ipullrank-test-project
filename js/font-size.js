(function() {


    //add classes to each element affected by font resize

    //using jQuery, programmatically add data attribute to those element storing their base font size

    //create a data attribute on the body that stores the current font growth factor

    //when user clicks a button, find that factor in the array, go to next or previous, and affect all the element by that factor multiplied by their original size

    //when user gets ot start or end of array, disable relevant button

    //cache variables
    var body = document.body;
    var fontButtons = document.querySelector(".main-sidebar__text-size-adjust-buttons");
    var fontSizes = [".8", ".85", ".9", "1", "1.1", "1.2", "1.3"];
    var changingElements = Array.from(document.querySelectorAll(".font-change"));

    //set base font size on each element
    changingElements.forEach( function(element, index) {
        var elementFontSize = parseFloat($(element).css("font-size"));
        element.setAttribute("data-base-font-size", elementFontSize)
    });

    //store current growth factor on body element
    body.setAttribute("data-font-growth-factor", 1);

    //create event handlers for buttons
    fontButtons.addEventListener("click", function(event) {
        if(event.target === fontButtons) {
            return null
        }

        if(!event.target.classList.contains("button-disabled")) {
            //set current index and remove disabled class if necessary
            var currentIndex = fontSizes.indexOf(body.getAttribute("data-font-growth-factor"));
            var disabledButton = document.querySelector(".button-disabled");
            if(disabledButton) {
                disabledButton.classList.remove("button-disabled");
            }

            if(event.target.classList.contains("text-smaller")) {
                body.setAttribute("data-font-growth-factor", fontSizes[currentIndex - 1]);
                //change current index
                currentIndex = fontSizes.indexOf(body.getAttribute("data-font-growth-factor"));

                //disable button
                if(currentIndex === 0) {
                    event.target.classList.add("button-disabled");
                } else {
                    event.target.classList.remove("button-disabled");
                }
            } else if(event.target.classList.contains("text-larger")) {
                body.setAttribute("data-font-growth-factor", fontSizes[currentIndex + 1]);
                //change current index
                currentIndex = fontSizes.indexOf(body.getAttribute("data-font-growth-factor"));

                //do magic
                var growthFactor = parseFloat(body.getAttribute("data-font-growth-factor"));
                console.log(growthFactor);
                changingElements.forEach( function(element, index) {
                    // statements
                });

                //disable button
                if(currentIndex === fontSizes.length - 1) {
                    event.target.classList.add("button-disabled");
                } else {
                    event.target.classList.remove("button-disabled");
                }
            }

            //do magic
            var growthFactor = parseFloat(body.getAttribute("data-font-growth-factor"));
            console.log(growthFactor);
            changingElements.forEach( function(element, index) {
                var baseFontSize = parseFloat(element.getAttribute("data-base-font-size"));
                $(element).css('font-size', baseFontSize * growthFactor + "px");
            });
        }
    }, true);

})();
