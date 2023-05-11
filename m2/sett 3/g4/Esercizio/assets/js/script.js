function loadImages(query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: "v5fmsWEWcW5hSXHFCNJ2LEN5cD1Vsp3Btj1urxJFOnd0Jbloh09iRfzU",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = "";

      if (data && data.photos && data.photos.length > 0) {
        data.photos.forEach((photo) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.style.width = "18rem";
          card.innerHTML = `
              <img src="${photo.src.medium}" class="card-img-top" alt="${photo.photographer}">
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">ID: ${photo.id}</p>
                <button class="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="${photo.src.large}" data-photographer="${photo.photographer}">View</button>
                <button class="btn btn-primary hide-btn">Hide</button>
              </div>
            `;

          const hideBtn = card.querySelector(".hide-btn");
          hideBtn.addEventListener("click", () => {
            card.style.display = "none";
          });

          cardContainer.appendChild(card);
        });
      } else {
        console.log("Nessuna immagine trovata");
      }
    })
    .catch((error) => {
      console.log("Errore durante il caricamento delle immagini:", error);
    });
}

const loadImagesBtn = document.getElementById("loadImagesBtn");
loadImagesBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value;
  loadImages(query);
});

function loadSecondaryImages(query2) {
  fetch(`https://api.pexels.com/v1/search?query=${query2}`, {
    headers: {
      Authorization: "v5fmsWEWcW5hSXHFCNJ2LEN5cD1Vsp3Btj1urxJFOnd0Jbloh09iRfzU",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = "";

      if (data && data.photos && data.photos.length > 0) {
        data.photos.forEach((photo) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.style.width = "18rem";
          card.innerHTML = `
              <img src="${photo.src.medium}" class="card-img-top" alt="${photo.photographer}">
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">ID: ${photo.id}</p>
                <button class="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="${photo.src.large}" data-photographer="${photo.photographer}">View</button>
                <button class="btn btn-primary hide-btn">Hide</button>
              </div>
            `;

          const hideBtn = card.querySelector(".hide-btn");
          hideBtn.addEventListener("click", () => {
            card.style.display = "none";
          });

          cardContainer.appendChild(card);
        });
      } else {
        console.log("Nessuna immagine trovata");
      }
    })
    .catch((error) => {
      console.log(
        "Errore durante il caricamento delle immagini secondarie:",
        error
      );
    });
}

const loadSecondaryImagesBtn = document.getElementById(
  "loadSecondaryImagesBtn"
);
loadSecondaryImagesBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value;
  loadSecondaryImages(query);
});

const viewBtns = document.querySelectorAll(".view-btn");
viewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalImage = document.getElementById("modalImage");
    const photographer = btn.getAttribute("data-photographer");
    const image = btn.getAttribute("data-image");

    modalImage.src = image;
    modalImage.alt = photographer;
  });
});
