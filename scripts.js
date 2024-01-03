// General scripts for the site that every page uses

// Set footer year
const date = new Date();
const year = date.getFullYear();
document.querySelector('.footer-text').innerHTML = 'IEEE Çanakkale Onsekiz Mart Üniversitesi &copy; ' + year;

// Hide loader
window.onload = function() {
    setTimeout(function() {
      document.querySelector('.lds-ellipsis').style.display = 'none';
      document.querySelector('#page-loader').style.display = 'none';
    }, 500);
};

// Add scroll event listener to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    if (window.scrollY > 20 ) {
        navbar.classList.add('scrolled');
        navbarBrand.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
        navbarBrand.classList.remove('scrolled');

    }
});