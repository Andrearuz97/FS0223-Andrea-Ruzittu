// Chiamata HTTP di tipo GET
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((data) => {
    const libraryElement = document.getElementById("library");
    data.forEach((book) => {
      // Creiamo una card per ogni libro
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      // inseriamo l'immagine del libro nella card
      const image = document.createElement("img");
      image.src = book.img;
      image.classList.add("card-img-top");
      card.appendChild(image);

      // creiamo ilcorpo della card
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Inserimento del tipo del libro nel corpo della card
      const type = document.createElement("p");
      type.classList.add("card-text");
      type.innerHTML = `Tipo: ${book.category}`;
      cardBody.appendChild(type);

      // Inserimento del prezzo del libro nel corpo della card
      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerHTML = `Prezzo: ${book.price}`;
      cardBody.appendChild(price);

      //pulsante per rimuovere il libro
      const removeButton = document.createElement("button");
      removeButton.classList.add("btn", "btn-danger");
      removeButton.innerHTML = "Scarta";
      removeButton.addEventListener("click", () => {
        card.remove(); // Rimozione della card quando il pulsante viene premuto
      });
      cardBody.appendChild(removeButton);

      // Inserimento del corpo della card nella card stessa
      card.appendChild(cardBody);

      // Aggiunta card alla libreria
      libraryElement.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
