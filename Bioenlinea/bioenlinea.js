document.getElementById("hamburger-menu").addEventListener("click", function () {
    var mobileNav = document.getElementById("mobile-nav");
    this.classList.toggle("change");
    mobileNav.style.display = (mobileNav.style.display === "block") ? "none" : "block";
});