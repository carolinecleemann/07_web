const listContainer = document.querySelector(".accesories_list_container");

const myCategory = new URLSearchParams(window.location.search).get(
  "categories"
);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("my products are: ", products);
  let markup = "";
  products.map((product) => {
    markup += `
    
    <div class="rød_cap">

        <a href="produkt.html">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="cap_2358"></a>
        <p>${product.brandname} <br><br> ${product.category}</p>
          <p><strong>${product.productdisplayname}</strong>
          <p>${product.price} kr.</p>
        <a href="produkt.html" class="learn">read more</a>
    </div>`;
  }).join = "";
  console.log(markup);
  listContainer.innerHTML = markup;
}
