// Scroll Reveal Animation
function scrollReveal() {
    const revealElements = document.querySelectorAll('.feature-item, .service-item, .project-item, .value-item, .team-member, .certification-item, .process-item');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
        
        revealElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + elementHeight;
            
            // Check if element is in viewport
            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                element.classList.add('reveal');
            }
        });
    }
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    scrollReveal();
    
    // Add animation classes after a short delay to allow for initial rendering
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('animate__animated', 'animate__fadeInUp');
    }, 300);
});

// Hero Image Parallax Effect
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
}

// Initialize parallax effect
parallaxEffect();

// Counter Animation for Milestones
function animateCounters() {
    const counters = document.querySelectorAll('.milestone-number');
    const speed = 200;
    
    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target + '+';
        }
    }
    
    function startCountersWhenVisible() {
        const milestonesSection = document.querySelector('.milestones');
        if (!milestonesSection) return;
        
        const sectionTop = milestonesSection.offsetTop;
        const sectionHeight = milestonesSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
            counters.forEach(counter => {
                counter.setAttribute('data-target', counter.innerText);
                counter.innerText = '0';
                animateCounter(counter);
            });
            // Remove event listener after animation starts
            window.removeEventListener('scroll', startCountersWhenVisible);
        }
    }
    
    // Start counters when section is visible
    window.addEventListener('scroll', startCountersWhenVisible);
    // Initial check in case section is already visible
    startCountersWhenVisible();
}

// Initialize counter animation
animateCounters();

// Image Hover Zoom Effect
function imageHoverZoom() {
    const images = document.querySelectorAll('.about-image img, .service-image img, .project-image img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

// Initialize image hover zoom
imageHoverZoom();