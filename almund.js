/* ================================
   1. AUTO IMAGE SLIDER (HOME PAGE)
=================================*/

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(nextSlide, 4000); // 4 sec per slide
}



/* =========================================
   2. NAVBAR DROPDOWN (PRODUCTS MENU)
==========================================*/

const dropdown = document.querySelector(".nav-dropdown");

if (dropdown) {
  dropdown.addEventListener("mouseover", () => {
    const menu = dropdown.querySelector(".dropdown-menu");
    if (menu) menu.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", () => {
    const menu = dropdown.querySelector(".dropdown-menu");
    if (menu) menu.classList.remove("show");
  });
}



/* =================================================
   3. MOBILE NAVIGATION SUPPORT (AUTO READY)
==================================================*/

const mobileBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileBtn && navLinks) {
  mobileBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}



/* =====================================================
   4. SMOOTH SCROLL (IF ANY INTERNAL LINKS ARE USED)
======================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* =====================================================
   5. WHATSAPP BUTTON ON CLICK (IF USED IN FUTURE)
======================================================*/

const waBtn = document.querySelector(".nav-whatsapp");

if (waBtn) {
  waBtn.addEventListener("click", () => {
    // Opens WhatsApp same time (already link set)
    console.log("Opening WhatsApp…");
  });
}
