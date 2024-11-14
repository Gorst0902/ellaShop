let bannerSwiper;

function initSwipers() {
    const body = document.body;

    // Initialize the banner swiper
    if (window.innerWidth >= 992 && !bannerSwiper) {
        bannerSwiper = new Swiper('.swiper-container-banner', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-banner',
                clickable: true,
            },
            navigation: false,
        });
        body.style.overflowX = 'hidden';
    } else if (window.innerWidth < 992 && bannerSwiper) {
        bannerSwiper.destroy(true, true);
        bannerSwiper = null;
        body.style.overflowX = 'auto';
    }
}

// Initialize Swipers on page load
initSwipers();

// Re-run the function on window resize
window.addEventListener('resize', initSwipers);