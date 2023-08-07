export default function createPopup() {
    const $ = jQuery.noConflict();
    $(document).on('ready', () => {
        $('.open-popup-btn').magnificPopup({
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = "mfp-zoom-in";
                },
            },
            midClick: true,
        });
        $('.open-video-btn').magnificPopup({
            disableOn: 768,
            type: 'iframe',
            mainClass: 'mfp-zoom-in',
            removalDelay: 500,
            preloader: false,
            fixedContentPos: false,
        });
    });
}