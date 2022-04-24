const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const  jacketId = params.get("id");

const url = "https://jferagen.one/rainydays/wp-json/wc/store/products/" + jacketId;

const imageJacket = document.querySelector(".product__images");
const infoJacket = document.querySelectorAll(".product");
const heading = document.querySelector("h1");
const addItem = document.querySelectorAll(".cta-add-to-cart");
const productsLike = document.querySelector(".other-products");

async function getDetails() {
  const response = await fetch(url);
  const details = await response.json();
  
  imageJacket.innerHTML ="";
  heading.innerText= `${details.name}`
      imageJacket.innerHTML +=`
      <img src="${details.images[0].src}" alt="${details.name}"/>
      `
      infoJacket[0].innerHTML +=`${details.description}`
      infoJacket[1].innerHTML +=`$${details.prices.price}`

//Add items to cart
  for(let i = 0; i < addItem.length; i++){  
  addItem[i].addEventListener("click", () =>{
      itemsInCart(details);
      addItem[i].innerText = "Product added to cart"
    })
  }
  console.log (details);
}

getDetails();


function cartNumbersOnLoad () {
  let productNumber = localStorage.getItem("itemsInCart");

  if (productNumber) {
    document.querySelector(".cart span").innerText = productNumber;
  }
}

function itemsInCart(details) {

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




