
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
  
    contactForm.reset();
});

const resumeBtn = document.getElementById('resume-btn');

resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    
    alert('Resume download would start now. In a real application, this would link to a PDF file.');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--secondary)';
        header.style.backdropFilter = 'none';
    }
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};


window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skill-category, .project-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
   
    window.addEventListener('scroll', animateOnScroll);
   
    animateOnScroll();
});


const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    
    document.querySelectorAll('.form-control').forEach(input => {
        input.classList.remove('error');
    });
    
    
    if (name.value.trim() === '') {
        name.classList.add('error');
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('error');
        isValid = false;
    }
    
   
    if (subject.value.trim() === '') {
        subject.classList.add('error');
        isValid = false;
    }
    
    
    if (message.value.trim() === '') {
        message.classList.add('error');
        isValid = false;
    }
    
    return isValid;
};

const style = document.createElement('style');
style.textContent = `
    .form-control.error {
        border-color: #e74c3c;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.3);
    }
`;
document.head.appendChild(style);


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
      
        contactForm.reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});