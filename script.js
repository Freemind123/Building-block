fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    // After loading, add interactivity
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sideDrawer = document.getElementById("side-drawer");
    const overlay = document.getElementById("overlay");

    // Open side drawer
    menuBtn.addEventListener("click", () => {
      sideDrawer.style.right = "0";
      overlay.classList.add("active");
    });

    // Close side drawer
    closeBtn.addEventListener("click", () => {
      sideDrawer.style.right = "-300px";
      overlay.classList.remove("active");
    });

    // Close on overlay click
    overlay.addEventListener("click", () => {
      sideDrawer.style.right = "-300px";
      overlay.classList.remove("active");
    });
  });
