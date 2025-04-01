document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive navigation toggle (if we add a hamburger menu later)
    const toggleBtn = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });
    }

    // Track play button clicks
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            console.log('Game link clicked');
            // 如果后续添加分析工具，可以在这里记录点击事件
        });
    }

    // Add animation for elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and animated elements
    document.querySelectorAll('section, .character, .animated').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Update copyright year automatically
    const currentYear = new Date().getFullYear();
    const copyrightEl = document.querySelector('.copyright-year');
    if (copyrightEl) {
        copyrightEl.textContent = currentYear;
    }
}); 