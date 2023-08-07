export default function wrapMonaMedia() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.mona-content iframe[src^="https://www.youtube.com/"]').forEach(el => {
            const wrap = document.createElement("div");
            wrap.classList.add('mona-youtube-wrap');
            el.insertAdjacentElement("afterend", wrap);
            wrap.appendChild(el);
        });

        document.querySelectorAll('.mona-content table').forEach(el => {
            const wrap = document.createElement("div");
            wrap.classList.add('mona-table-wrap');
            el.insertAdjacentElement("afterend", wrap);
            wrap.appendChild(el);
        });
    });
}