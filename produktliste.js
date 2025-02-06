const listContainer = document.querySelector(".accesories_list_container");

const myCategory = new URLSearchParams(window.location.search).get("categories");

const header = document.querySelector(".header");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("my products are: ", products);
  let markup = products
    .map((product) => {
      return `<article class="card">
                <a href="produkt.html?id=${product.id}">
                <img class="${product.soldout && "sold_out"}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Image of ${product.productdisplayname}"> 
              </a>
              <p class="sale ${!product.discount && "hide"}">On Sale ${product.discount} % </p>
              <p>${product.brandname} </p>
              <p> ${product.category}</p>
              <p>${product.productdisplayname}</p>
              <p>${product.price} kr.</p>
              <p class="sold_out ${product.soldout && "hide"}">Sold Out </p>
              <a href="produkt.html?id=${product.id}" class="learn">ADD TO BAG</a>
            </article>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
