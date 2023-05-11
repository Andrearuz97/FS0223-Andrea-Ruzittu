fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((data) => {
    const libraryElement = document.getElementById("library");
    let cardsHTML = '';

    data.forEach((book) => {

      const cardHTML = `
        <div class="card mb-3">
          <img src="${book.img}" class="card-img-top" alt="Book Image">
          <div class="card-body">
            <p class="card-text">Tipo: ${book.category}</p>
            <p class="card-text">Prezzo: ${book.price}</p>
            <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
          </div>
        </div>
      `;

      cardsHTML += cardHTML;
    });

    // Aggiunge il codice HTML delle carte alla libreria
    libraryElement.innerHTML = cardsHTML;
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });

// Funzione per rimuovere la carta quando il pulsante "Scarta" viene premuto
function removeCard(button) {
  const card = button.closest(".card");
  card.remove();
}
