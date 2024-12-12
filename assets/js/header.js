document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});


// window.addEventListener('load', () => {
//     const header = document.querySelector('header');
//     const inicio = document.querySelector('#inicio');
//     if (window.innerWidth < 600){
    
//         if (header && inicio) {
//             const headerHeight = header.offsetHeight; // Obtém a altura do header
//             inicio.style.marginTop = `${headerHeight}px`;
//         }
//     }
// });

// // Atualiza dinamicamente em caso de redimensionamento
// window.addEventListener('resize', () => {
//     const header = document.querySelector('header');
//     const inicio = document.querySelector('#inicio');
    
//     if (header && inicio) {
//         const headerHeight = header.offsetHeight;
//         inicio.style.marginTop = `${headerHeight}px`;
//     }
   
// });