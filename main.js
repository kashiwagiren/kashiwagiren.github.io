  function goToHomePage() {
    location.reload();
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const characters = [
    {
        name: "Tanjiro Kamado",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b126071-BTNEc1nRIv68.png",
        description: "竈門炭治郎",
      },
      {
        name: "Makima",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b137080-SnM8uk7GEgPl.png",
        description: "マキマ",
      },
      {
        name: "Rimuru Tempest",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b123962-eL9yGV0NLMF7.png",
        description: "リムル・テンペスト",
      },
      {
        name: "Kyoujurou Rengoku",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b129133-VlTPowwt68rJ.png",
        description: "煉獄杏寿郎",
      },
      {
        name: "Nino Nakano",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b126372-DtorHRgQaYUJ.png",
        description: "中野二乃",
      },
      {
        name: "Kazuma Satou",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b89364-7Th8Tv1XKJtt.png",
        description: "佐藤和真",
      },
      {
        name: "Hitagi Senjougahara",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b22037-vMV86oknAmLT.jpg",
        description: "戦場ヶ原ひたぎ",
      },
      {
        name: "Dio Brando",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b4004-nPubXwI7zvZo.png",
        description: "ディオ・ブランドー",
      },
      {
        name: "Kamina",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b2075-sWb5Xz76JWdX.png",
        description: "カミナ",
      },
      {
        name: "Vladilena Milizé",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b141061-jqIhB9jmClQ3.png",
        description: "ヴラディレーナ・ミリーゼ",
      },
      {
        name: "Revy",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b458-tlKqPcuR287U.png",
        description: "レヴィ",
      },
      {
        name: "Hitori Gotou",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b257562-97fPDk3TxIGR.png",
        description: "後藤ひとり",
      },
      {
        name: "Kaguya Shinomiya",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b120649-JMKQgPmVq6d3.png",
        description: "四宮かぐや",
      },
      {
        name: "Kiyotaka Ayanokouji",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b123212-ewZgUQr9vvEM.png",
        description: "綾小路清隆",
      },
      {
        name: "Gintoki Sakata",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b672-gqeWnyXzOjyX.png",
        description: "坂田銀時",
      },
      {
        name: "Shouyo Hinata",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b64769-WoWlCMLLgJ14.png",
        description: "日向翔陽",
      },
      {
        name: "Tobio Kageyama",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b64771-BuCVs7B8bBdh.png",
        description: "影山飛雄",
      },
      {
        name: "Shinobu Oshino",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b23602-Z4MDNYcoAWZu.png",
        description: "忍野忍",
      },
      {
        name: "Roy Mustang",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b68-moBLY2WO2am3.png",
        description: "ロイ・マスタング",
      },
      {
        name: "Yato",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b84677-Vgd7MBg6EAzK.png",
        description: "夜ト",
      },
      {
        name: "Jotaro Kuujou",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b4003-gWDSEGbeOAll.png",
        description: "空条承太郎",
      },
      {
        name: "Giyuu Tomioka",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b130050-qsLThJs5VIbz.png",
        description: "冨岡義勇",
      },
      {
        name: "Erwin Smith",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b46496-Mu86MENd5wNB.png",
        description: "エルヴィン・スミス",
      },
      {
        name: "Ai Hayasaka",
        image: "https://s4.anilist.co/file/anilistcdn/character/large/b121104-7TYRl3EEsDYU.png",
        description: "早坂愛",
      },
  ];

  const modal = document.getElementById("characterModal");

  const closeButton = document.querySelector(".close");

  closeButton.onclick = function () {
    modal.classList.remove("show");
  };

  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  function showCharacterModal(character) {
    const characterName = document.getElementById("characterName");
    const characterImage = document.getElementById("characterImage");
    const characterDescription = document.getElementById("characterDescription");
  
    characterName.textContent = character.name;
    characterImage.src = character.image;
    characterImage.alt = character.name;
    characterDescription.textContent = character.description;
  
    modal.style.display = "block";
    modal.classList.add("show");
  }

  const charactersContainer = document.querySelector(".characters-container");
  
  function renderCharacters(characters) {
    charactersContainer.innerHTML = "";
  
    characters.forEach((character, index) => {
      const characterCard = document.createElement("div");
      characterCard.classList.add("character-card");
  
      characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <h3>${character.name}</h3>
        <p>${character.description}</p>
      `;

      characterCard.addEventListener("click", () => showCharacterModal(character));
  
      charactersContainer.appendChild(characterCard);
    });
  }
  
  renderCharacters(characters);
  
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  });