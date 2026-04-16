document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            const target = document.querySelector(targetSelector);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                if (navMenu) {
                    navMenu.classList.remove('active');
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
                    if (i !== item) i.classList.remove('active');
                });

                item.classList.toggle('active');

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