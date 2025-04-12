document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbarToggle");
  const mobileNav = document.getElementById("mobileNav");

  navbarToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("show");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !subject) {
          alert('Please fill in all required fields');
          return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
      }
      
      console.log('Form submitted:', { name, email, subject, message });
      
      contactForm.reset();
      alert('Message sent successfully!');
  });
});