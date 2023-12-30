// Select all section names
var sectionNames = document.querySelectorAll('#tvt-section, #comsoc-section, #pes-section, #wie-section, #embs-section, #cs-section');

// Add a click event listener to each section name
sectionNames.forEach(function(section) {
    section.addEventListener('click', function() {
        // Select all members in the clicked section
        var members = section.querySelectorAll('.member');

        // Toggle the visibility and height of each member
        members.forEach(function(member) {
            if (member.style.visibility === 'hidden') {
                member.style.visibility = 'visible';
                section.style.height = 'auto'; // Expand the height to fit all members
            } else {
                member.style.visibility = 'hidden';
                section.style.height = '0'; // Shrink the height to fit only the h1 tag
            }

            if (section.style.maxHeight !== 'auto') {
                section.style.maxHeight = 'auto'; // Expand the max-height to fit all members
            } else {
                section.style.maxHeight = '0'; // Shrink the max-height to fit only the h1 tag
            }
        });
    });
});
