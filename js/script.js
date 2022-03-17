const url ="https://fakestoreapi.com/products";
const proxy = "https://noroffcors.herokuapp.com/";
const urlCors = proxy + url;
const productsContainer = document.querySelector(".jackets");


async function getProducts () {
  try {
    const response = await fetch (urlCors);
    const product = await response.json();
    console.log(product);

    productsContainer.innerHTML ="";
    
    function createProduct () {
      for (let i = 0; i<product.length; i++){
        if(product[i].category === "jewelery" || product[i].category === "electronics") {
          continue;
        } 

        productsContainer.innerHTML += 
          `<a href="/product-page.html" class="jackets-features">
            <img src="${product[i].image}">
            <h2> ${product[i].title}</h2>
            <p>${product[i].price}</p)

          </a>
          `
      }
    } 
  } catch(error) {

  }
  createProduct();
}

getProducts();
