export default function createDropdownArrow() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.header-menu-nav .dropdown').forEach(el => {
            const dropdown = el;
            const arrows = document.createElement("i");
            arrows.classList.add('fa', 'fa-angle-down');
            dropdown.querySelector('a').appendChild(arrows);
            arrows.addEventListener('click', e => {
                e.preventDefault();
                dropdown.classList.toggle('show-sub-menu');
            });
        });
    });
}