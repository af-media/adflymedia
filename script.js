const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const contactForm = document.getElementById("contactForm");

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form captured. Next step: connect it to email or WhatsApp.");
  });
}

// coming soon modal
const comingSoonModal = document.getElementById("comingSoonModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

if (modalCloseBtn && comingSoonModal) {
  modalCloseBtn.addEventListener("click", () => {
    comingSoonModal.classList.add("hidden");
  });
}