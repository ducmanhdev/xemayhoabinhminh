export default function createFixedHeader() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    if (header && main) {
        window.addEventListener('load', () => {
            let headerHeight = header.offsetHeight;
            let headerOffset = header.offsetTop;
            window.addEventListener('rezise', () => {
                headerHeight = header.offsetHeight;
                headerOffset = header.offsetTop;
            });
            const toggleFixed = () => {
                if (pageYOffset > headerOffset) {
                    header.classList.add('fixed');
                    main.style.marginTop = headerHeight + 'px';
                } else {
                    header.classList.remove('fixed', 'show');
                    main.style.marginTop = null;
                }
            };
            toggleFixed();
            window.addEventListener('scroll', toggleFixed);
        });
    }
}