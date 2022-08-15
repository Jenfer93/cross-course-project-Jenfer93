const baseUrl = "https://jferagen.one/rainydays/wp-json/wc/store/products";

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const parameter = params.get("parameter"); 

console.log(parameter);

function checkGender (products){
  return products.categories.name === parameter;
}

function filteredProducts() {
  const filteredProducts = products.filter(checkGender);
  console.log(filteredProducts);
  addProducts();
}


