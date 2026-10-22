document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    const setMenuOpen = (isOpen) => {
        navMenu?.classList.toggle('active', isOpen);
        menuToggle?.setAttribute('aria-expanded', String(isOpen));
        menuToggle?.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    };

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            setMenuOpen(!navMenu.classList.contains('active'));
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });

        document.addEventListener('click', (event) => {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)) {
                setMenuOpen(false);
            }
        });

        window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenuOpen(false));
    }

    const revealItems = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window && revealItems.length) {
        document.body.classList.add('has-scroll-reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

        revealItems.forEach((item) => revealObserver.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            const target = targetSelector && targetSelector !== '#' ? document.querySelector(targetSelector) : null;

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    block: 'start'
                });

                if (navMenu) {
                    setMenuOpen(false);
                }
            }
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');

        if (button) {
            button.addEventListener('click', () => {
                const isOpening = !item.classList.contains('active');

                faqItems.forEach(i => {
                    if (i !== item) {
                        i.classList.remove('active');
                        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                        i.querySelector('.faq-answer')?.setAttribute('aria-hidden', 'true');
                    }
                });

                item.classList.toggle('active');
                button.setAttribute('aria-expanded', String(item.classList.contains('active')));
                item.querySelector('.faq-answer')?.setAttribute('aria-hidden', String(!item.classList.contains('active')));

                if (isOpening) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'faq_open',
                        faq_name: button.getAttribute('data-faq') || button.textContent.trim()
                    });
                }
            });
        }
    });
});