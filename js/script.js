/* =========================================================
   Lifetime Roofing & Services
   Interactive Script
   ========================================================= */

(function () {
    'use strict';

    // ============ Mobile Nav Toggle ============
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
        });
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                mainNav.classList.remove('open');
            });
        });
    }

    // ============ Smooth Scroll for On-Page Anchor Links ============
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });

    // ============ Simple Math Captcha Validation ============
    function attachCaptchaValidation(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        form.addEventListener('submit', function (e) {
            const captcha = document.getElementById('captcha');
            if (captcha && parseInt(captcha.value, 10) !== 9) {
                e.preventDefault();
                captcha.style.borderColor = '#c0392b';
                captcha.focus();
            } else if (captcha) {
                captcha.style.borderColor = '';
            }
        });
    }
    attachCaptchaValidation('contactForm');

    // ============ Reveal Animations ============
    if ('IntersectionObserver' in window) {
        const reveal = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    reveal.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.service-card, .quick-link-card, .why-card, .gallery-item, .area-list li').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity .5s ease, transform .5s ease';
            reveal.observe(el);
        });
    }

})();
