let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle(sticky, window.scrollY > 100);
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'right' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box, contact form', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .about-img img , .contact, .footer', { origin: 'left' });