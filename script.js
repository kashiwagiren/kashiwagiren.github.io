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
  } else {
    intro2.classList.add("typing-done");
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
// Scroll Progress Bar
// ============================================================
const progressBar = document.getElementById("progressBar");
const scrollContainer = document.querySelector(".scroll-container");

if (scrollContainer && progressBar) {
  scrollContainer.addEventListener("scroll", () => {
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  });
}

// ============================================================
// Scroll Reveal (IntersectionObserver)
// ============================================================
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}

// Resume section reveal with stagger
function initResumeReveal() {
  const sections = document.querySelectorAll(".frame-section .main-section");
  sections.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  const resumeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          resumeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  sections.forEach((el) => resumeObserver.observe(el));
}

initScrollReveal();
initResumeReveal();

// ============================================================
// CV Button — show resume, hide everything else
// ============================================================
document.querySelector(".cv-button").addEventListener("click", function () {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".frame-section").style.display = "flex";
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
  initResumeReveal();
});

// ============================================================
// Back Button — return to main, hide resume
// ============================================================
document.querySelector(".back-btn").addEventListener("click", function () {
  document.querySelector(".frame-section").style.display = "none";
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
  const mainSection = document.querySelector(".main");
  if (mainSection) {
    mainSection.style.display = "flex";
    setTimeout(() => mainSection.scrollIntoView({ behavior: "smooth" }), 50);
  }
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
  const belowSection = document.querySelector(".below");
  if (belowSection) belowSection.style.display = "none";
  const mainSection = document.querySelector(".main");
  if (mainSection) {
    mainSection.style.display = "flex";
    setTimeout(() => mainSection.scrollIntoView({ behavior: "smooth" }), 50);
  }
  setActiveTab(null);
});

// ============================================================
// Gallery Tab Switching + Animation
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

function switchGallery(show, hide, tabId) {
  if (show.classList.contains("active")) return;

  hide.style.opacity = "0";
  hide.style.transform = "scale(0.97)";
  hide.style.transition = "opacity 0.15s ease, transform 0.15s ease";

  setTimeout(() => {
    hide.classList.remove("active");
    hide.style.opacity = "";
    hide.style.transform = "";
    hide.style.transition = "";

    show.classList.add("active");
    show.scrollTop = 0;

    // Stagger entrance
    const items = show.querySelectorAll(".gallery-item, .video-wrapper");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "scale(0.88) translateY(10px)";
      item.style.transition = `opacity 0.3s ease ${i * 0.04}s, transform 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        item.style.opacity = "1";
        item.style.transform = "scale(1) translateY(0)";
      }));
    });

    const duration = items.length * 40 + 350;
    setTimeout(() => {
      items.forEach((item) => {
        item.style.opacity = "";
        item.style.transform = "";
        item.style.transition = "";
      });
    }, duration);

    setActiveTab(tabId);
    buildGalleryList();
  }, 150);
}

document.getElementById("school-tab").addEventListener("click", (e) => {
  e.preventDefault();
  switchGallery(
    document.querySelector(".frame-one"),
    document.querySelector(".frame-two"),
    "school-tab"
  );
});

document.getElementById("personal-tab").addEventListener("click", (e) => {
  e.preventDefault();
  switchGallery(
    document.querySelector(".frame-two"),
    document.querySelector(".frame-one"),
    "personal-tab"
  );
});

// ============================================================
// Gallery Enhancements — zoom icons + count badges
// ============================================================
function initGalleryEnhancements() {
  // Inject zoom icon into each gallery-item
  document.querySelectorAll(".gallery-item").forEach((item) => {
    if (!item.querySelector(".zoom-icon")) {
      const zoom = document.createElement("span");
      zoom.className = "zoom-icon";
      zoom.innerHTML = '<i class="fas fa-expand-alt"></i>';
      item.appendChild(zoom);
    }
  });

  // Count badges
  const schoolCount = document.querySelectorAll(
    ".frame-one .gallery-item, .frame-one .video-wrapper"
  ).length;
  const personalCount = document.querySelectorAll(
    ".frame-two .gallery-item, .frame-two .video-wrapper"
  ).length;
  const sc = document.getElementById("school-count");
  const pc = document.getElementById("personal-count");
  if (sc) sc.textContent = schoolCount;
  if (pc) pc.textContent = personalCount;
}

initGalleryEnhancements();

// ============================================================
// Fullscreen Image Viewer — with prev/next navigation
// ============================================================
const fullscreenView = document.querySelector(".fullscreen-view");
const fullscreenImg = fullscreenView.querySelector("img");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const lightboxCounter = document.querySelector(".lightbox-counter");

let galleryImages = [];
let currentImageIndex = 0;

function buildGalleryList() {
  const activeGallery = document.querySelector(".works-gallery.active");
  if (!activeGallery) return;
  galleryImages = Array.from(activeGallery.querySelectorAll(".gallery-img"));
}

function openLightbox(index) {
  buildGalleryList();
  if (!galleryImages.length) return;
  currentImageIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
  showLightboxImage(currentImageIndex);
  fullscreenView.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function showLightboxImage(index) {
  fullscreenImg.style.opacity = "0";
  setTimeout(() => {
    fullscreenImg.src = galleryImages[index].src;
    fullscreenImg.alt = galleryImages[index].alt;
    fullscreenImg.style.opacity = "1";
  }, 150);
  lightboxCounter.textContent = `${index + 1} / ${galleryImages.length}`;
}

function closeLightbox() {
  fullscreenView.style.display = "none";
  document.body.style.overflow = "";
}

function prevImage() {
  if (!galleryImages.length) return;
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  showLightboxImage(currentImageIndex);
}

function nextImage() {
  if (!galleryImages.length) return;
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  showLightboxImage(currentImageIndex);
}

// Click on gallery images → open lightbox
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    buildGalleryList();
    const img = item.querySelector(".gallery-img");
    const idx = galleryImages.indexOf(img);
    openLightbox(idx >= 0 ? idx : 0);
  });
});

lightboxPrev?.addEventListener("click", (e) => { e.stopPropagation(); prevImage(); });
lightboxNext?.addEventListener("click", (e) => { e.stopPropagation(); nextImage(); });

document.querySelector(".close-btn").addEventListener("click", closeLightbox);

fullscreenView.addEventListener("click", (e) => {
  if (e.target === fullscreenView) closeLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (fullscreenView.style.display !== "flex") return;
  if (e.key === "Escape")      closeLightbox();
  if (e.key === "ArrowLeft")   prevImage();
  if (e.key === "ArrowRight")  nextImage();
});

// Touch swipe support
let touchStartX = 0;
let touchStartY = 0;

fullscreenView.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

fullscreenView.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
  if (Math.abs(dx) > 50 && dy < 80) {
    if (dx < 0) nextImage();
    else prevImage();
  }
}, { passive: true });

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
  background: rgba(0,0,0,0.94);
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const fullscreenVideo = document.createElement("video");
fullscreenVideo.controls = true;
fullscreenVideo.style.cssText = `
  max-width: 92vw;
  max-height: 88vh;
  width: auto;
  height: auto;
  background: #000;
  box-shadow: 0 0 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(99,102,241,0.18);
  border-radius: 14px;
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
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s ease, color 0.2s ease;
`;

fullscreenVideoView.appendChild(fullscreenVideo);
fullscreenVideoView.appendChild(closeVideoBtn);
document.body.appendChild(fullscreenVideoView);

closeVideoBtn.addEventListener("mouseenter", () => {
  closeVideoBtn.style.background = "rgba(255,255,255,0.15)";
  closeVideoBtn.style.color = "#fff";
});
closeVideoBtn.addEventListener("mouseleave", () => {
  closeVideoBtn.style.background = "rgba(255,255,255,0.08)";
  closeVideoBtn.style.color = "rgba(255,255,255,0.7)";
});

function closeVideoLightbox() {
  fullscreenVideo.pause();
  fullscreenVideoView.style.display = "none";
  fullscreenVideo.src = "";
  document.body.style.overflow = "";
}

closeVideoBtn.addEventListener("click", closeVideoLightbox);

fullscreenVideoView.addEventListener("click", (e) => {
  if (e.target === fullscreenVideoView) closeVideoLightbox();
});

document.addEventListener("keydown", (e) => {
  if (fullscreenVideoView.style.display === "flex" && e.key === "Escape") {
    closeVideoLightbox();
  }
});

// Click on video wrapper → open fullscreen video
document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    // Prefer data-src attribute (set on wrapper), fallback to source element
    const src =
      wrapper.dataset.src ||
      wrapper.querySelector("source")?.src ||
      wrapper.querySelector("video")?.src ||
      "";

    if (!src) return;

    fullscreenVideo.src = src;
    fullscreenVideo.currentTime = 0;
    fullscreenVideo.muted = false;
    fullscreenVideoView.style.display = "flex";
    document.body.style.overflow = "hidden";
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
