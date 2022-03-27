//checkout

const formCheckout = document.querySelector(".form-checkout");
const submitCheckout = document.querySelector(".cta-checkout");

function validatingCheckout(event) {
    event.preventDefault();
    console.log("YEY");
}

formCheckout.addEventListener("submit", validatingCheckout);