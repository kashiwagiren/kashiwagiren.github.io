// ============================================================
// Intro Animation + Scroll Setup
// ============================================================
window.onload = () => {
  const intro1 = document.querySelector(".type");
  const intro2 = document.querySelector(".text");
  const button = document.querySelector(".scrollDown");

  intro1.style.pointerEvents = "none";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    intro2.classList.add("show");
    typeText();
  }, 100);

  setTimeout(() => {
    intro1.classList.add("show");
    intro1.style.pointerEvents = "auto";
  }, 300);

  setTimeout(() => {
    button.classList.add("showButton");
    button.style.pointerEvents = "auto";
  }, 500);
};

// Typewriter effect for intro subtitle
const textContent = "A Computer Engineering Student.";
let typeIndex = 0;

function typeText() {
  const intro2 = document.querySelector(".text");
  if (typeIndex < textContent.length) {
    intro2.textContent += textContent.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeText, 100);
  }
}

// ============================================================
// DOMContentLoaded — all setup that needs the DOM ready
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scrollDown");
  const mainSection = document.querySelector(".main");
  scrollButton.addEventListener("click", () => {
    mainSection.scrollIntoView({ behavior: "smooth" });
  });

  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
});

// ============================================================
// Language Toggle (JP ↔ EN greeting)
// ============================================================
const h1Element = document.querySelector(".type");
const h2Element = document.querySelector(".type-1");

h2Element.style.transform = "translateX(-100%)";
h2Element.style.opacity = "0";
h2Element.style.display = "none";

function toggleSlideFade() {
  const showingH1 = h1Element.style.display !== "none";

  if (showingH1) {
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

h1Element.addEventListener("click", toggleSlideFade);
h2Element.addEventListener("click", toggleSlideFade);

// ============================================================
// Intro Fade-out & State Persistence
// ============================================================
const intro = document.querySelector(".intro");
const pageTitle = document.querySelector("title");
const scrollBtn = document.querySelector(".scrollDown");

function activateMainView() {
  if (!intro) return;
  intro.classList.add("fade-out");
  setTimeout(() => {
    intro.style.display = "none";
    if (pageTitle) pageTitle.textContent = "My Portfolio";
    sessionStorage.setItem("introHidden", "true");
  }, 800);
}

if (sessionStorage.getItem("introHidden") === "true") {
  if (intro) intro.style.display = "none";
  if (pageTitle) pageTitle.textContent = "My Portfolio";
  document.querySelector(".frame-section").style.display = "none";
}

scrollBtn?.addEventListener("click", activateMainView);

if ("IntersectionObserver" in window && !sessionStorage.getItem("introHidden")) {
  const mainSection = document.querySelector(".main");
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

// ============================================================
// CV Button — show resume, hide everything else
// ============================================================
document.querySelector(".cv-button").addEventListener("click", function () {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".frame-section").style.display = "flex";
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
});

// ============================================================
// Back Button — return to main, hide resume
// ============================================================
document.querySelector(".back-btn").addEventListener("click", function () {
  document.querySelector(".frame-section").style.display = "none";
  document.querySelector(".main").style.display = "flex";
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
});

// ============================================================
// Works Button — show gallery, hide main
// ============================================================
document.querySelector(".works-button").addEventListener("click", function () {
  const belowSection = document.querySelector(".below");
  const mainSection = document.querySelector(".main");
  if (belowSection) belowSection.style.display = "flex";
  if (mainSection) mainSection.style.display = "none";
});

// ============================================================
// Home Tab — return to main from gallery
// ============================================================
document.getElementById("home-tab").addEventListener("click", function (e) {
  e.preventDefault();
  const mainSection = document.querySelector(".main");
  const belowSection = document.querySelector(".below");
  if (mainSection) mainSection.style.display = "flex";
  if (belowSection) belowSection.style.display = "none";
  setActiveTab(null);
});

// ============================================================
// Gallery Tab Switching
// ============================================================
function setActiveTab(activeId) {
  document.querySelectorAll(".below-navbar ul a").forEach((a) => {
    a.classList.remove("active");
  });
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) el.classList.add("active");
  }
}

document.getElementById("school-tab").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".frame-one").classList.add("active");
  document.querySelector(".frame-two").classList.remove("active");
  setActiveTab("school-tab");
});

document.getElementById("personal-tab").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".frame-two").classList.add("active");
  document.querySelector(".frame-one").classList.remove("active");
  setActiveTab("personal-tab");
});

// ============================================================
// Fullscreen Image Viewer
// ============================================================
const fullscreenView = document.querySelector(".fullscreen-view");
const fullscreenImg = fullscreenView.querySelector("img");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    fullscreenImg.src = img.src;
    fullscreenView.style.display = "flex";
  });
});

document.querySelector(".close-btn").addEventListener("click", () => {
  fullscreenView.style.display = "none";
});

fullscreenView.addEventListener("click", (e) => {
  if (e.target === fullscreenView) fullscreenView.style.display = "none";
});

// ============================================================
// Fullscreen Video Viewer
// ============================================================
const fullscreenVideoView = document.createElement("div");
fullscreenVideoView.className = "fullscreen-video-view";
fullscreenVideoView.style.cssText = `
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.92);
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
`;

const fullscreenVideo = document.createElement("video");
fullscreenVideo.controls = true;
fullscreenVideo.style.cssText = `
  width: 1280px;
  height: 720px;
  background: #000;
  box-shadow: 0 0 40px rgba(0,0,0,0.8);
  border-radius: 12px;
  max-width: 95vw;
  max-height: 88vh;
  display: block;
`;

const closeVideoBtn = document.createElement("button");
closeVideoBtn.textContent = "×";
closeVideoBtn.setAttribute("aria-label", "Close video");
closeVideoBtn.style.cssText = `
  position: absolute;
  top: 20px;
  right: 28px;
  font-size: 2rem;
  font-weight: 300;
  color: rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.08);
  border: none;
  cursor: pointer;
  z-index: 10001;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

fullscreenVideoView.appendChild(fullscreenVideo);
fullscreenVideoView.appendChild(closeVideoBtn);
document.body.appendChild(fullscreenVideoView);

closeVideoBtn.addEventListener("click", () => {
  fullscreenVideo.pause();
  fullscreenVideoView.style.display = "none";
  fullscreenVideo.src = "";
});

fullscreenVideoView.addEventListener("click", (e) => {
  if (e.target === fullscreenVideoView) {
    fullscreenVideo.pause();
    fullscreenVideoView.style.display = "none";
    fullscreenVideo.src = "";
  }
});

// Click on video wrapper opens fullscreen
document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    const vid = wrapper.querySelector(".gallery-video");
    const src = vid.src || vid.querySelector("source")?.src || "";
    fullscreenVideo.src = src;
    fullscreenVideo.currentTime = 0;
    fullscreenVideo.muted = false;
    fullscreenVideoView.style.display = "flex";
    fullscreenVideo.play();
  });
});

// ============================================================
// External Links — social icons and contact button
// ============================================================
document.querySelectorAll(".social-icons a, .contact-button").forEach((el) => {
  el.addEventListener("click", function (e) {
    const href = el.getAttribute("href") || el.dataset.href;
    if (href && href.startsWith("mailto:")) {
      e.preventDefault();
      const email = href.replace("mailto:", "");
      const subject = encodeURIComponent("Questions about my site");
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}`;
      window.open(gmailUrl, "_blank");
    } else if (href && href.startsWith("http")) {
      e.preventDefault();
      window.open(href, "_blank");
    }
  });
});
