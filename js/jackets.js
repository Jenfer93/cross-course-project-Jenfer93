const baseUrl = "https://jferagen.one/rainydays/wp-json/wc/store/products";
const proxy = "https://noroffcors.herokuapp.com/";
const url = proxy + baseUrl;
const productsContainer = document.querySelector(".jackets");
const femaleButton = document.querySelector(".her");
const maleButton = document.querySelector(".him");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    const queryString = document.location.search; 
    const params = new URLSearchParams(queryString);
    const parameter = params.get("parameter"); 
    
    productsContainer.innerHTML = "";

    products.forEach((products, index) => {
      productsContainer.innerHTML += 
        `<a href="/product-page.html?id=${products.id}" class="jackets-features">
          <img src="${products.images[0].src}"/>
          <h2> ${products.name}</h2>
          <p>$ ${products.prices.price}</p>
          <button class="cta">Check it out</button>
        </a>
        `
  } )
}


getProducts(baseUrl);




