// Enhanced Portfolio JavaScript with Modular Components and Responsive Features

// Skills Data - Easy to modify and extend
const skillsData = [
    {
        title: "Frontend Development",
        icon: "🌐",
        skills: [
            { name: "HTML5", icon: "🌐", level: "Advanced", progress: 90 },
            { name: "CSS3", icon: "🎨", level: "Advanced", progress: 85 },
            { name: "JavaScript", icon: "⚡", level: "Intermediate", progress: 80 },
            { name: "Responsive Design", icon: "📱", level: "Advanced", progress: 88 }
        ]
    },
    {
        title: "Backend Development",
        icon: "⚙️",
        skills: [
            { name: "Python", icon: "🐍", level: "Advanced", progress: 88 },
            { name: "Django", icon: "🎯", level: "Intermediate", progress: 82 },
            { name: "Flask", icon: "🔥", level: "Intermediate", progress: 78 },
            { name: "Database Design", icon: "🗄️", level: "Intermediate", progress: 75 }
        ]
    },
    {
        title: "AI/ML & Programming",
        icon: "🤖",
        skills: [
            { name: "C Programming", icon: "💻", level: "Intermediate", progress: 75 },
            { name: "NumPy", icon: "🔢", level: "Intermediate", progress: 70 },
            { name: "AI Tools Integration", icon: "🤖", level: "Advanced", progress: 85 },
            { name: "Data Analysis", icon: "📊", level: "Learning", progress: 65 }
        ]
    },
    {
        title: "Tools & Workflow",
        icon: "🛠️",
        skills: [
            { name: "VS Code", icon: "📝", level: "Advanced", progress: 90 },
            { name: "Git & GitHub", icon: "🔗", level: "Intermediate", progress: 78 },
            { name: "Automation Scripts", icon: "⚡", level: "Intermediate", progress: 80 },
            { name: "AI-Powered Design", icon: "🎨", level: "Advanced", progress: 85 }
        ]
    }
];

// Learning Goals Data
const learningGoalsData = [
    {
        title: "Deep Learning",
        icon: "🧠",
        description: "Exploring neural networks and advanced machine learning algorithms",
        progress: 40
    },
    {
        title: "Data Science",
        icon: "📊",
        description: "Mastering pandas, matplotlib, and statistical analysis techniques",
        progress: 60
    },
    {
        title: "Cloud Computing",
        icon: "☁️",
        description: "Learning AWS and cloud deployment for scalable AI applications",
        progress: 25
    }
];

// Projects Data
const projectsData = [
    {
        title: "Interactive Portfolio Website",
        category: "html-css-js",
        type: "Frontend",
        description: "A fully responsive portfolio website built with pure HTML, CSS, and JavaScript featuring smooth animations, modern design, and interactive elements.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        features: [
            "Responsive design with CSS Grid and Flexbox",
            "Smooth scrolling and animations",
            "Interactive JavaScript components",
            "Modern UI/UX design principles"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "Business Landing Page",
        category: "html-css-js",
        type: "Frontend",
        description: "Modern landing page with CSS Grid, Flexbox, and vanilla JavaScript interactions for optimal user experience and conversion optimization.",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["HTML5", "CSS3", "JavaScript", "Forms"],
        features: [
            "Conversion-optimized design",
            "Interactive contact forms",
            "Performance optimized",
            "Cross-browser compatibility"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "AI-Powered Task Management System",
        category: "django",
        type: "Full-Stack",
        description: "Comprehensive task management application built with Django featuring user authentication, CRUD operations, AI-powered task prioritization, and responsive design.",
        image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Django", "Python", "SQLite", "AI Integration"],
        features: [
            "User authentication and authorization",
            "AI-powered task prioritization",
            "Real-time notifications",
            "Advanced filtering and search"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "Personal Blog Platform",
        category: "django",
        type: "Full-Stack",
        description: "Dynamic blog platform with Django featuring content management, user comments, admin dashboard, and SEO optimization for better search visibility.",
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Django", "Python", "PostgreSQL", "SEO"],
        features: [
            "Rich text editor for content creation",
            "Comment system with moderation",
            "SEO-friendly URLs and meta tags",
            "Admin dashboard for content management"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "RESTful API Service",
        category: "flask",
        type: "Backend",
        description: "Lightweight Flask API with JWT authentication, data validation, comprehensive documentation, and rate limiting for secure and efficient data access.",
        image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Flask", "Python", "JWT", "API"],
        features: [
            "JWT-based authentication system",
            "Input validation and sanitization",
            "API documentation with Swagger",
            "Rate limiting and security headers"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "Interactive Analytics Dashboard",
        category: "flask",
        type: "Full-Stack",
        description: "Real-time analytics dashboard built with Flask and Chart.js for data visualization, featuring interactive charts, filters, and export functionality.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Flask", "Chart.js", "Python", "Analytics"],
        features: [
            "Real-time data visualization",
            "Interactive charts and graphs",
            "Data filtering and export options",
            "Responsive dashboard design"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "Advanced Data Analysis Tool",
        category: "python",
        type: "Data Science",
        description: "Comprehensive data analysis tool using NumPy and Pandas for processing large datasets, generating insights, and creating visualizations for business intelligence.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
        features: [
            "Large dataset processing capabilities",
            "Statistical analysis and insights",
            "Interactive data visualizations",
            "Export reports in multiple formats"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "AI-Powered Workflow Automation",
        category: "python",
        type: "AI/Automation",
        description: "Intelligent automation scripts leveraging AI APIs to streamline repetitive tasks, improve productivity, and integrate with various business tools and platforms.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Python", "AI APIs", "Automation", "Scheduling"],
        features: [
            "AI-powered task automation",
            "Integration with multiple APIs",
            "Scheduled task execution",
            "Performance monitoring and logging"
        ],
        liveDemo: "#",
        github: "#"
    },
    {
        title: "Predictive Analytics Model",
        category: "python",
        type: "Machine Learning",
        description: "Machine learning model for predictive analytics using Python and scikit-learn, featuring data preprocessing, model training, and performance evaluation.",
        image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500",
        technologies: ["Python", "Scikit-learn", "NumPy", "ML"],
        features: [
            "Data preprocessing and cleaning",
            "Multiple ML algorithm comparison",
            "Model performance evaluation",
            "Prediction visualization dashboard"
        ],
        liveDemo: "#",
        github: "#"
    }
];

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
        this.loadSkills();
        this.loadLearningGoals();
        this.loadProjects();
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

        // Project tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', this.handleTabClick.bind(this));
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

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
        const cards = document.querySelectorAll('.overview-card, .project-card, .skill-category, .goal-item');
        
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
        const buttons = document.querySelectorAll('.btn, .tab-btn, .overlay-btn');
        buttons.forEach(button => {
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                button.click();
            });
        });
    }

    loadSkills() {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;

        skillsContainer.innerHTML = '';

        skillsData.forEach((category, index) => {
            const categoryElement = this.createSkillCategory(category, index);
            skillsContainer.appendChild(categoryElement);
        });

        // Animate skill bars with delay for mobile
        const delay = ResponsiveUtils.isMobile() ? 100 : 500;
        setTimeout(() => {
            this.animateSkillBars();
        }, delay);
    }

    createSkillCategory(category, index) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        categoryDiv.setAttribute('data-aos', 'fade-up');
        categoryDiv.setAttribute('data-aos-delay', `${index * 100}`);

        const headerDiv = document.createElement('div');
        headerDiv.className = 'category-header';
        headerDiv.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-title">${category.title}</h3>
        `;

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'skill-items';

        category.skills.forEach(skill => {
            const skillItem = this.createSkillItem(skill);
            itemsDiv.appendChild(skillItem);
        });

        categoryDiv.appendChild(headerDiv);
        categoryDiv.appendChild(itemsDiv);

        return categoryDiv;
    }

    createSkillItem(skill) {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.innerHTML = `
            <div class="skill-info">
                <div class="skill-icon">${skill.icon}</div>
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.progress}%"></div>
            </div>
        `;
        return skillDiv;
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const delay = ResponsiveUtils.isMobile() ? 50 : 100;
        
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }, index * delay);
        });
    }

    loadLearningGoals() {
        const goalsContainer = document.getElementById('goals-grid');
        if (!goalsContainer) return;

        goalsContainer.innerHTML = '';

        learningGoalsData.forEach((goal, index) => {
            const goalElement = this.createGoalItem(goal, index);
            goalsContainer.appendChild(goalElement);
        });
    }

    createGoalItem(goal, index) {
        const goalDiv = document.createElement('div');
        goalDiv.className = 'goal-item';
        goalDiv.setAttribute('data-aos', 'zoom-in');
        goalDiv.setAttribute('data-aos-delay', `${index * 150}`);
        goalDiv.innerHTML = `
            <div class="goal-icon">${goal.icon}</div>
            <h3>${goal.title}</h3>
            <p>${goal.description}</p>
            <div class="goal-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${goal.progress}%"></div>
                </div>
                <span class="progress-text">${goal.progress}% Complete</span>
            </div>
        `;
        return goalDiv;
    }

    loadProjects() {
        const projectsContainer = document.getElementById('projects-grid');
        if (!projectsContainer) return;

        this.displayProjects('all');
    }

    displayProjects(filter) {
        const projectsContainer = document.getElementById('projects-grid');
        if (!projectsContainer) return;

        projectsContainer.innerHTML = '';

        const filteredProjects = filter === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === filter);

        filteredProjects.forEach((project, index) => {
            const projectElement = this.createProjectCard(project, index);
            projectsContainer.appendChild(projectElement);
        });

        // Refresh animations for new projects
        if (this.animationObserver) {
            setTimeout(() => {
                this.animationObserver.refresh();
            }, 100);
        }
    }

    createProjectCard(project, index) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        projectDiv.setAttribute('data-category', project.category);
        projectDiv.setAttribute('data-aos', 'fade-up');
        projectDiv.setAttribute('data-aos-delay', `${index * 100}`);

        const featuresHTML = project.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        const technologiesHTML = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        projectDiv.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="overlay-content">
                        <a href="${project.liveDemo}" class="overlay-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href="${project.github}" class="overlay-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <div class="project-category">${project.type}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-features">
                    <ul>${featuresHTML}</ul>
                </div>
                <div class="project-tech">${technologiesHTML}</div>
            </div>
        `;

        return projectDiv;
    }

    handleTabClick(event) {
        const clickedTab = event.target;
        const tabFilter = clickedTab.getAttribute('data-tab');

        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.classList.remove('active');
        });
        clickedTab.classList.add('active');

        // Filter projects with animation
        this.displayProjects(tabFilter);

        // Scroll to projects grid on mobile
        if (ResponsiveUtils.isMobile()) {
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid) {
                setTimeout(() => {
                    projectsGrid.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 300);
            }
        }
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
        const revealElements = document.querySelectorAll('.overview-card, .featured-card, .skill-category, .goal-item');
        
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

    handleFormSubmit(event) {
        event.preventDefault();
        
        const submitBtn = event.target.querySelector('.form-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'block';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(event.target);
        
        // Send data to Flask backend
        fetch('/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
            
            if (data.status === 'success') {
                this.showNotification(data.message, 'success');
                event.target.reset();
            } else {
                this.showNotification('Failed to send message. Please try again.', 'error');
            }
        })
        .catch(error => {
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
            this.showNotification('Failed to send message. Please try again.', 'error');
        });
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
        AnimationObserver,
        skillsData, 
        learningGoalsData, 
        projectsData 
    };
}