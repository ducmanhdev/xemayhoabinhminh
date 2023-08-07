export default function createScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    const toggleClass = () => {
        pageYOffset >= 100 ? scrollTopBtn.classList.add('show') : scrollTopBtn.classList.remove('show');
    };
    const scrollTop = () => {
        if (pageYOffset > 0) {
            window.scrollTo(0, pageYOffset - pageYOffset / 8);
            requestAnimationFrame(scrollTop);
        }
    };
    document.addEventListener('DOMContentLoaded', toggleClass);
    window.addEventListener('scroll', toggleClass);
    scrollTopBtn.addEventListener('click', scrollTop);
}