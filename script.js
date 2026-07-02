// ==========================================
// LUXE CAFÉ - SCRIPT.JS
// Version 2.0
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // PAGE LOADER
  // ==========================================

  document.body.classList.add("loaded");

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================

  const navbar = document.querySelector(".navbar");

  if (navbar) {

    const navbarScroll = () => {

      if (window.scrollY > 50) {

        navbar.style.background = "rgba(8,8,8,.96)";
        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.35)";

      } else {

        navbar.style.background = "rgba(8,8,8,.92)";
        navbar.style.boxShadow = "none";

      }

    };

    navbarScroll();
    window.addEventListener("scroll", navbarScroll);

  }

  // ==========================================
  // MOBILE MENU
  // ==========================================

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("show-menu");
      menuToggle.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("show-menu")
      );

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

      });

    });

    document.addEventListener("click", (e) => {

      if (
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {

        navLinks.classList.remove("show-menu");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

      }

    });

  }

  // ==========================================
  // ACTIVE PAGE LINK
  // ==========================================

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {

      link.classList.add("active");

    }

  });

  // ==========================================
  // SCROLL REVEAL ANIMATION
  // ==========================================

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");
        observer.unobserve(entry.target);

      }

    });

  }, {

    threshold: 0.15

  });

  document.querySelectorAll(

    ".stat-card, .review-box, .why-card, .menu-card, .gallery-card, .about-value, .contact-card"

  ).forEach(item => observer.observe(item));
  // ==========================================
  // BACK TO TOP BUTTON
  // ==========================================

  const topBtn = document.createElement("button");

  topBtn.id = "topBtn";

  topBtn.innerHTML = "↑";

  topBtn.setAttribute("aria-label", "Back to Top");

  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

      topBtn.style.display = "flex";

    } else {

      topBtn.style.display = "none";

    }

  });

  topBtn.addEventListener("click", () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

  // ==========================================
  // RESERVATION FORM
  // ==========================================

  const reservationForm = document.querySelector(".reservation-form");

  if (reservationForm) {

    const message = document.querySelector(".form-message");

    reservationForm.addEventListener("submit", function (e) {

      e.preventDefault();

      if (message) {

        message.innerHTML =
          "✅ Thank you! Your reservation request has been received. We will contact you shortly.";

        message.style.color = "#D4AF37";

      }

      reservationForm.reset();

      window.scrollTo({

        top: reservationForm.offsetTop - 100,

        behavior: "smooth"

      });

    });

  }

  // ==========================================
  // CONTACT FORM
  // ==========================================

  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      alert("✅ Thank you! Your message has been sent successfully.");

      contactForm.reset();

    });

  }

  // ==========================================
  // BUTTON RIPPLE EFFECT
  // ==========================================

  document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

      const circle = document.createElement("span");

      const diameter = Math.max(this.clientWidth, this.clientHeight);

      circle.style.width = circle.style.height = diameter + "px";

      circle.style.left = e.offsetX - diameter / 2 + "px";

      circle.style.top = e.offsetY - diameter / 2 + "px";

      circle.classList.add("ripple");

      const ripple = this.querySelector(".ripple");

      if (ripple) ripple.remove();

      this.appendChild(circle);

    });

  });

  // ==========================================
  // CURRENT YEAR
  // ==========================================

  document.querySelectorAll(".year").forEach(year => {

    year.textContent = new Date().getFullYear();

  });

  // ==========================================
  // IMAGE HOVER EFFECT
  // ==========================================

  document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

  });

  // ==========================================
  // END OF SCRIPT
  // ==========================================

});
