// Changes the color of the navbar when the user scrolls down the page

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-about-page');
    if (window.scrollY > 20 ) { // change 0 to the number of pixels at which you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});