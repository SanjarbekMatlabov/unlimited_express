document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
    });
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a, .footer-links a, .legal-links a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.textContent = '☰';
            }
        });
    });

    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card, .service-card, .driver-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });

    featureCards.forEach(card => observer.observe(card));
});