//Initial product Display - All products
let productsListHTML = "";
productsList.forEach((item, index, array) => {
  productsListHTML += `
        <div class="product-container">
          <div class="product-image">
            <img
              src="${item.image}"
              alt=""
            />
          </div>
          <div class="product-name">
            <h3>${item.name}</h3>
          </div>
          <div class="product-price">
            <h2>Rs. ${(item.pricePaisa / 100).toFixed(2)}</h2>
          </div>
          <button class="add-to-cart-btn primary-btn">Add to Cart</button>
        </div>
  `;
});

document.querySelector(".js-product-grid").innerHTML = productsListHTML;

//Filter Display - after filter button is clicked
let newList = [];
let newListHTML = "";
function filterProductFunction(value) {
  newListHTML = "";
  productsList.forEach((item, index, array) => {
    // console.log(item);
    if (item.category === value) {
      newList = item;
      // console.log(newList);
      document.querySelector(".js-product-grid").innerHTML = "";
      newListHTML += `
        <div class="product-container">
          <div class="product-image">
            <img
              src="${item.image}"
              alt=""
            />
          </div>
          <div class="product-name">
            <h3>${item.name}</h3>
          </div>
          <div class="product-price">
            <h2>Rs. ${item.pricePaisa / 100}</h2>
          </div>
          <button class="add-to-cart-btn primary-btn">Add to Cart</button>
        </div>
        `;
    }
    document.querySelector(".js-product-grid").innerHTML = newListHTML;
  });
}
//RESET BUTTON
function clearAll() {
  console.log("Clear");
  document.querySelector(".js-product-grid").innerHTML = "";
  document.querySelector(".js-product-grid").innerHTML = productsListHTML;
}
