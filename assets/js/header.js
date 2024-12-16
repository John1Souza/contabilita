
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () { 
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
    document.querySelector("#link-inicio").classList.add("active");
    const menuLinks = document.querySelectorAll("#navigation-menu-list a");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuLinks.forEach(item => item.classList.remove("active"));
                link.classList.add("active");
            });
        });

});
const buttonResize = () => {
			const cta = document.querySelectorAll('.cta');
			cta.forEach(() => {
				const ctaButton = document.querySelector('.cta');
				if (window.innerWidth < 1024){
					ctaButton.classList.remove("cta");
					ctaButton.classList.add("cta-servicos");
				}	
			})
		
     
 }
window.addEventListener('resize', buttonResize );
window.addEventListener('load', buttonResize );