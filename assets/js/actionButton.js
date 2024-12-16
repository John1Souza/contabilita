document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButtonFlutuante = document.getElementById('whatsappButton');
    const ctaButton = document.querySelectorAll('.cta');
    const ctaButtonServicos = document.querySelectorAll('.cta-servicos');
    
    ctaButton.forEach(function (cta) {
        cta.addEventListener('click', function () {
            const appUrl = `whatsapp://send?phone=5561993430859`;
            const webUrl = `https://wa.me/5561993430859`;      
            window.open(appUrl, '_blank'); 

            setTimeout(() => {
                window.open(webUrl, '_blank');;
            }, 500)
        })
    })
    ctaButtonServicos.forEach(function (cta) {
        cta.addEventListener('click', function () {
            const appUrl = `whatsapp://send?phone=5561993430859`;
            const webUrl = `https://wa.me/5561993430859`;      
            
            window.open(appUrl, '_blank'); 

            setTimeout(() => {
                window.open(webUrl, '_blank');;
            }, 500)
        })
    })


    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    whatsappButtonFlutuante.addEventListener('click', function () {        
        const appUrl = `whatsapp://send?phone=5561993430859`;
        const webUrl = `https://wa.me/5561993430859`;

        window.open(appUrl, '_blank'); 

        setTimeout(() => {
            window.open(webUrl, '_blank');
        }, 500)      
    });

});


