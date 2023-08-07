export default function toggleMobileMenu() {
    const mainMenuBtn = document.getElementById('header-menu-btn');
    const mainMenu = document.getElementById('header-menu');
    const mainMenuOverlay = document.getElementById('header-menu-overlay');
    document.addEventListener('DOMContentLoaded', () => {
        if (mainMenu && mainMenuBtn) {
            mainMenuBtn.addEventListener('click', () => {
                mainMenuBtn.classList.toggle('active');
                mainMenu.classList.toggle('active');
                if (document.body) {
                    document.body.style.overflow = 'hidden';
                }
            });
            if (mainMenuOverlay) {
                mainMenuOverlay.addEventListener('click', () => {
                    mainMenuBtn.classList.remove('active');
                    mainMenu.classList.remove('active');
                    if (document.body) {
                        document.body.style.overflow = null;
                    }
                });
            }
        }
    });
}