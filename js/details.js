import { products } from "./array.js";

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const  jacketId = params.get("id");

const imageJacket = document.querySelector(".product__images");
const infoJacket = document.querySelectorAll(".product");
const heading = document.querySelector("h1");
const addItem = document.querySelectorAll(".cta-add-to-cart");


function createDetail(){
  for (let i = 0; i < products.length; i++){
    if (jacketId === products[i].id){
      heading.innerText= `${products[i].name}`
      imageJacket.innerHTML +=`
      <img src="${products[i].img}" alt="${products[i].name}"/>
      `
      infoJacket[0].innerHTML +=`${products[i].description}`
      infoJacket[1].innerHTML +=`$${products[i].price}`
    } else {
      continue;
    }
  }
}

createDetail();

//Add items to cart
for(let i = 0; i < addItem.length; i++){  
addItem[i].addEventListener("click", () =>{
    itemsInCart(products[i]);
    addItem[i].innerText = "Product added to cart"
  })
}

function cartNumbersOnLoad () {
  let productNumber = localStorage.getItem("itemsInCart");

  if (productNumber) {
    document.querySelector(".cart span").innerText = productNumber;
  }
}

function itemsInCart(products) {

  let productNumber = localStorage.getItem("itemsInCart");
  
  productNumber = parseInt(productNumber);
  
  if (productNumber) {
    localStorage.setItem("itemsInCart", productNumber + 1);
    document.querySelector(".cart span").innerText = productNumber + 1;
  } else {
    localStorage.setItem ("itemsInCart", 1);
    document.querySelector(".cart span").innerText = 1;
  }

  //setItems(products);
}

cartNumbersOnLoad();

/*function setItems(products) {
  let cartItems = localStorage.getItem("productsInCart");
  
  cartItems = JSON.parse(cartItems);

  console.log(cartItems);

  if(cartItems !== null) {
    
    if(cartItems[products.id] === undefined) {
      cartItems = {
        ...cartItems,
        [products.id]: products
      }
    }
    cartItems[products.id].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.id]: products
    }
  }
  
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}*/




