document.addEventListener("DOMContentLoaded", function () {
  "#inicio" !== window.location.hash && (window.location.hash = "#inicio");
  let t = document.getElementById("backToTop"),
    e = document.getElementById("whatsappButton"),
    n = document.querySelectorAll(".cta"),
    o = document.querySelectorAll(".cta-servicos"),
    c = "https://wa.me/5561993430859";
  n.forEach(function (t) {
    t.addEventListener("click", function () {
      window.open(c);
    });
  }),
    o.forEach(function (t) {
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
