// ==========================================
// MAIN JAVASCRIPT FILE
// ==========================================

// Load HTML Sections
async function loadSection(sectionId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        const element = document.getElementById(sectionId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading section ${sectionId}:`, error);
    }
}

// Load all sections on page load
document.addEventListener('DOMContentLoaded', async function() {
    // Determine which sections to load based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Load header and footer on all pages
    await loadSection('header-section', 'sections/header.html');
    await loadSection('footer-section', 'sections/footer.html');
    
    // Load page-specific sections
    if (currentPage === 'index.html' || currentPage === '') {
        await loadSection('hero-section', 'sections/hero.html');
        await loadSection('stats-section', 'sections/stats.html');
        await loadSection('services-preview-section', 'sections/services-preview.html');
        await loadSection('cta-section', 'sections/cta.html');
        
        // Initialize stats counter after stats section loads
        setTimeout(initStatsCounter, 100);
    } else if (currentPage === 'services.html') {
        await loadSection('services-list-section', 'sections/services-list.html');
        await loadSection('cta-section', 'sections/cta.html');
    }
    
    // Initialize all interactive features after sections load
    setTimeout(initializeFeatures, 200);
});

// Initialize all interactive features
function initializeFeatures() {
    initMobileMenu();
    initSmoothScroll();
    initScrollEffects();
    initFormValidation();
    updateCurrentYear();
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Effects (Header shadow, etc.)
function initScrollEffects() {
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Stats Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    if (statNumbers.length === 0) return;
    
    const options = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50; // 50 frames
    const duration = 2000; // 2 seconds
    const stepTime = duration / 50;
    
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// Form Validation (Contact Form)
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate
            if (!name || !email || !service || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // If validation passes, you can submit to your backend
            // For now, just show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            // TODO: Replace with actual form submission to your backend
            // Example:
            // submitFormToBackend({name, email, service, message});
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Update Current Year in Footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Helper function to submit form data (for future backend integration)
async function submitFormToBackend(formData) {
    try {
        const response = await fetch('YOUR_BACKEND_URL/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Form submission failed');
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log when everything is loaded
console.log('Tech Affairs website loaded successfully!');