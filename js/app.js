window.onscroll = function(e) {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    const dropdownScroll = document.querySelector('#dropdown-menu');

    if (scroll > 300) {
        headerScroll.classList.add('navegacion-principal');
        dropdownScroll.classList.add('navegacion-principal');
    } else {
        headerScroll.classList.remove('navegacion-principal');
        dropdownScroll.classList.remove('navegacion-principal');
    }
};