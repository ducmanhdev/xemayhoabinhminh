export default function createGallery() {
    const $ = jQuery.noConflict();
    $(document).on('ready', () => {
        const $gallery = $('.js-gallery-nav');
        if ($gallery) {
            $gallery.lightGallery({
                selector: 'a',
                share: false,
                actualSize: false,
                download: false,
                autoplayControls: false,
                thumbnail: true,
                animateThumb: true,
                showThumbByDefault: true
            });
        }
    });
}