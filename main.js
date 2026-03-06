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

    // Removed the Three.js block entirely, as the visual is replaced by CSS/SVG flowing paths 

});
