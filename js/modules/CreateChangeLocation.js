export default function createChangeLocation() {
    document.addEventListener('DOMContentLoaded', () => {
        const storeLocations = document.querySelectorAll('.store-location-item');
        const storeLocationActive = document.querySelector('.store-location-item.active');
        const storeLocationMap = document.getElementById('store-map');

        if(storeLocationActive && storeLocationMap){
            storeLocationMap.src = storeLocationActive.getAttribute('data-location');
        }

        if (storeLocations.length && storeLocationMap) {
            storeLocations.forEach(el => {
                el.addEventListener('click', () => {
                    if (el.parentElement.querySelector('.store-location-item.active')) {
                        el.parentElement.querySelector('.store-location-item.active').classList.remove('active');
                    }
                    el.classList.add('active');
                    storeLocationMap.src = el.getAttribute('data-location');
                });
            });
        }
    });
}