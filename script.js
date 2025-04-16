const navbar = document.querySelector(".nav-item");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
