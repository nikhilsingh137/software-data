document.addEventListener("DOMContentLoaded", function () {
  let sideNav = document.getElementById("sideNav");
  let lineIcon = document.getElementById("line");
  let crossIcon = document.getElementById("cross");
  function toggleNav() {
    sideNav.style.width = "250px";
    lineIcon.style.display = "none";
    crossIcon.style.display = "block";
  }
  function toggleCross() {
    sideNav.style.width = "0";
    lineIcon.style.display = "block";
    crossIcon.style.display = "none";
  }

  function handleResize() {
    if (window.innerWidth > 991 || window.innerWidth < 360) {
      sideNav.style.width = "0";
      lineIcon.style.display = "none";
      crossIcon.style.display = "none";
    } else {
      lineIcon.style.display = "block";
    }
  }

  handleResize();

  window.addEventListener("resize", handleResize);
  lineIcon.addEventListener("click", toggleNav);
  crossIcon.addEventListener("click", toggleCross);
});
