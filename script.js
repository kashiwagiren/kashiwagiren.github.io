window.onload = () => {
  const introText = document.querySelector('.fade-in');
  const typedText = document.querySelector('.typed-text');

  // Trigger the animation for Japanese text after the page has fully loaded
  setTimeout(() => {
      introText.classList.add('show'); // Add the 'show' class to trigger CSS transition
  }, 500); // Optional delay before starting the animation

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
      typedText.style.opacity = 1; // Ensure the text is visible
      typeEffect();
  }, 2000); // Starts after the first text animation finishes
};
