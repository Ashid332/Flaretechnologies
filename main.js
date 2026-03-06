document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       Navigation & Mobile Menu
       ========================================================= */
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu on link click
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Scroll Effects for Transparent-to-Solid Header
    let lastScroll = 0;

    // Check initial scroll position on load
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    }

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add blurred background when scrolling down past top
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide nav logic (optional, keeping for UX)
        if (currentScroll <= 0) {
            header.classList.remove('hide-nav');
        } else if (currentScroll > lastScroll && currentScroll > 150) {
            // scrolling down
            header.classList.add('hide-nav');
            // close mobile menu if scrolling
            if (mobileNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        } else {
            // scrolling up
            header.classList.remove('hide-nav');
        }
        lastScroll = currentScroll;
    });


    /* =========================================================
       Elegant Scroll Animations (Intersection Observer)
       ========================================================= */
    const scrollObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% visible to allow early natural fade
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Run animation only once
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    const animElements = document.querySelectorAll('.scroll-anim');
    animElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* =========================================================
       Hero 3D Parallax Effect
       ========================================================= */
    const scene = document.getElementById('scene');
    const parallaxLayer = document.querySelector('.parallax-layer');

    if (scene && parallaxLayer) {
        // Only run on desktop where hover makes sense
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            scene.addEventListener('mousemove', (e) => {
                const rect = scene.getBoundingClientRect();

                // Calculate mouse position relative to center of the container (-1 to 1)
                const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
                const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

                // Subtle rotation and translation multipliers
                const depth = parseFloat(parallaxLayer.getAttribute('data-depth')) || 0.15;
                const rotateX = -y * depth * 15; // Max degrees of rotation
                const rotateY = x * depth * 15;
                const translateX = x * depth * 30; // Max px of movement
                const translateY = y * depth * 30;

                // Apply spatial transformation
                parallaxLayer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            // Smoothly snap back to origin on mouse exit
            scene.addEventListener('mouseleave', () => {
                parallaxLayer.style.transform = `translate3d(0, 0, 0) rotateX(0) rotateY(0)`;
            });
        }
    }

});
