document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector('.fade-in');
    const typedText = document.querySelector('.typed-text');
    
    // Japanese text fade-in animation
    setTimeout(() => {
      introText.style.animation = "slideUp 2s ease-out forwards";
    }, 500);
    
    // Typing effect for the English translation and occupation
    const occupationText = "A Computer Engineering Student.";
    let index = 0;
  
    function typeEffect() {
      if (index < occupationText.length) {
        typedText.textContent += occupationText.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Smoother and faster typing effect
      }
    }
  
    // Trigger the typing animation after the Japanese text appears
    setTimeout(() => {
      typedText.style.opacity = 1;
      typeEffect();
    }, 2500); // Starts after the first text animation finishes
  });
  