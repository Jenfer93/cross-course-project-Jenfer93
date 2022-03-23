import { products } from "./array.js";

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const  jacketId = params.get("id");

const imageJacket = document.querySelector(".product__images")


/*products.forEach (function (product) {
  if (products.id === jacketId) {
    return true;
  }
})
 console.log (products);
*/

console.log(jacketId);

function createDetail(){
  for (let i = 0; i < products.length; i++){
    if (jacketId === products[i].id){
      console.log (products[i].name);
    } else {
      break;
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