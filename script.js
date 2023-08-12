// TOGGGLE CLASS ACTIVE

const navbarNav = document.querySelector(".navbar-nav");

//ketika hb di klik

document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sitebar utk menghilangkan nav

const hamberger = document.querySelector("#hamberger-menu");

document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
