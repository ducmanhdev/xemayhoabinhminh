export default function createSelect2() {
    const $ = jQuery.noConflict();
    $('.js-select-2').each(function (){
        let dropdownParent = $(document.body);
        if ($(this).parents('.main-popup').length !== 0) {
            dropdownParent = $(this).parents('.main-popup');
        }
        $(this).select2({
            width: '100%',
            dropdownParent: dropdownParent
        });
    });
}