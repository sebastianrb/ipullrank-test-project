(function() {

    var topMobileMenuButton = document.querySelector(".header__sticky-nav-list--mobile-button");
    var topMobileMenu = document.querySelector(".header__sticky-nav-list");

    var sidebarMobileMenuButton = document.querySelector(".mobile-sidebar-button");
    var sidebarMobileMenu = document.querySelector(".main-sidebar");

    topMobileMenuButton.addEventListener("click", function(event) {
        console.log("Clicked");
        if(topMobileMenu.classList.contains("top-menu-collapsed")) {
            topMobileMenu.classList.remove("top-menu-collapsed");
        } else {
            topMobileMenu.classList.add("top-menu-collapsed");
        }
    });


    sidebarMobileMenuButton.addEventListener("click", function(event) {
        this.classList.toggle("mobile-sidebar-button-activated");
        sidebarMobileMenu.classList.toggle("mobile-sidebar-expanded");
    });

})();
