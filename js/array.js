const productsContainer = document.querySelector(".jackets");


const products = [
 {
   "id": 1,
   "name": "Waterproof Jacket",
   "color": "Orange",
   "gender":"Female",
   "price": 90,
   "img": "/images/blake-cheek-dw96lVwMXJg-unsplash kopi - endret kontrast og str.jpg",
 },
 {
  "id": 2,
   "name": "Waterproof windproof Jacket",
   "color": "Blue",
   "gender":"Female",
   "price": 90,
   "img": "/images/alexander-paul-jxd_BtnzQBQ-unsplash.jpg",
 },
 {
  "id": 3,
   "name": "Waterproof Jacket",
   "color": "Yellow",
   "gender":"Male",
   "price": 90,
   "img": "../images/daoud-abismail-K-v3TuSwMQA-unsplash.jpg",
 },
 {
  "id": 4,
   "name": "Waterproof Jacket Raincoat",
   "color": "Orange",
   "gender":"Female",
   "price": 90,
   "img": "../images/gage-walker-6LT0b6LmCt4-unsplash.jpg",
 },
 {
  "id": 5,
   "name": "Waterproof Jacket",
   "color": "Yellow",
   "gender":"Male",
   "price": 90,
   "img": "../images/daoud-abismail-oG4OvTFbiXk-unsplash.jpg",
 },
 {
  "id": 6,
   "name": "Warm Jacket",
   "color": "Blue",
   "gender":"Male",
   "price": 90,
   "img": "../images/pexels-pnw-production-7624842.jpg",
 },
]

function createProduct () {

    productsContainer.innerHTML ="";
  for (let i = 0; i<products.length; i++){
    
    productsContainer.innerHTML += 
      `<a href="/product-page.html" class="jackets-features">
        <img src="${products[i].img}">
        <h2> ${products[i].name}</h2>
        <p>${products[i].price}</p)
      </a>
      `
    } 
} 

createProduct(); 