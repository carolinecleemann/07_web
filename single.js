let productContainer = document.querySelector(".productContainer");
const productId = new URLSearchParams(window.location.search).get("id");
console.log("sidenVises");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    productContainer.innerHTML = `
      <section class="breadcrumbs">
        <div class="info">
          <h1>"${data.productdisplayname}"</h1>x
          <p>"${data.brandname}"</p>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="cap_2358">
        </div>

        <div class="purchase_box">
          <form>
            <label for="size">${data.size}</label>
            <select id="size" name="size">
              <option value="one-size">One Size</option>
            </select>
            <button type="submit" class="add-to-basket">Add to basket</button>
          </form>
        </div>

        <div class="produkt_info">
          <h2>Product Information</h2>
          <p>${data.brandname} <br><br> ${data.category}</p>
          <p><strong>${data.productdisplayname}</strong><br><br>${data.basecolour}</p>
          <p>${data.price} kr.</p>
          <p><strong>${data.description}</strong></p>
        </div>
      </section>
      <span class="sale ${data.discount && "sale_on_img_product"}">Sale : ${data.discount} % </span>

      <span class="sold_out ${data.soldout && "sold_out_on_img_product"}">Sold out</span>
      
    `; // <-- Sørg for at denne backtick (``) er her
  });
