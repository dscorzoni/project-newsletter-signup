// Selecting a form and form elements

const mainPage = document.querySelector("main");
const form = document.querySelector("form");
const emailInput = document.querySelector(".email-input");
const submitButton = document.querySelector("button");
const errorMessage = document.querySelector(".error");
const successMessage = document.querySelector(".success-message");
const dismissSuccess = document.querySelector(".btn-success");
const emailDisplay = document.querySelector(".target-email");


// Auxiliary vars
let isValidEmail = false;
let targetEmail = "";

// Adding event listener for form validation:
emailInput.addEventListener('input', (e) => {

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (e.target.value.match(validRegex) || e.target.value == "") {
        errorMessage.classList.add("error");
        errorMessage.classList.remove("error-show");
        emailInput.classList.remove("email-error");
        emailInput.classList.add("email-input");
        isValidEmail = true;
        targetEmail = e.target.value;
    } else {
        errorMessage.classList.add("error-show");
        errorMessage.classList.remove("error");
        emailInput.classList.add("email-error");
        emailInput.classList.remove("email-input");
        isValidEmail = false;
    }

});

// Adding event listener for form submission:
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(isValidEmail) {
        form.reset();
        emailDisplay.innerHTML = targetEmail;
        mainPage.classList.toggle("hidden");
        successMessage.classList.toggle("hidden");
        isValidEmail = false;
    } else {
        emailInput.focus();
    }
})

// Adding event listener for Success Message Dismiss
dismissSuccess.addEventListener('click', (e) => {
    e.preventDefault();
    mainPage.classList.toggle("hidden");
    successMessage.classList.toggle("hidden");
})


