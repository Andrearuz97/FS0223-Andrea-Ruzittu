const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTNiMjg4Zjc0MDAwMTQyODc1N2YiLCJpYXQiOjE2ODM5MDE0ODcsImV4cCI6MTY4NTExMTA4N30.ySDb5R8y0G7i6H3c-YCv0CcSG4TI523fHu6tgFlJYKo";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
});

window.onload = async () => {
  try {
    const response = await fetch(BASE_URL, { headers });
    const data = await response.json();
    localStorage.setItem("products", JSON.stringify(data));
    const content = document.querySelector("#product-card");
    content.innerHTML = "";

    data.forEach((product) => {
      content.innerHTML += `<div class="col-6 col-md-2 col-lg-2">
          <div class="card shadow pt-3 px-3 p-md-0">
            <a href="details.html?id=${product._id}"><img style="height:16rem;" src="${product.imageUrl}" class="object-fit-cover-contain card-img-top" alt="..." /></a>

            <div class="card-body">
              <a class="title-link text-dark" href="details.html?id=${product._id}"><h5 class="text-truncate flex-nowrap card-title text-dark">${product.name}</h5></a>

              <p class="card-text overflow-hidden text-truncate">
                ${product.description}
              </p>

              <hr>

              <div class="pb-3 text-center">
                <a class="btn btn-danger text-dark fw-bold me-2" href="backOffice.html?id=${product._id}">Modifica</a>
              </div>

              <div class="text-center">
              <a class="btn btn-warning text-dark fw-bold" href="details.html?id=${product._id}">Visualizza articolo</a>
              </div>

            </div>
          </div>
        </div >`;
    });
  } catch (error) {
    console.log(error);
  }
};
