const bars = document.getElementById('bars');
const navMedia = document.getElementById('media-nav');
const closeMenu = document.getElementById('close');

bars.addEventListener('click', () => {
navMedia.classList.add("show-menu");
}) 

closeMenu.addEventListener('click', () => {
    navMedia.classList.remove('show-menu');
})