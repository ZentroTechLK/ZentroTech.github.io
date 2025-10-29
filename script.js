// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Countdown Timer (Set your launch date)
const launchDate = new Date("2025-12-31T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML = "<h3>We're Live!</h3>";
    clearInterval(countdownTimer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Update countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Navbar background on scroll
/* On scroll */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(0, 0, 0, 0.85)"; /* slightly darker on scroll */
        navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
        navbar.style.boxShadow = "none";
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add floating animation delays
document.querySelectorAll(".floating-element").forEach((element, index) => {
  element.style.animationDelay = `${index * 1.5}s`;
});

// Typewriter effect for subtitle
function typeWriter(element, text, speed = 80) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typewriter effect
window.addEventListener("load", () => {
  const subtitle = document.querySelector(".hero-subtitle");
  const originalText = subtitle.textContent.trim();
  typeWriter(subtitle, originalText, 50);
});

// Parallax effect for hero
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
});
