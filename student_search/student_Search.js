const scrollLink = document.getElementById("scrolldown");

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    scrollLink.style.bottom = (scrollPosition >= 100) ? "20px" : "-50px";
});