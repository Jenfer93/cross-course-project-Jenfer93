const form = document.querySelector(".submit-form");
const submitButton = document.querySelector(".cta");
const validationMessage = document.querySelector(".message");

function validating(event) {
    event.preventDefault();
    submitButton.innerText = "Request sent";
    submitButton.style.backgroundColor = "green";
    submitButton.style.color = "black";

    form.reset();
}

form.addEventListener("submit", validating);