<script>
  document.addEventListener('DOMContentLoaded', function() {
    const characters = [
      {
        name: "Character 1",
        image: "character1.jpg",
        description: "Character 1 description...",
      },
      {
        name: "Character 2",
        image: "character2.jpg",
        description: "Character 2 description...",
      },
      {
        name: "Character 3",
        image: "character3.jpg",
        description: "Character 2 description...",
      },
      {
        name: "Character 4",
        image: "character2.jpg",
        description: "Character 2 description...",
      },
      {
        name: "Character 5",
        image: "character2.jpg",
        description: "Character 2 description...",
      },
      
      // Add more characters here...
    ];

    const backToTopButton = document.getElementById("backToTop");

    // Hide the button initially
    backToTopButton.style.display = "none";

    // Add the event listener for scroll event
    window.addEventListener("scroll", () => {
    // Show the button if the user has scrolled down, otherwise hide it
    if (window.scrollY > 0) {
      backToTopButton.style.display = "inline-block";
    } else {
      backToTopButton.style.display = "none";
    }
    });


    const charactersContainer = document.querySelector(".characters-container");

    function renderCharacters(characters) {
      if (!charactersContainer) {
        console.error("charactersContainer element not found");
        return;
      }

      charactersContainer.innerHTML = "";

      characters.forEach((character, index) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");
        characterCard.classList.add(`character-${index + 1}`);
      
        characterCard.innerHTML = `
          <h3>${character.name}</h3>
          <p>${character.description}</p>
        `;
      
        charactersContainer.appendChild(characterCard);
      });
      
    }

    renderCharacters(characters);
  });
</script>
