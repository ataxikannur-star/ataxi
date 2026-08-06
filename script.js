const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".about-image, .about-content, .box").forEach((el)=>{
    observer.observe(el);
});

const cards = document.querySelectorAll(".service-card, .featured");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
});
// ================================
// CONTACT SECTION SCROLL ANIMATION
// ================================

const contactSection = document.querySelector(".contact");
const contactInfo = document.querySelector(".contact-info");
const contactForm = document.querySelector(".contact-form");
const socialMedia = document.querySelector(".social-media");

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".gallery-box, .gallery-heading").forEach((el)=>{
    observer.observe(el);
});

contactObserver.observe(contactSection);
contactObserver.observe(contactInfo);
contactObserver.observe(contactForm);
contactObserver.observe(socialMedia);