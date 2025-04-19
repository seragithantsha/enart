// Sticky Navbar Scroll Effect
window.addEventListener("scroll", () => {
	const navbar = document.getElementById("navbar");
	if (window.scrollY > 50) {
		navbar.classList.add("bg-white", "shadow-lg");
		navbar.classList.remove("bg-transparent");
	} else {
		navbar.classList.add("bg-transparent");
		navbar.classList.remove("bg-white", "shadow-lg");
	}
});

// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Toggle mobile menu
    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
    
    // Close menu when clicking on links
    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header-container') && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu on escape key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});

// Contact Form Submission
document.getElementById("consultation-form").addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Thank you! We will contact you shortly.");
});
