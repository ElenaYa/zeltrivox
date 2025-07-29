document.addEventListener('DOMContentLoaded', function() {
    
    // Update copyright year
    const yearElement = document.getElementById('js-get-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Mobile Menu Functionality
    const menuButton = document.querySelector('.btn-menu');
    const header = document.querySelector('.header');
    const body = document.body;
    
    if (menuButton && header) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            header.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!header.contains(e.target) && !menuButton.contains(e.target)) {
                header.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                header.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 100; // Account for fixed header
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    header.classList.remove('active');
                    body.classList.remove('menu-open');
                }
            }
        });
    });
    
    // Initialize Swiper for main hero slider
    const mainSwiper = document.querySelector('.js-swiper-main');
    if (mainSwiper && typeof Swiper !== 'undefined') {
        new Swiper('.js-swiper-main', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
        });
    }
    
    // Initialize horizontal swipers for game screenshots
    const horizontalSwipers = document.querySelectorAll('.js-swiper-hor');
    horizontalSwipers.forEach(swiperEl => {
        if (typeof Swiper !== 'undefined') {
            new Swiper(swiperEl, {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }
            });
        }
    });
    
    // Initialize regular swipers
    const regularSwipers = document.querySelectorAll('.js-swiper:not(.js-swiper-main):not(.js-swiper-hor)');
    regularSwipers.forEach(swiperEl => {
        if (typeof Swiper !== 'undefined') {
            new Swiper(swiperEl, {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }
            });
        }
    });
    
    // Sweet Bonanza-style particle effects
    // function createParticle() {
    //     const particles = ['🐔', '🥚', '🌟', '🎮', '🍭', '🌈', '💎', '🎯', '🏆', '⭐'];
    //     const particle = document.createElement('div');
    //     particle.textContent = particles[Math.floor(Math.random() * particles.length)];
    //     particle.style.position = 'fixed';
    //     particle.style.left = Math.random() * 100 + 'vw';
    //     particle.style.top = '100vh';
    //     particle.style.fontSize = Math.random() * 20 + 15 + 'px';
    //     particle.style.pointerEvents = 'none';
    //     particle.style.zIndex = '1';
    //     particle.style.opacity = '0.7';
    //     particle.style.animation = `floatUp ${Math.random() * 3 + 4}s linear forwards`;
    //     document.body.appendChild(particle);
    //     setTimeout(() => {
    //         if (particle.parentNode) {
    //             particle.remove();
    //         }
    //     }, 7000);
    // }
    
    // Add CSS for particle animation if not exists
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes floatUp {
                to {
                    transform: translateY(-110vh) rotate(720deg) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create particles periodically (reduced frequency for performance)
    
    // // Chicken Road-style floating elements
    // function createFloatingElement() {
    //     const elements = ['🚜', '🌾', '🏡', '🌽', '🌻', '🐣'];
    //     const element = document.createElement('div');
    //     element.textContent = elements[Math.floor(Math.random() * elements.length)];
    //     element.style.position = 'fixed';
    //     element.style.left = '-50px';
    //     element.style.top = Math.random() * 70 + 15 + 'vh';
    //     element.style.fontSize = Math.random() * 15 + 20 + 'px';
    //     element.style.pointerEvents = 'none';
    //     element.style.zIndex = '1';
    //     element.style.opacity = '0.4';
    //     element.style.animation = `floatAcross ${Math.random() * 10 + 15}s linear forwards`;
        
    //     document.body.appendChild(element);
        
    //     setTimeout(() => {
    //         if (element.parentNode) {
    //             element.remove();
    //         }
    //     }, 25000);
    // }
    
    // Add CSS for floating animation
    if (!document.querySelector('#floating-styles')) {
        const style = document.createElement('style');
        style.id = 'floating-styles';
        style.textContent = `
            @keyframes floatAcross {
                to {
                    transform: translateX(calc(100vw + 100px)) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create floating elements less frequently
    // setInterval(createFloatingElement, 8000);
    
    // Scroll effects for header
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const ctaBanner = document.querySelector('.cta-banner');
        
        if (scrollTop > scrollThreshold) {
            header.classList.add('scrolled');
            if (ctaBanner) {
                ctaBanner.style.transform = 'translateY(-100%)';
            }
        } else {
            header.classList.remove('scrolled');
            if (ctaBanner) {
                ctaBanner.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Form handling
    const contactForm = document.querySelector('.form-contacts');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Add loading state
            const submitBtn = contactForm.querySelector('input[type="submit"]');
            if (submitBtn) {
                submitBtn.value = 'Enviando...';
                submitBtn.disabled = true;
            }
            
            // Add success/error handling here if needed
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.value = 'Enviar Consulta';
                    submitBtn.disabled = false;
                }
            }, 2000);
        });
        
        // Form validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                    this.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.2)';
                } else {
                    this.style.borderColor = '#27ae60';
                    this.style.boxShadow = '0 0 0 3px rgba(39, 174, 96, 0.2)';
                }
            });
        });
    }
    
    // Intersection Observer for animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add special effects for certain elements
                    if (entry.target.classList.contains('value-card')) {
                        entry.target.style.animation = 'bounceIn 0.8s ease-out';
                    }
                    
                    if (entry.target.classList.contains('team-member')) {
                        entry.target.style.animation = 'slideInUp 0.8s ease-out';
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.value-card, .team-member, .article-news, .info-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });
        
        // Add animation keyframes
        if (!document.querySelector('#animation-styles')) {
            const style = document.createElement('style');
            style.id = 'animation-styles';
            style.textContent = `
                @keyframes bounceIn {
                    0% { transform: scale(0.3) translateY(30px); opacity: 0; }
                    50% { transform: scale(1.05) translateY(-10px); }
                    70% { transform: scale(0.9) translateY(5px); }
                    100% { transform: scale(1) translateY(0); opacity: 1; }
                }
                
                @keyframes slideInUp {
                    0% { transform: translateY(50px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                .pulse-effect {
                    animation: pulse 2s infinite;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn, .btn-small, .btn-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add special effects to CTA button
    const ctaButtons = document.querySelectorAll('.cta-main-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - e.target.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - e.target.offsetTop) + 'px';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.marginLeft = ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Performance optimization: Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Easter egg: Konami code for special Argentine effect
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length) {
            let isMatch = true;
            for (let i = 0; i < konamiSequence.length; i++) {
                if (konamiCode[i] !== konamiSequence[i]) {
                    isMatch = false;
                    break;
                }
            }
            
            if (isMatch) {
                // Special Argentine celebration effect
                document.body.style.background = 'linear-gradient(45deg, #74ACDF, #FFF, #74ACDF)';
                
                // Create Argentine flag particles
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        const flag = document.createElement('div');
                        flag.textContent = '🇦🇷';
                        flag.style.position = 'fixed';
                        flag.style.left = Math.random() * 100 + 'vw';
                        flag.style.top = '100vh';
                        flag.style.fontSize = '30px';
                        flag.style.pointerEvents = 'none';
                        flag.style.zIndex = '9999';
                        flag.style.animation = 'floatUp 3s linear forwards';
                        
                        document.body.appendChild(flag);
                        
                        setTimeout(() => {
                            if (flag.parentNode) {
                                flag.remove();
                            }
                        }, 3000);
                    }, i * 100);
                }
                
                // Show special message
                const message = document.createElement('div');
                message.textContent = '¡VAMOS ARGENTINA! 🇦🇷⚽🏆';
                message.style.position = 'fixed';
                message.style.top = '50%';
                message.style.left = '50%';
                message.style.transform = 'translate(-50%, -50%)';
                message.style.background = 'linear-gradient(45deg, #74ACDF, #FFF, #74ACDF)';
                message.style.padding = '20px 40px';
                message.style.borderRadius = '20px';
                message.style.fontSize = '24px';
                message.style.fontWeight = 'bold';
                message.style.color = '#2C1810';
                message.style.zIndex = '10000';
                message.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                message.style.animation = 'pulse 2s infinite';
                
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.remove();
                    document.body.style.background = '';
                }, 5000);
                
                konamiCode = [];
            }
        }
    });
    
  
});

// Удаляем все плавающие элементы с анимацией floatAcross
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('div').forEach(el => {
        if (el.style && el.style.animation && el.style.animation.includes('floatAcross')) {
            el.remove();
        }
    });
});

// Export functions for potential use in other scripts
// window.RunawayChickenAR = {
//     createParticle: function() {
//         // Manually trigger particle creation
//         const particles = ['🐔', '🥚', '🌟', '🎮', '🍭'];
//         const particle = document.createElement('div');
//         particle.textContent = particles[Math.floor(Math.random() * particles.length)];
//         particle.style.position = 'fixed';
//         particle.style.left = Math.random() * 100 + 'vw';
//         particle.style.top = '100vh';
//         particle.style.fontSize = '25px';
//         particle.style.pointerEvents = 'none';
//         particle.style.zIndex = '1';
//         particle.style.animation = 'floatUp 4s linear forwards';
        
//         document.body.appendChild(particle);
        
//         setTimeout(() => {
//             if (particle.parentNode) {
//                 particle.remove();
//             }
//         }, 4000);
//     },
    
//     showSuccessMessage: function(message) {
//         const toast = document.createElement('div');
//         toast.textContent = message || '¡Éxito! 🎉';
//         toast.style.position = 'fixed';
//         toast.style.top = '20px';
//         toast.style.right = '20px';
//         toast.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
//         toast.style.color = 'white';
//         toast.style.padding = '15px 25px';
//         toast.style.borderRadius = '10px';
//         toast.style.zIndex = '10000';
//         toast.style.fontWeight = 'bold';
//         toast.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
//         toast.style.animation = 'slideInRight 0.5s ease-out';
        
//         document.body.appendChild(toast);
        
//         setTimeout(() => {
//             toast.style.animation = 'slideOutRight 0.5s ease-out';
//             setTimeout(() => {
//                 if (toast.parentNode) {
//                     toast.remove();
//                 }
//             }, 500);
//         }, 3000);
//     }
// };

// Add slide animations for toasts
if (!document.querySelector('#toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}