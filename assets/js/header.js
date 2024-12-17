document.addEventListener("DOMContentLoaded", function () {
  let e = document.getElementById("menuToggle"),
    t = document.querySelector(".menu-aberto"),
    s = document.querySelectorAll(".nav-menu a"),
    c = document.body;
  e.addEventListener("change", function () {
    e.checked
      ? (t.classList.add("active"), c.classList.add("no-scroll"))
      : (t.classList.remove("active"), c.classList.remove("no-scroll"));
  }),
    s.forEach((s) => {
      s.addEventListener("click", function () {
        (e.checked = !1),
          t.classList.remove("active"),
          c.classList.remove("no-scroll");
      });
    }),
    document.querySelector("#link-inicio").classList.add("active");
  let a = document.querySelectorAll("#navigation-menu-list a");
  a.forEach((e) => {
    e.addEventListener("click", () => {
      a.forEach((e) => e.classList.remove("active")), e.classList.add("active");
    });
  });
});

