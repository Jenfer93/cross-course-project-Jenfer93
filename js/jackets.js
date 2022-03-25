import {products} from "./array.js";

const productsContainer = document.querySelector(".jackets");
console.log(products)

function createProduct () {

  productsContainer.innerHTML ="";
  
  products.forEach((products) => {
  productsContainer.innerHTML += 
    `<a href="/product-page.html?id=${products.id}" class="jackets-features">
      <img src="${products.img}"/>
      <h2> ${products.name}</h2>
      <p>$ ${products.price}</p>
      <button class="cta">Check it out</button>
    </a>
    `
  } )
} 

createProduct(); 

