const menuIcon = document.querySelector(".menu-icon");
const navbar = document.getElementById("navbar");
const offset = navbar.offsetTop;

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  for (let i = 0; i < menuIcon.children.length; i++) {
    menuIcon.children[i].classList.remove("no-animation");
  }
  navbar.classList.toggle("active");
});

const checkNavbarTop = () => {
  if (window.scrollY > offset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

window.onscroll = function () {
  checkNavbarTop();
};
