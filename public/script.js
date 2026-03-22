// ================= SCROLL REVEAL =================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 120;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible && elementTop > -el.offsetHeight) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ================= MAIN APP =================
document.addEventListener("DOMContentLoaded", () => {

  // ---------- CONTACT FORM ----------
  const contactSection = document.querySelector("#contact");

  if (!contactSection) {
    console.warn("Contact section not found");
    return;
  }

  const nameInput = contactSection.querySelector("input[type='text']");
  const emailInput = contactSection.querySelector("input[type='email']");
  const messageInput = contactSection.querySelector("textarea");
  const sendButton = contactSection.querySelector("button");

  if (!nameInput || !emailInput || !messageInput || !sendButton) {
    console.warn("Form elements missing");
    return;
  }

  sendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // ---------- VALIDATION ----------
    if (!name || !email || !message) {
      alert("Please fill all fields ❗");
      return;
    }

    // Better email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      alert("Enter a valid email ❗");
      return;
    }

    // ---------- BUTTON LOADING EFFECT ----------
    sendButton.innerText = "Sending...";
    sendButton.disabled = true;

    // Simulate sending (since no backend)
    setTimeout(() => {
      alert("Message sent successfully ✅");

      // Clear form
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      // Reset button
      sendButton.innerText = "Send Message";
      sendButton.disabled = false;

    }, 1000);
  });

});