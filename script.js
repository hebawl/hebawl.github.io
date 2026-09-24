// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Handle CV download - update this with your actual CV URL
document.addEventListener('DOMContentLoaded', function() {
    const cvBtn = document.querySelector('.downloads-content .download-item:first-child .download-btn');
    if (cvBtn) {
        // Replace with your actual CV file URL from GitHub or other source
        cvBtn.href = '#'; // Update this link to your CV
        cvBtn.addEventListener('click', function(e) {
            // You can replace this with a direct GitHub raw URL to your CV
            console.log('CV download link needs to be configured');
        });
    }
});
