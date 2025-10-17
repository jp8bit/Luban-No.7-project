// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Carousel elements
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    // State variables
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000; // 5 seconds
    
    // Initialize dots
    function initDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        // Remove active class from current slide and dot
        slides[currentSlide].classList.remove('active');
        dotsContainer.children[currentSlide].classList.remove('active');
        
        // Update current slide
        currentSlide = slideIndex;
        
        // Add active class to new slide and dot
        slides[currentSlide].classList.add('active');
        dotsContainer.children[currentSlide].classList.add('active');
        
        // Reset auto slide timer
        resetInterval();
    }
    
    // Next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }
    
    // Auto slide
    function startInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    // Reset interval
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Pause auto slide on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Resume auto slide when mouse leaves
    carousel.addEventListener('mouseleave', startInterval);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Initialize
    initDots();
    startInterval();
});