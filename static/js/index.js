// Enhanced Portfolio JavaScript with Modular Components and Responsive Features

// Responsive Utilities
class ResponsiveUtils {
    static getBreakpoint() {
        const width = window.innerWidth;
        if (width >= 1440) return 'xl';
        if (width >= 1024) return 'lg';
        if (width >= 768) return 'md';
        if (width >= 481) return 'sm';
        return 'xs';
    }

    static isMobile() {
        return window.innerWidth < 768;
    }

    static isTablet() {
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    }

    static isDesktop() {
        return window.innerWidth >= 1024;
    }

    static isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    static supportsHover() {
        return window.matchMedia('(hover: hover)').matches;
    }

    static prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    static debounce(func, wait) {
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

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Animation Observer for AOS-like functionality
class AnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        if (!ResponsiveUtils.prefersReducedMotion()) {
            this.observer = new IntersectionObserver(
                this.handleIntersection.bind(this),
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );
            this.observeElements();
        }
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }

    observeElements() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            if (this.observer) {
                this.observer.observe(element);
            }
        });
    }

    refresh() {
        if (this.observer) {
            this.observer.disconnect();
            this.observeElements();
        }
    }
}

// Main Application Class
class PortfolioApp {
    constructor() {
        this.animationObserver = null;
        this.resizeHandler = null;
        this.scrollHandler = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.initScrollEffects();
        this.initMobileMenu();
        this.animateCounters();
        this.initResponsiveFeatures();
        this.initAccessibility();
    }

    setupEventListeners() {
        // Optimized scroll handler
        this.scrollHandler = ResponsiveUtils.throttle(this.handleScroll.bind(this), 16);
        window.addEventListener('scroll', this.scrollHandler, { passive: true });

        // Optimized resize handler
        this.resizeHandler = ResponsiveUtils.debounce(this.handleResize.bind(this), 250);
        window.addEventListener('resize', this.resizeHandler);

        // Button ripple effects
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', this.createRipple.bind(this));
        });

        // Smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', this.smoothScroll.bind(this));
        });

        // Touch events for mobile
        if (ResponsiveUtils.isTouchDevice()) {
            this.initTouchEvents();
        }
    }

    handleScroll() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    handleResize() {
        // Update mobile menu state
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        
        if (ResponsiveUtils.isDesktop()) {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileToggle) mobileToggle.classList.remove('active');
        }

        // Refresh animations
        if (this.animationObserver) {
            this.animationObserver.refresh();
        }

        // Update AI globe size based on screen size
        this.updateAIGlobeSize();
    }

    updateAIGlobeSize() {
        const aiGlobe = document.querySelector('.ai-globe');
        if (!aiGlobe) return;

        const breakpoint = ResponsiveUtils.getBreakpoint();
        const sizes = {
            xl: { globe: 500, orbit1: 250, orbit2: 375, orbit3: 500, core: 100 },
            lg: { globe: 400, orbit1: 200, orbit2: 300, orbit3: 400, core: 80 },
            md: { globe: 350, orbit1: 175, orbit2: 262, orbit3: 350, core: 70 },
            sm: { globe: 280, orbit1: 140, orbit2: 210, orbit3: 280, core: 60 },
            xs: { globe: 240, orbit1: 120, orbit2: 180, orbit3: 240, core: 50 }
        };

        const size = sizes[breakpoint];
        if (size) {
            aiGlobe.style.width = `${size.globe}px`;
            aiGlobe.style.height = `${size.globe}px`;

            const orbit1 = aiGlobe.querySelector('.orbit-1');
            const orbit2 = aiGlobe.querySelector('.orbit-2');
            const orbit3 = aiGlobe.querySelector('.orbit-3');
            const core = aiGlobe.querySelector('.core');

            if (orbit1) {
                orbit1.style.width = `${size.orbit1}px`;
                orbit1.style.height = `${size.orbit1}px`;
            }
            if (orbit2) {
                orbit2.style.width = `${size.orbit2}px`;
                orbit2.style.height = `${size.orbit2}px`;
            }
            if (orbit3) {
                orbit3.style.width = `${size.orbit3}px`;
                orbit3.style.height = `${size.orbit3}px`;
            }
            if (core) {
                core.style.width = `${size.core}px`;
                core.style.height = `${size.core}px`;
            }
        }
    }

    initAnimations() {
        if (!ResponsiveUtils.prefersReducedMotion()) {
            this.animationObserver = new AnimationObserver();
        }

        // Animate text elements on load
        const animateElements = document.querySelectorAll('.animate-text, .fade-in-up');
        animateElements.forEach((element, index) => {
            if (!ResponsiveUtils.prefersReducedMotion()) {
                element.style.animationDelay = `${index * 0.2}s`;
            }
        });
    }

    initResponsiveFeatures() {
        // Add responsive classes to body
        document.body.classList.add(`breakpoint-${ResponsiveUtils.getBreakpoint()}`);
        
        if (ResponsiveUtils.isTouchDevice()) {
            document.body.classList.add('touch-device');
        }

        if (!ResponsiveUtils.supportsHover()) {
            document.body.classList.add('no-hover');
        }

        // Update on resize
        window.addEventListener('resize', ResponsiveUtils.debounce(() => {
            // Remove old breakpoint classes
            document.body.classList.remove('breakpoint-xl', 'breakpoint-lg', 'breakpoint-md', 'breakpoint-sm', 'breakpoint-xs');
            // Add new breakpoint class
            document.body.classList.add(`breakpoint-${ResponsiveUtils.getBreakpoint()}`);
        }, 250));
    }

    initAccessibility() {
        // Keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('user-is-tabbing');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('user-is-tabbing');
        });

        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content ID if not exists
        const mainContent = document.querySelector('main') || document.querySelector('.hero');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }

    initTouchEvents() {
        // Add touch-friendly interactions
        const cards = document.querySelectorAll('.overview-card, .featured-card');
        
        cards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.classList.add('touch-active');
            }, { passive: true });

            card.addEventListener('touchend', () => {
                setTimeout(() => {
                    card.classList.remove('touch-active');
                }, 150);
            }, { passive: true });
        });

        // Prevent zoom on double tap for buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                button.click();
            });
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-item[data-count]');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count'));
            const numberElement = counter.querySelector('.stat-number');
            let current = 0;
            const increment = target / (ResponsiveUtils.isMobile() ? 20 : 30);
            const duration = ResponsiveUtils.isMobile() ? 1000 : 1500;
            const stepTime = duration / (target / increment);
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                numberElement.textContent = Math.floor(current) + '+';
            }, stepTime);
        };

        // Intersection Observer for counter animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    initScrollEffects() {
        // Parallax effect for hero section (disabled on mobile for performance)
        if (!ResponsiveUtils.isMobile() && !ResponsiveUtils.prefersReducedMotion()) {
            const hero = document.querySelector('.hero');
            if (hero) {
                const parallaxHandler = ResponsiveUtils.throttle(() => {
                    const scrolled = window.pageYOffset;
                    const parallax = scrolled * 0.3;
                    hero.style.transform = `translateY(${parallax}px)`;
                }, 16);
                
                window.addEventListener('scroll', parallaxHandler, { passive: true });
            }
        }

        // Reveal animation on scroll
        const revealElements = document.querySelectorAll('.overview-card, .featured-card');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, { 
            threshold: ResponsiveUtils.isMobile() ? 0.05 : 0.1,
            rootMargin: ResponsiveUtils.isMobile() ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    initMobileMenu() {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                if (navMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });

            // Close menu when clicking nav links
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    createRipple(event) {
        const button = event.currentTarget;
        let ripple = button.querySelector('.btn-ripple');
        
        if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            button.appendChild(ripple);
        }
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Remove previous animation
        ripple.classList.remove('btn-ripple');
        void ripple.offsetWidth; // Trigger reflow
        ripple.classList.add('btn-ripple');
    }

    smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const headerOffset = ResponsiveUtils.isMobile() ? 80 : 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-large);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        if (type === 'success') {
            notification.style.background = 'var(--success-color)';
        } else if (type === 'error') {
            notification.style.background = 'var(--error-color)';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    
                    if (loadTime > 3000) {
                        console.warn('Page load time is slow:', loadTime + 'ms');
                    }
                }, 0);
            });
        }
    }

    // Cleanup method
    destroy() {
        // Remove event listeners
        if (this.scrollHandler) {
            window.removeEventListener('scroll', this.scrollHandler);
        }
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
        
        // Disconnect observers
        if (this.animationObserver && this.animationObserver.observer) {
            this.animationObserver.observer.disconnect();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class initially
    document.body.classList.add('loading');
    
    // Initialize app
    const app = new PortfolioApp();
    
    // Remove loading class after everything is loaded
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        
        // Measure performance
        app.measurePerformance();
    });
    
    // Handle page visibility changes for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations when page is not visible
            document.body.classList.add('page-hidden');
        } else {
            document.body.classList.remove('page-hidden');
        }
    });
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        PortfolioApp, 
        ResponsiveUtils, 
        AnimationObserver
    };
}