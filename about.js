// Select all h1 tags
var sectionNames = document.querySelectorAll('.committee-name');

// Add a click event listener to each h1 tag
sectionNames.forEach(function(h1) {
    h1.addEventListener('click', function() {
        // Select the section under the clicked h1 tag
        var section = h1.nextElementSibling;

        // Toggle the visibility and height of the section
        if (section.style.maxHeight !== 'none') {
            section.style.maxHeight = 'none ';
            section.style.overflow = 'auto';
            section.style.padding = '2vh 5vh';
            section.style.margin = '2% 5%';
            section.style.opacity = '1';
            section.style.borderRadius = '2%';
        } else {
            section.style.maxHeight = '0px';
            section.style.overflow = 'hidden';
            section.style.padding = '0 5vh';
            section.style.margin = '0 5%';
            section.style.borderRadius = '50%';
            section.style.opacity = '0';
        }
    });
});

// window.onload = function() {
//     setTimeout(function() {
//       // Hide the spinner
//       document.querySelector('.lds-hourglass').style.display = 'none';
//       document.querySelector('#page-loader').style.display = 'none';
//     }, 1500); // Delay of 1 second
//   };