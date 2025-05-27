// Run when the window has fully loaded
window.onload = () => {
  // Select intro elements and scroll button
  const intro1 = document.querySelector(".type");
  const intro2 = document.querySelector(".text");
  const button = document.querySelector(".scrollDown");

  // Disable pointer events initially
  intro1.style.pointerEvents = "none";
  button.style.pointerEvents = "none";

  // Show intro1 after 300ms and enable pointer events
  setTimeout(() => {
    intro1.classList.add("show"), (intro1.style.pointerEvents = "auto");
  }, 300);

  // Show scroll button after 500ms and enable pointer events
  setTimeout(() => {
    button.classList.add("showButton"), (button.style.pointerEvents = "auto");
  }, 500);

  // Typing effect for intro2
  const textContent = "A Computer Engineering Student.";
  let index = 0;

  function typeText() {
    if (index < textContent.length) {
      intro2.textContent += textContent.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }

  // Show intro2 and start typing effect after 100ms
  setTimeout(() => {
    intro2.classList.add("show"), typeText();
  }, 100);
};

// Smooth scroll down to main section on scrollDown button click
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scrollDown");
  const nextSection = document.querySelector(".main");

  scrollButton.addEventListener("click", () => {
    nextSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Smooth scroll up to intro section on scrollUp button click
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scrollUp");
  const nextSection = document.querySelector(".intro");

  scrollButton.addEventListener("click", () => {
    nextSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Slide/fade toggle between h1 and h2 elements
const h1Element = document.querySelector(".type");
const h2Element = document.querySelector(".type-1");

// Initialize h2 hidden and off-screen
h2Element.style.transform = "translateX(-100%)";
h2Element.style.opacity = "0";
h2Element.style.display = "none";

// Toggle slide/fade animation between h1 and h2
function toggleSlideFade() {
  if (h1Element.style.display !== "none") {
    // Hide h1, show h2 with animation
    h1Element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    h1Element.style.transform = "translateX(100%)";
    h1Element.style.opacity = "0";

    setTimeout(() => {
      h1Element.style.display = "none";
      h2Element.style.display = "block";

      setTimeout(() => {
        h2Element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        h2Element.style.transform = "translateX(0)";
        h2Element.style.opacity = "1";
      }, 10);
    }, 500);
  } else {
    // Hide h2, show h1 with animation
    h2Element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    h2Element.style.transform = "translateX(-100%)";
    h2Element.style.opacity = "0";

    setTimeout(() => {
      h2Element.style.display = "none";
      h1Element.style.display = "block";

      setTimeout(() => {
        h1Element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        h1Element.style.transform = "translateX(0)";
        h1Element.style.opacity = "1";
      }, 10);
    }, 500);
  }
}

// Add click event listeners to toggle between h1 and h2
h1Element.addEventListener("click", toggleSlideFade);
h2Element.addEventListener("click", toggleSlideFade);

// Toggle .clicked class on CV button click
document.querySelector(".cv-button").addEventListener("click", function () {
  this.classList.toggle("clicked");
});

// Show frame-section and hide main on CV button click
document.querySelector(".cv-button").addEventListener("click", function () {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".frame-section").style.display = "flex";
});

// Show main and hide frame-section on back button click
document.querySelector(".back-btn").addEventListener("click", function () {
  document.querySelector(".frame-section").style.display = "none";
  document.querySelector(".main").style.display = "flex";
});

// Intro fade-out and main view activation logic
const intro = document.querySelector(".intro");
const mainSection = document.querySelector(".main");
const scrollBtn = document.querySelector(".scrollDown");
const pageTitle = document.querySelector("title");

// Hide intro, update title, and remember state in sessionStorage
function activateMainView() {
  if (!intro) return;

  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    pageTitle.textContent = "My Portfolio";
    sessionStorage.setItem("introHidden", "true");
  }, 800);
}

// Restore state if intro was previously hidden
if (sessionStorage.getItem("introHidden") === "true") {
  if (intro) intro.style.display = "none";
  if (pageTitle) pageTitle.textContent = "My Portfolio";
  document.querySelector(".frame-section").style.display = "none";
}

// Activate main view on scrollDown button click
scrollBtn?.addEventListener("click", activateMainView);

// Use IntersectionObserver to auto-activate main view when main section is visible
if (
  "IntersectionObserver" in window &&
  !sessionStorage.getItem("introHidden")
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateMainView();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(mainSection);
}

// Tab toggle logic for school and personal tabs
document.getElementById("school-tab").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".frame-one").classList.add("active");
  document.querySelector(".frame-two").classList.remove("active");
});

document.getElementById("personal-tab").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".frame-two").classList.add("active");
  document.querySelector(".frame-one").classList.remove("active");
});

// Fullscreen image view logic
const fullscreenView = document.querySelector(".fullscreen-view");
const fullscreenImg = fullscreenView.querySelector("img");

// Show fullscreen image on gallery image click
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    fullscreenImg.src = img.src;
    fullscreenView.style.display = "flex";
  });
});

// Hide fullscreen view on close button click
document.querySelector(".close-btn").addEventListener("click", () => {
  fullscreenView.style.display = "none";
});

// Hide the .below section when CV button is clicked
document.querySelector(".cv-button").addEventListener("click", function () {
  const belowSection = document.querySelector(".below");
  if (belowSection) {
    belowSection.style.display = "none";
  }
});

// Show the .below section again when back button is clicked
document.querySelector(".back-btn").addEventListener("click", function () {
  const belowSection = document.querySelector(".below");
  if (belowSection) {
    belowSection.style.display = "block";
  }
});

// Hide the .below section when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
});

document.querySelector(".works-button").addEventListener("click", function () {
  const belowSection = document.querySelector(".below");
  const mainSection = document.querySelector(".main");
  if (belowSection) belowSection.style.display = "block";
  if (mainSection) mainSection.style.display = "none";
});

document.getElementById("home-tab").addEventListener("click", function (e) {
  e.preventDefault();
  const mainSection = document.querySelector(".main");
  const belowSection = document.querySelector(".below");
  if (mainSection) mainSection.style.display = "flex";
  if (belowSection) belowSection.style.display = "none";
});

document.querySelector(".back-btn").addEventListener("click", function () {
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
});

document.querySelectorAll(".gallery-video").forEach((galleryVideo) => {
  // Create fullscreen video container (only once)
  let fullscreenVideoView = document.querySelector(".fullscreen-video-view");
  let fullscreenVideo, closeBtn;

  if (!fullscreenVideoView) {
    fullscreenVideoView = document.createElement("div");
    fullscreenVideoView.className = "fullscreen-video-view";
    fullscreenVideoView.style.cssText = `
      display: none;
      position: fixed;
      z-index: 9999;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.9);
      justify-content: center;
      align-items: center;
    `;

    fullscreenVideo = document.createElement("video");
    fullscreenVideo.style.cssText = `
      width: 1280px;
      height: 720px;
      background: #000;
      box-shadow: 0 0 24px #000a;
      border-radius: 8px;
      max-width: 95vw;
      max-height: 90vh;
      display: block;
    `;
    fullscreenVideo.setAttribute("autoplay", "");

    closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.className = "close-video-btn";
    closeBtn.style.cssText = `
      position: absolute;
      top: 32px;
      right: 48px;
      font-size: 2.5rem;
      color: #fff;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 10001;
    `;

    fullscreenVideoView.appendChild(fullscreenVideo);
    fullscreenVideoView.appendChild(closeBtn);
    document.body.appendChild(fullscreenVideoView);

    closeBtn.addEventListener("click", () => {
      fullscreenVideo.pause();
      fullscreenVideoView.style.display = "none";
      fullscreenVideo.src = "";
    });
  } else {
    fullscreenVideo = fullscreenVideoView.querySelector("video");
    closeBtn = fullscreenVideoView.querySelector(".close-video-btn");
  }

  galleryVideo.addEventListener("click", () => {
    fullscreenVideo.src =
      galleryVideo.src || galleryVideo.querySelector("source")?.src || "";
    fullscreenVideo.currentTime = 0;
    fullscreenVideoView.style.display = "flex";
    fullscreenVideo.muted = false;
    fullscreenVideo.play();
  });
});

// Handle .fab.fa-github, .fab.fa-linkedin-in, and .fab.fa-instagram clicks to open in new tab
document.querySelectorAll(".social-icons a, .contact-button").forEach((el) => {
  el.addEventListener("click", function (e) {
    const href = el.getAttribute("href") || el.dataset.href;
    // For mailto links, open Gmail compose in new tab with prefilled address and subject
    if (href && href.startsWith("mailto:")) {
      e.preventDefault();
      const email = href.replace("mailto:", "");
      const subject = encodeURIComponent("Questions about my site");
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${subject}`;
      window.open(gmailComposeUrl, "_blank");
    } else if (href && href.startsWith("http")) {
      e.preventDefault();
      window.open(href, "_blank");
    }
  });
});
