document.addEventListener('DOMContentLoaded', function() {
    // 1. Highlight Current Page in Navigation
    function highlightCurrentPage() {
      const currentPage = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('nav a');
  
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    }
  
    // 2. (Childhood Page)
    function initImageLightbox() {
      if (!document.querySelector('.memory img')) return;
  
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);
  
      document.querySelectorAll('.memory img').forEach(image => {
        image.addEventListener('click', () => {
          lightbox.classList.add('active');
          const img = document.createElement('img');
          img.src = image.src;
          img.alt = image.alt;
          
          // Clear previous content
          while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
          }
          
          lightbox.appendChild(img);
        });
      });
  
      lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });
    }
  
    //  3. Animated Skill Bars =

  
    // 4. Contact Form Validation 
    function initContactForm() {
      const form = document.querySelector('form');
      if (!form) return;
  
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
  
        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
          showError(name, 'Please enter your name');
          isValid = false;
        } else {
          clearError(name);
        }
  
        // Validate Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          showError(email, 'Please enter a valid email');
          isValid = false;
        } else {
          clearError(email);
        }
  
        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
          showError(message, 'Please enter your message');
          isValid = false;
        } else {
          clearError(message);
        }
  
        if (isValid) {
          // Simulate form submission
          alert('Thank you! Your message has been sent.');
          form.reset();
        }
      });
  
      function showError(input, message) {
        const formGroup = input.closest('label') || input.parentElement;
        let error = formGroup.querySelector('.error-message');
        
        if (!error) {
          error = document.createElement('div');
          error.className = 'error-message';
          formGroup.appendChild(error);
        }
        
        error.textContent = message;
        input.style.borderColor = '#e74c3c';
      }
  
      function clearError(input) {
        const formGroup = input.closest('label') || input.parentElement;
        const error = formGroup.querySelector('.error-message');
        
        if (error) {
          error.remove();
        }
        
        input.style.borderColor = '#ddd';
      }
    }
  
    // Copyright 
    function updateCopyrightYear() {
      const year = new Date().getFullYear();
      const footerText = document.querySelector('footer p');
      if (footerText) {
        footerText.innerHTML = `© ${year} My Journey | Designed by Victor K.`;
      }
    }
  
    //  Smooth Scrolling 
    function initSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    }
  
    
    highlightCurrentPage();
    initImageLightbox();
    initSkillBars();
    initContactForm();
    updateCopyrightYear();
    initSmoothScrolling();
  
    function animateOnScroll() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  });
