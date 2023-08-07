export default function createSwiper() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.swiper-init.is-slider').forEach(el => {
            const slider = el.querySelector('.swiper-container');
            const pagination = el.querySelector('.swiper-pagination');
            const prevBtn = el.querySelector('.swiper-button-prev');
            const nextBtn = el.querySelector('.swiper-button-next');
            try {
                new Swiper(slider, {
                    speed: 1200,
                    autoHeight: false,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 8000,
                    },
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: nextBtn,
                        prevEl: prevBtn,
                    },
                    loop: true,
                });
            } catch (err) {
                console.log(err);
            }
        });
        if (document.getElementById('home-products-slider')) {
            const slider = document.getElementById('home-products-slider');
            const sliderContainer = slider.querySelector('.swiper-container');
            const sliderPagination = slider.querySelector('.swiper-pagination');
            const sliderNextBtn = slider.querySelector('.swiper-button-next');
            const sliderPrevBtn = slider.querySelector('.swiper-button-prev');
            if (window.matchMedia('(max-width: 768px)').matches) {
                try {
                    new Swiper(sliderContainer, {
                        speed: 1200,
                        autoHeight: false,
                        slidesPerView: 1,
                        slidesPerColumn: 2,
                        spaceBetween: 30,
                        slidesPerColumnFill: 'row',
                        autoplay: {
                            delay: 8000,
                        },
                        pagination: {
                            el: sliderPagination,
                            clickable: true,
                        },
                        navigation: {
                            nextEl: sliderNextBtn,
                            prevEl: sliderPrevBtn,
                        },
                        loop: true,
                        breakpoints: {
                            501: {
                                slidesPerView: 2,
                            },
                            769: {
                                slidesPerView: 4,
                            },
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        }

        if (document.getElementById('pd-detail-slider-main') && document.getElementById('pd-detail-slider-aside')) {
            const top = document.getElementById('pd-detail-slider-main');
            const bottom = document.getElementById('pd-detail-slider-aside');
            const topContainer = top.querySelector('.swiper-container');
            const bottomContainer = bottom.querySelector('.swiper-container');
            const bottomBtnPrev = bottom.querySelector('.swiper-button-prev');
            const bottomBtnNext = bottom.querySelector('.swiper-button-next');
            const bottomSlider = new Swiper(bottomContainer, {
                slidesPerView: 3,
                spaceBetween: 15,
                speed: 1200,
                direction: 'horizontal',
                loop: false,
                navigation: {
                    nextEl: bottomBtnNext,
                    prevEl: bottomBtnPrev,
                },
                breakpoints: {
                    1025: {
                        direction: 'vertical',
                        slidesPerView: 4,
                    },
                    501: {
                        slidesPerView: 4,
                    }
                }
            });
            const topSlider = new Swiper(topContainer, {
                slidesPerView: 1,
                loop: true,
                speed: 1200,
                spaceBetween: 15,
                thumbs: {
                    swiper: bottomSlider
                }
            });

        }
    });
}