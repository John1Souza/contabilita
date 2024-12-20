document.addEventListener("DOMContentLoaded", function () {
  "#inicio" !== window.location.hash && (window.location.hash = "#inicio");
  const t = document.getElementById("backToTop"),
    e = document.getElementById("whatsappButton"),
    n = document.querySelectorAll(".cta"),
    pc = document.querySelectorAll("#portal-do-cliente"),
    c = "https://wa.me/5561993430859";
    pc.forEach(function(pc) {
        pc.addEventListener("click", function () {
          window.open("https://vip.acessorias.com/contabilitagestao");
      })});
    
  n.forEach(function (t) {
    t.addEventListener("click", function () {
      window.open(c);
    });
  }),
    t.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }),
    e.addEventListener("click", function () {
      window.open(c);
    });
    
});


const menuLinks = document.querySelectorAll("#navigation-menu-list a");

function removeActiveClass() {
    menuLinks.forEach(link => {
        link.classList.remove("active");
    });
}
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        removeActiveClass(); 
        link.classList.add("active");
    });
});
document.querySelector("#link-inicio").classList.add("active");