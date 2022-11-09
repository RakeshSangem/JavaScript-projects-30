const panel = document.querySelectorAll(".panel");

panel.forEach((p) =>
  p.addEventListener("mouseenter", (e) => {
    e.target.firstElementChild.style.transform = "translateY(0)";
    p.classList.add("active");
    e.target.lastElementChild.style.transform = "translateY(0)";
  })
);
panel.forEach((p) =>
  p.addEventListener("mouseleave", (e) => {
    e.target.firstElementChild.style.transform = "translateY(-50vh)";
    p.classList.remove("active");
    e.target.lastElementChild.style.transform = "translateY(50vh)";
  })
);
