
// Nav-Bar Collapse
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.nav-link');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-link[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
// ---------------------------------------------------
