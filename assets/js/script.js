const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    // Prevent scrolling when menu is open
    document.body.classList.toggle("menu-open");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});