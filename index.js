window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20 ) { // change 0 to the number of pixels at which you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-brand');
    if (window.scrollY > 20 ) { // change 0 to the number of pixels at which you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// page loader and animations start after loader
window.onload = function() {
    setTimeout(function() {
      document.querySelector('.lds-ellipsis').style.display = 'none';
      document.querySelector('#page-loader').style.display = 'none';
      document.querySelector('.comu-logo').classList.add('animate__slideInDown');
      document.querySelector('.landing-text').classList.add('animate__fadeIn');
      document.querySelector('.motto').classList.add('animate__slideInUp');
      document.querySelector('.navbar-brand').classList.add('animate__fadeInLeft');
      document.querySelector('.navbar-nav').classList.add('animate__fadeInRight');
    }, 500);
  };