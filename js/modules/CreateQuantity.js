export default function createQuantity(){
    const inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    document.addEventListener('click', e => {
        if(e.target.closest('.quantity-picker .btn-minus')){
            const input = e.target.closest('.quantity-picker').querySelector('.input');
            if(parseInt(input.value) === 1) return;
            input.value--;
            input.dispatchEvent(inputEvent);
        }
        else if(e.target.closest('.quantity-picker .btn-plus')){
            const input = e.target.closest('.quantity-picker').querySelector('.input');
            if(input.max && input.value === input.max) return;
            input.value++;
            input.dispatchEvent(inputEvent);
        }
    });
}