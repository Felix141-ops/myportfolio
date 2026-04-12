// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .achievement-card, .skill-category').forEach(el => {
    observer.observe(el);
});

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            subject: contactForm.querySelectorAll('input[type="text"]')[1].value,
            message: contactForm.querySelector('textarea').value
        };

        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        const submitButton = contactForm.querySelector('button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Message Sent! ✓';
        submitButton.style.background = '#06d6a0';

        // Reset form
        contactForm.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
        }, 3000);

        console.log('Form data:', data);
    });
}

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// COUNTER ANIMATIONS
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 50);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            setTimeout(updateCounter, 50);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// ============================================
// PARALLAX EFFECT (Optional Enhancement)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// ============================================
// ADD ANIMATION CLASSES
// ============================================

// Add CSS for in-view animation
const style = document.createElement('style');
style.textContent = `
    .project-card, 
    .achievement-card, 
    .skill-category {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .project-card.in-view, 
    .achievement-card.in-view, 
    .skill-category.in-view {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        font-weight: 600;
    }

    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navStyle);

// ============================================
// PROJECT FILTER (Optional Enhancement)
// ============================================

// This allows for future implementation of project filtering
const projects = document.querySelectorAll('.project-card');
const projectTags = document.querySelectorAll('.project-badge');

// You can use this data to implement a filter feature
const projectData = Array.from(projects).map(project => ({
    element: project,
    badge: project.querySelector('.project-badge')?.textContent || 'All',
    title: project.querySelector('.project-title')?.textContent || ''
}));

console.log('Portfolio loaded successfully');
console.log('Projects available:', projectData.length);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #0066cc;
    color: white;
    padding: 8px;
    z-index: 100;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy loading images (when implemented)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll helper
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Get viewport height
function getViewportHeight() {
    return Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
    );
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

console.log('All portfolio scripts loaded and ready');
