document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbarToggle");
  const mobileNav = document.getElementById("mobileNav");

  navbarToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("show");
  });
});