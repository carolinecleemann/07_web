const categoriesList = document.querySelector("ul");

fetch("https://kea-alt-del.dk/t7/api/categories/")
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categoryData) {
  console.log("mine category data er", categoryData);
  const markup = categoryData
    .map(
      (category) =>
        `<li><a href="productlist.html?categories=${category.category}">${category.category}</a></li>`
    )
    .join("");
  console.log(markup);
  categoriesList.innerHTML = markup;
}
