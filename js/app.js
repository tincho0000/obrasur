// Inicio WOW
new WOW().init();

// Animacion NAV
window.onscroll = function(e) {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    const nosotrosScroll = document.querySelector('#dropdown-nosotros');
    const proyectoScroll = document.querySelector('#dropdown-proyecto');

    if (scroll > 300) {
        headerScroll.classList.add('navegacion-principal');
        nosotrosScroll.classList.add('navegacion-principal');
        proyectoScroll.classList.add('navegacion-principal');
    } else {
        headerScroll.classList.remove('navegacion-principal');
        nosotrosScroll.classList.remove('navegacion-principal');
        proyectoScroll.classList.remove('navegacion-principal');
    }
};