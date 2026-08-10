// ================================
// HAMBURGER MOBILE MENU
// ================================

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

function openMenu() {
    navLinks.classList.add('open');
    navOverlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ================================
// ABOUT SECTION SCROLL ANIMATION
// ================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.about-image, .about-content, .box').forEach((el) => {
    observer.observe(el);
});

// ================================
// SERVICE CARDS SCROLL ANIMATION
// ================================

const cards = document.querySelectorAll('.service-card, .featured');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
});

// ================================
// GALLERY SCROLL ANIMATION
// ================================

document.querySelectorAll('.gallery-box, .gallery-heading').forEach((el) => {
    observer.observe(el);
});

// ================================
// CONTACT SECTION SCROLL ANIMATION
// ================================

const contactSection = document.querySelector('.contact');
const contactInfo    = document.querySelector('.contact-info');
const contactForm    = document.querySelector('.contact-form');
const socialMedia    = document.querySelector('.social-media');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

contactObserver.observe(contactSection);
contactObserver.observe(contactInfo);
contactObserver.observe(contactForm);
contactObserver.observe(socialMedia);
