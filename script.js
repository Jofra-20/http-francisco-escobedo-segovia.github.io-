document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de animación simple: aparecer las secciones al desplazarse
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% de la sección visible para activar
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.unobserve(entry.target); // Dejar de observar una vez que ha aparecido
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0; // Ocultar inicialmente
        section.style.transform = 'translateY(20px)'; // Mover ligeramente hacia abajo
        sectionObserver.observe(section);
    });

    // Puedes añadir más interactividad aquí, por ejemplo, un botón para alternar la visibilidad de las "lecciones".
    // Por ahora, este script se enfoca en una animación de aparición al cargar.
});