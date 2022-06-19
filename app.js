let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist-ul-link");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};