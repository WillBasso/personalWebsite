
const floatingButton = document.getElementById('floatingButton');
const floatingMenu = document.getElementById('floatingMenu');
const navLinks = document.querySelectorAll('.floating-menu a');

let lasScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 200) {
        floatingButton.style.display = 'flex';
    } else {
        floatingButton.style.display = 'none';
        floatingMenu.classList.add('hidden');
    }

    lasScrollY = currentScrollY;
});

floatingButton.addEventListener('click', () => {
    floatingMenu.classList.toggle('hidden');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        floatingMenu.classList.add('hidden');
    });
});

document.addEventListener('click', (event) => {
    if (!floatingMenu.contains(event.target) && !floatingButton.contains(event.target)) {
        floatingMenu.classList.add('hidden');
    }
});