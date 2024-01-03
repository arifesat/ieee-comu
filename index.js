// Scripts for index.html

// Landing animations after page loader dissapears
window.onload = function() {
    setTimeout(function() {
      document.querySelector('.comu-logo').classList.add('animate__slideInDown');
      document.querySelector('.landing-text').classList.add('animate__fadeIn');
      document.querySelector('.motto').classList.add('animate__slideInUp');
      document.querySelector('.navbar-brand').classList.add('animate__fadeInLeft');
      document.querySelector('.navbar-nav').classList.add('animate__fadeInRight');
    }, 500);
};