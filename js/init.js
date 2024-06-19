document.getElementById("theme").addEventListener("click", (e) => {
  document.body.style.transition = "background-color .5s ease, color .5s ease";
  if (document.body.getAttribute("color-scheme") == "dark") {
    // changing to light theme
    document.body.setAttribute("color-scheme", "light");
  } else {
    document.body.setAttribute("color-scheme", "dark");
  }
});

document.getElementById("section").addEventListener("click", showSideBar);
document.getElementById("closeSideBar").addEventListener("click", hideSideBar);
document.getElementById("bg").addEventListener("click", hideSideBar);

function showSideBar() {
  duration = 400;
  sideBar = document.getElementById("sidebar");
  sideBar.style.setProperty("--duration", `${duration}ms`);

  sideBar.style.display = "block";
  setTimeout(() => {
    sideBar.style.translate = "0";
  }, 0);
  document.getElementById("bg").style.display = "block";
  sideBar.removeAttribute("closed");
  sideBar.setAttribute("open", "");
}

function hideSideBar() {
  duration = 700;
  sideBar = document.getElementById("sidebar");
  sideBar.style.setProperty("--duration", `${duration}ms`);
  sideBar.style.translate = "-100%";
  document.getElementById("bg").style.display = "none";
  sideBar.removeAttribute("open");
  sideBar.setAttribute("closed", "");
  setTimeout(() => {
    sideBar.style.display = "none";
  }, duration);
}
