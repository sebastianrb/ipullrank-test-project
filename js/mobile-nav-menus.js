(function() {
    "use strict";

    //cache variables
    var topMobileMenuButton = document.querySelector(".header__sticky-nav-list--mobile-button");
    var topMobileMenu = document.querySelector(".header__sticky-nav-list");

    var sidebarMobileMenuButton = document.querySelector(".mobile-sidebar-button");
    var sidebarMobileMenu = document.querySelector(".main-sidebar");

    //set event listener on mobile menu expand button on the top menu
    topMobileMenuButton.addEventListener("click", function(event) {
        console.log("Clicked");
        if(topMobileMenu.classList.contains("top-menu-collapsed")) {
            topMobileMenu.classList.remove("top-menu-collapsed");
        } else {
            topMobileMenu.classList.add("top-menu-collapsed");
        }
    });

    //set event listener on mobile sidebar expand button
    sidebarMobileMenuButton.addEventListener("click", function(event) {
        this.classList.toggle("mobile-sidebar-button-activated");
        sidebarMobileMenu.classList.toggle("mobile-sidebar-expanded");
    });

})();
