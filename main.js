// KenyanBiz Hub Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hide');
    });

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger
            const hamburgers = document.querySelectorAll('.hamburger');
            hamburgers.forEach(hamburger => {
                hamburger.classList.toggle('active');
            });
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const hamburgers = document.querySelectorAll('.hamburger');
                hamburgers.forEach(hamburger => {
                    hamburger.classList.remove('active');
                });
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active Section Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navItemsTop = document.querySelectorAll('.nav-links a[href^="#"]');

    function activateSection() {
        let scrollPosition = window.scrollY + 100; // Account for navbar height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                navItemsTop.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateSection);
    // Initial call in case page loads mid-section
    activateSection();

    // Portfolio Filtering (if applicable)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Add fade-in animation
                        item.classList.add('fade-in');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Form Validation and Submission (basic)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields');
                return;
            }

            // Simple email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // If validation passes, show success message
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Animation on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    // Initial check
    checkFade();

    // WhatsApp Button Hover Effect (additional)
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add fade-in class to elements that should animate
    document.addEventListener('DOMContentLoaded', function() {
        const elementsToAnimate = document.querySelectorAll(
            '.service-card, .feature-card, .stat-item, .testimonial-card, ' +
            '.portfolio-item, .product-card, .pricing-card, .team-member, ' +
            '.blog-card, .about-text, .about-image, .whatsapp-contact, .contact-form'
        );

        elementsToAnimate.forEach((element, index) => {
            element.classList.add('fade-in');
            element.classList.add(`fade-in-delay-${index % 5}`);
        });
    });
});