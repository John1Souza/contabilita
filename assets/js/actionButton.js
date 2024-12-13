document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButtonFlutuante = document.getElementById('whatsappButton');
    const ctaButton = document.querySelectorAll('.cta');
    const ctaButtonServicos = document.querySelectorAll('.cta-servicos');
    
    ctaButton.forEach(function (cta) {
        cta.addEventListener('click', function () {
            window.open('https://wa.me/5561993430859', '_blank'); 
        })
    })

    ctaButtonServicos.forEach(function (cta) {
        cta.addEventListener('click', function () {
            window.open('https://wa.me/5561993430859', '_blank'); 
        })
    })


    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButtonFlutuante.addEventListener('click', function () {
        window.open('https://wa.me/5561993430859', '_blank');
    });

});

ScrollReveal().reveal('.card-servicos-left', {delay: 200});
ScrollReveal().reveal('.card-servicos', {delay: 300});

