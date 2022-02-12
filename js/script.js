const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  for (let i = 0; i < menuIcon.children.length; i++) {
    menuIcon.children[i].classList.remove("no-animation");
  }
});
