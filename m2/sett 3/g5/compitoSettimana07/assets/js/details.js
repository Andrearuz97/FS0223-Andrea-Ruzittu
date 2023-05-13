const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTNiMjg4Zjc0MDAwMTQyODc1N2YiLCJpYXQiOjE2ODM5MDE0ODcsImV4cCI6MTY4NTExMTA4N30.ySDb5R8y0G7i6H3c-YCv0CcSG4TI523fHu6tgFlJYKo";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
});

function productDetails(product) {
  const contentArea = document.getElementById("cont-card");
  contentArea.innerHTML = `<div class="container px-0"> <div class="d-flex justify-content-center"> <img src=${product.imageUrl} class="rounded" /> </div> <div class="flex-column px-2"> <h3 class="pt-3">${product.name}</h3> <h6>${product.brand}</h6> <p class="p-1 mt-3 shadow rounded">${product.description}</p> <p class="justify-content-end d-flex"> <span class="rounded px-3 bg-success fs-3 text-dark fw-bold shadow text-center">${product.price}€</span> </p> </div> </div>`;
}

(async () => {
  try {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const response = await fetch(BASE_URL + id, { headers });
    const product = await response.json();

    productDetails(product);
  } catch (error) {
    console.log(error);
  }
})();
