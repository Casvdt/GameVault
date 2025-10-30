// Navbar scroll behavior for mobile
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    const mobileBreakpoint = 992; // Match this with your CSS breakpoint
    
    // Only run on mobile
    if (window.innerWidth < mobileBreakpoint) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Always show navbar at the top of the page
            if (currentScroll <= 0) {
                navbar.classList.remove('hide');
                return;
            }
            
            // Scrolling down
            if (currentScroll > lastScroll && !navbar.classList.contains('hide')) {
                navbar.classList.add('hide');
            } 
            // Scrolling up
            else if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
                navbar.classList.remove('hide');
            }
            
            lastScroll = currentScroll;
        });
    }
});
