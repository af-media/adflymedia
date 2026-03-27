const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const contactForm = document.getElementById("contactForm");

// mobile menu toggle
if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// mobile menu close on click
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// scroll reveal animation
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

// validation functions
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  const cleaned = value.replace(/\D/g, "");
  return cleaned.length >= 10 && cleaned.length <= 15;
}

// form handling (FormSubmit + WhatsApp)
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const contact = contactForm.querySelector('input[name="contact"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    // validation
    if (!isValidEmail(contact) && !isValidPhone(contact)) {
      e.preventDefault(); // ❗ only block if invalid
      alert("Please enter a valid email address or mobile number.");
      return;
    }

    // WhatsApp message
    const whatsappNumber = "910000000000"; // 👈 apna number daal
    const whatsappText =
      `New Enquiry - ADFLYMEDIA:%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Contact: ${encodeURIComponent(contact)}%0A` +
      `Message: ${encodeURIComponent(message)}`;

    // WhatsApp open after slight delay
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, "_blank");
    }, 500);

    // ❗ IMPORTANT: yaha preventDefault nahi hai
    // form automatically submit hoga → email jayegi
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