// main.js

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll animations for sections
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

// Popup for callback button
const callbackBtn = document.querySelector('.floating-icon');
const popup = document.createElement('div');
popup.classList.add('popup');
popup.style.display = 'none';
popup.innerHTML = `
    <div class="popup-content">
        <span class="close-btn">&times;</span>
        <p>Свяжитесь с нами для консультации!</p>
        <button class="btn">Перейти к контактам</button>
    </div>
`;
document.body.appendChild(popup);

callbackBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

document.querySelector('.popup .close-btn').addEventListener('click', () => {
    popup.style.display = 'none';
});

// Back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
