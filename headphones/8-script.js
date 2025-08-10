// Select hamburger and nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

// Toggle menu open/close
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Add playful bounce animation to links when opening
    if (navMenu.classList.contains("show")) {
        const links = navMenu.querySelectorAll("li");
        links.forEach((link, index) => {
            link.style.animation = `slideIn 0.4s ease forwards ${index * 0.1 + 0.2}s`;
        });
    } else {
        navMenu.querySelectorAll("li").forEach(link => {
            link.style.animation = "none";
        });
    }
});

// Optional: close menu when clicking a link (mobile UX best practice)
navMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 480) {
        navMenu.classList.remove("show");
    }
});
