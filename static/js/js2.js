// profile.js

document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive functionality here
    
    // For example, you could add a function to toggle visibility of certain sections
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const contentSection = this.nextElementSibling;
            if (contentSection.style.display === 'none') {
                contentSection.style.display = 'block';
                this.classList.remove('collapsed');
            } else {
                contentSection.style.display = 'none';
                this.classList.add('collapsed');
            }
        });
    });
});