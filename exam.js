let swiper;

function initSwiper() {
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    if (window.innerWidth >= 992) {
        // Initialize Swiper if not already initialized
        if (!swiper) {
            swiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            swiperContainer.classList.add('swiper-initialized'); // Optional, for custom styling
        }
    } else {
        // Destroy Swiper if initialized
        if (swiper) {
            swiper.destroy(true, true); // Destroy Swiper and clean DOM
            swiper = null; // Reset swiper instance

            // Manually remove Swiper-related classes and styles to prevent display issues
            swiperContainer.classList.remove('swiper-initialized');
            swiperContainer.classList.remove('swiper-container-initialized');
            swiperWrapper.removeAttribute('style');
        }
    }
}

// Initialize Swiper on page load
initSwiper();

// Re-run the function on window resize
window.addEventListener('resize', initSwiper);
