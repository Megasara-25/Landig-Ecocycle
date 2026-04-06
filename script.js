document.addEventListener('DOMContentLoaded', () => {
    // Inicializar iconos Lucide
    lucide.createIcons();

    // Toggle menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Cerrar menú móvil si está abierto
                navMenu.classList.remove('active');
            }
        });
    });

    // Validar y simular envío de formulario
    const form = document.querySelector('.hs-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por registrarte! Pronto nos comunicaremos contigo.');
            form.reset();
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        button.addEventListener('click', () => {
            // Cerrar los demás si quieres acordeón estricto
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
});
