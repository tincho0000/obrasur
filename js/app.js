window.onscroll = function(e) {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    console.log(scroll);
    if (scroll > 300) {
        headerScroll.classList.add('navegacion-principal');
    } else {
        headerScroll.classList.remove('navegacion-principal');
    }
};