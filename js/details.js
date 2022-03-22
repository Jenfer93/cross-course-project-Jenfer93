import { products } from "./array.js";

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const  jacketId = params.get("id");

function createDetail(){
  for (let i = 0; products.length; i++){

    if (products[i].id !== jacketId ) {
      console.log([i]);
    }

  }
}

createDetail();