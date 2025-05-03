function learnMore() {
    alert("Explore more about our transportation services below!");
  }
  
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
  }

  // Add active class to clicked navigation item
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
  });