export default function createReadMore() {
    const readMore = el => {
        const maxHeight = el.getAttribute('data-height');
        if (el.offsetHeight > maxHeight) {
            const content = document.createElement("div");
            content.classList.add('js-readmore-content');
            content.innerHTML = el.innerHTML;
            content.style.maxHeight = `${maxHeight}px`;
            content.style.overflow = `hidden`;
            content.style.transition = `.2s`;
            el.innerHTML = '';
            el.appendChild(content);

            const btn = document.createElement('span');
            btn.classList.add('js-readmore-btn');
            btn.textContent = '...more details';
            el.appendChild(btn);

            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {
                    content.style.maxHeight = `${content.scrollHeight}px`;
                    content.style.overflow = 'hidden';
                    content.style.transition = '.2s';
                    btn.classList.remove('active');
                    btn.textContent = '...more details';
                    setTimeout(() => {
                        content.style.maxHeight = `${maxHeight}px`;
                    }, 0);
                } else {
                    btn.classList.add('active');
                    btn.textContent = '...less details';
                    content.style.maxHeight = `${content.scrollHeight}px`;
                    content.addEventListener('transitionend', function handler() {
                        content.style = null;
                        content.removeEventListener('transitionend', handler);
                    });
                }
            });
        }
    };

    window.addEventListener('load', () => {
        document.querySelectorAll('.js-readmore').forEach(el => (el));
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (!(node instanceof HTMLElement)) continue;
                    if (!node.matches('.js-readmore')) continue;
                    readMore(node);
                }
            }
        });
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    });
}