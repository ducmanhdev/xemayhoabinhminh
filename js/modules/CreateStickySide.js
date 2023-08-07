export default function createStickySide(idSticky, idStickyWrap, offset = 0) {
    if (!document.querySelector(idSticky)) {
        console.warn('idSticky not found!');
        return;
    }
    if (!document.querySelector(idStickyWrap)) {
        console.warn('idStickyWrap not found!');
        return;
    }
    let sticky, stickyHeight, stickyWrap, stickyWrapHeight, stickyWrapOffsetTop;
    sticky = document.querySelector(idSticky);
    stickyHeight = sticky.offsetHeight;
    stickyWrap = document.querySelector(idStickyWrap);
    stickyWrapHeight = stickyWrap.offsetHeight;
    stickyWrapOffsetTop = stickyWrap.offsetTop;
    if (pageYOffset + offset >= stickyWrapOffsetTop && pageYOffset + offset + stickyHeight <= stickyWrapOffsetTop + stickyWrapHeight) {
        sticky.style.position = 'relative';
        sticky.style.top = offset + pageYOffset - stickyWrapOffsetTop + 'px';
    } else {
        if (pageYOffset + offset < stickyWrapOffsetTop) {
            sticky.removeAttribute('style');
        }
        if (pageYOffset + offset + stickyHeight > stickyWrapOffsetTop + stickyWrapHeight) {
            sticky.style.top = stickyWrapHeight - stickyHeight + 'px';
        }
    }
}