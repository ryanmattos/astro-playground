document.querySelector('.hamburger').addEventListener('click', () => {
    console.log('Clicked');
    document.querySelector('.nav-links').classList.toggle('expanded');
})