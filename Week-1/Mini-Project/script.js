function submitContact(event) {
  event.preventDefault(); // Prevent page reload
  alert("✅ Your message has been submitted!");
  document.getElementById("contactForm").reset(); // Clear form
}

function submitContact(event) {
  event.preventDefault();
  alert("✅ Your message has been submitted!");
  document.getElementById("contactForm").reset();
}

// Contact section reveal animation
const contactCard = document.querySelector(".contact-card");

window.addEventListener("scroll", () => {
  const cardTop = contactCard.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (cardTop < screenHeight - 120) {
    contactCard.classList.add("show");
  }
});

// Contact form submit (UI feedback only)
document.querySelector(".contact-right").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent. I’ll get back to you soon.");
  e.target.reset();
});
