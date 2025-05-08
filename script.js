window.onload = () => {
    const intro1 = document.querySelector('.type')
    const intro2 = document.querySelector('.text')
    const button = document.querySelector('.scrollDown')

    intro1.style.pointerEvents = 'none'
    button.style.pointerEvents = 'none'

    setTimeout( () => { intro1.classList.add('show'), intro1.style.pointerEvents = 'auto' }, 300 )
    setTimeout( () => { button.classList.add('showButton'), button.style.pointerEvents = 'auto' }, 500 )
    const textContent = "A Computer Engineering Student."
    let index = 0
    
    function typeText() {
        if (index < textContent.length) {
            intro2.textContent += textContent.charAt(index)
            index++
            setTimeout(typeText, 100)
        }
    }

    setTimeout( () => { intro2.classList.add('show'), typeText() }, 100 )
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector('.scrollDown')
    const nextSection = document.querySelector('.main')
    
    scrollButton.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' })
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector('.scrollUp')
    const nextSection = document.querySelector('.intro')
    
    scrollButton.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' })
    })
})

const h1Element = document.querySelector('.type')
const h2Element = document.querySelector('.type-1')

h2Element.style.transform = 'translateX(-100%)'
h2Element.style.opacity = '0'
h2Element.style.display = 'none'

function toggleSlideFade() {
    if (h1Element.style.display !== 'none') {
        h1Element.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
        h1Element.style.transform = 'translateX(100%)'
        h1Element.style.opacity = '0'

        setTimeout(() => {
            h1Element.style.display = 'none'
            h2Element.style.display = 'block'

            setTimeout(() => {
                h2Element.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
                h2Element.style.transform = 'translateX(0)'
                h2Element.style.opacity = '1'
            }, 10)
        }, 500)
    } else {
        h2Element.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
        h2Element.style.transform = 'translateX(-100%)'
        h2Element.style.opacity = '0'

        setTimeout(() => {
            h2Element.style.display = 'none'
            h1Element.style.display = 'block'

            setTimeout(() => {
                h1Element.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
                h1Element.style.transform = 'translateX(0)'
                h1Element.style.opacity = '1'
            }, 10)
        }, 500)
    }
}

h1Element.addEventListener('click', toggleSlideFade)
h2Element.addEventListener('click', toggleSlideFade)

document.querySelector('.cv-button').addEventListener('click', function() {
    this.classList.toggle('clicked')
})

document.querySelector('.cv-button').addEventListener('click', function() {
    document.querySelector('.main').style.display = 'none'
    document.querySelector('.frame-section').style.display = 'flex'
})

document.querySelector('.back-btn').addEventListener('click', function() {
    document.querySelector('.frame-section').style.display = 'none'
    document.querySelector('.main').style.display = 'flex'
})

const intro = document.querySelector('.intro');
        const mainSection = document.querySelector('.main');
        const scrollBtn = document.querySelector('.scrollDown');
        const pageTitle = document.querySelector('title');
    
        function activateMainView() {
            if (!intro) return;
    
            intro.classList.add('fade-out');
    
            setTimeout(() => {
                intro.style.display = 'none';
                pageTitle.textContent = 'My Portfolio';
                sessionStorage.setItem('introHidden', 'true');
            }, 800);
        }
    
        if (sessionStorage.getItem('introHidden') === 'true') {
            if (intro) intro.style.display = 'none';
            if (pageTitle) pageTitle.textContent = 'My Portfolio';
        }
    
        scrollBtn?.addEventListener('click', activateMainView);
    
        if ('IntersectionObserver' in window && !sessionStorage.getItem('introHidden')) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activateMainView();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
    
            observer.observe(mainSection);
        }
