// testimonials.js

// Smooth scroll for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(button.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Popup for testimonials
const testimonials = document.querySelectorAll('.testimonial-card');
const popup = document.createElement('div');
popup.classList.add('popup');
popup.style.display = 'none';
popup.innerHTML = `
    <div class="popup-content">
        <span class="close-btn">&times;</span>
        <div class="popup-text"></div>
    </div>
`;
document.body.appendChild(popup);

testimonials.forEach(testimonial => {
    testimonial.addEventListener('click', () => {
        const content = testimonial.querySelector('p').textContent;
        const popupText = popup.querySelector('.popup-text');
        popupText.textContent = content;
        popup.style.display = 'block';
    });
});

document.querySelector('.popup .close-btn').addEventListener('click', () => {
    popup.style.display = 'none';
});

// Autoscroll testimonials
let index = 0;
function autoScroll() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length > 0) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % cards.length;
    }
}
setInterval(autoScroll, 5000);


toggleVideoBtn.addEventListener('click', () => {
    const iframe = videoSection.querySelector('iframe');
    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
    }
});
