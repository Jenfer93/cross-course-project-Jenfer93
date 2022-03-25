import { products } from "./array.js";

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const  jacketId = params.get("id");

const imageJacket = document.querySelector(".product__images");
const infoJacket = document.querySelectorAll(".product");
const heading = document.querySelector("h1");
const otherProducts = document.querySelector(".other-products-img");

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

 

const modal = document.querySelector(".added-item");
const addItem = document.querySelector(".cta-add-to-cart");
const continueShopping = document.querySelector(".continue");
const itemsInCart = document.querySelector(".items");



/*addItem.addEventListener("click", ()=> {
  modal.showModal();

})

continueShopping.addEventListener("click", ()=> {
  modal.close();
})*/

//Add items to cart

addItem.onclick = function(event) {
 console.log(event.target);
}