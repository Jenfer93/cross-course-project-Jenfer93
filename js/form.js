const form = document.querySelector(".submit-form");
const submitButton = document.querySelector(".cta-contact");

function validatingContact(event) {
    event.preventDefault();
    submitButton.innerText = "Request sent";
    submitButton.style.backgroundColor = "rgb(105, 219, 101)";
    submitButton.style.color = "#000";

    form.reset();
}

form.addEventListener("submit", validatingContact);


//checkout

const formCheckout = document.querySelector(".form-checkout");
const submitCheckout = document.querySelector(".cta-checkout");

function validatingCheckout(event) {
    event.preventDefault();

    console.log("YEY");
}

formCheckout.addEventListener("submit", validatingCheckout);