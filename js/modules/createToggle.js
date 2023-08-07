export default function createToggle() {
    const $ = jQuery.noConflict();
    $(document).on('ready', () => {
        $('.toggle-item.active').find('.toggle-content').show();
        $('.toggle-title').on('click', function () {
            $(this).closest('.toggle-item').toggleClass('active').find('.toggle-content').stop().slideToggle();
        });

        $('.aside-cate-title').on('click', function () {
            $(this).next('.aside-cate-nav').stop().slideToggle();
        });
    });
}