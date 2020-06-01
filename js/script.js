const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = nav.querySelectorAll('li');

    // Toggle the navbar
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    // Add KeyFrame to the lists
    navLinks.forEach((list, index) => {
        if (list.style.animation) {
            list.style.animation = '';
        } else {
            list.style.animation = `navLinkFade .6s ease-in-out forwards ${index / 6 + .4}s`;
        }
    })
    // Add Toggle Class
    burger.classList.toggle('toggle');
    });
}
navSlide();