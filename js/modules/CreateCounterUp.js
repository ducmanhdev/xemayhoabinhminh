export default function createCounterUp() {
    const counterUp = (target, duration = 5000) => {
        const finalNumber = parseInt(target.getAttribute('data-counter'));
        const startTime = performance.now();
        const easeOutExpo = x => {
            return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        };
        const updateNumber = currentTime => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime > duration) {
                target.innerText = finalNumber.toLocaleString();
            } else {
                const timeRate = elapsedTime / duration;
                const numberRate = easeOutExpo(timeRate);
                const currentNumber = Math.round(numberRate * finalNumber);
                target.innerText = currentNumber.toLocaleString();
                requestAnimationFrame(updateNumber);
            }
        };
        requestAnimationFrame(updateNumber);
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counterUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px 0px 0px 0px"
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.js-counter').forEach(el => observer.observe(el));
    });
}