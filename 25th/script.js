// Smooth scroll function
function scrollToForm() {
    const form = document.getElementById('registration-form');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = form.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Form submission handler
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value
    };
    
    console.log('Registration Data:', formData);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    this.reset();
});

function showSuccessMessage() {
    // Create success modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        animation: slideUp 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
        <h2 style="font-size: 32px; margin-bottom: 15px; color: white;">Registration Successful!</h2>
        <p style="font-size: 18px; color: rgba(255, 255, 255, 0.9); margin-bottom: 25px;">
            Thank you for registering! We've sent a confirmation email with workshop details.
        </p>
        <button onclick="this.closest('div[style*=fixed]').remove()" style="
            background: white;
            color: #667eea;
            border: none;
            padding: 15px 40px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
        ">Got it!</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        modal.remove();
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .registration, .comparison, .faq');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Countdown timer for seats (optional dynamic feature)
let seatsLeft = 12;
const seatsElement = document.querySelector('.seats-left');

// You can update this dynamically from a backend
function updateSeatsLeft(seats) {
    seatsLeft = seats;
    seatsElement.textContent = `Only ${seatsLeft} Seats Left!`;
    
    if (seatsLeft <= 5) {
        seatsElement.style.animation = 'blink 0.8s infinite';
    }
}

// Particle effect for hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesCount = 30;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
        hero.appendChild(particle);
    }
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Phone number validation
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    e.target.value = value;
});

// Email validation with visual feedback
document.getElementById('email').addEventListener('blur', function(e) {
    const email = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailPattern.test(email)) {
        e.target.style.borderColor = '#ff4757';
    } else {
        e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)';
    }
});
