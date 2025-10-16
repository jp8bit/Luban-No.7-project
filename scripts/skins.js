class CarouselSlider {
    constructor() {
        this.carousel = document.querySelector('.carousel');
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 1; // Start with middle slide as active
        this.slideWidth = this.slides[0].offsetWidth + 20; // Include gap
        
        this.init();
        this.updateCarousel();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });
        
        // Clone slides for infinite effect
        this.setupInfiniteSlides();
    }
    
    setupInfiniteSlides() {
        // Clone first and last slides for seamless looping
        const firstClone = this.slides[0].cloneNode(true);
        const lastClone = this.slides[this.slides.length - 1].cloneNode(true);
        
        this.carousel.appendChild(firstClone);
        this.carousel.insertBefore(lastClone, this.slides[0]);
        
        // Update slides reference
        this.slides = document.querySelectorAll('.slide');
    }
    
    updateCarousel() {
        // Update active states
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            
            // Set middle slide as active in the visible area
            if (index === this.currentIndex) {
                slide.classList.add('active');
            }
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === this.getRealIndex()) {
                dot.classList.add('active');
            }
        });
        
        // Calculate transform position
        const transformX = -this.currentIndex * this.slideWidth;
        this.carousel.style.transform = `translateX(${transformX}px)`;
    }
    
    nextSlide() {
        this.currentIndex++;
        
        // Check if we've reached the cloned slide
        if (this.currentIndex >= this.slides.length - 1) {
            setTimeout(() => {
                this.carousel.style.transition = 'none';
                this.currentIndex = 1;
                this.updateCarousel();
                
                // Force reflow
                this.carousel.offsetHeight;
                
                this.carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 500);
        }
        
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentIndex--;
        
        // Check if we've reached the cloned slide
        if (this.currentIndex <= 0) {
            setTimeout(() => {
                this.carousel.style.transition = 'none';
                this.currentIndex = this.slides.length - 2;
                this.updateCarousel();
                
                // Force reflow
                this.carousel.offsetHeight;
                
                this.carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 500);
        }
        
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentIndex = index + 1; // Adjust for cloned slides
        this.updateCarousel();
    }
    
    getRealIndex() {
        // Convert carousel index to real slide index
        if (this.currentIndex === 0) return this.slides.length - 3;
        if (this.currentIndex === this.slides.length - 1) return 0;
        return this.currentIndex - 1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CarouselSlider();
});