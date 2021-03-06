"use strict";
// // containers
// const landingPage = document.querySelector(".intro") as HTMLElement
// const signupPage = document.querySelector("#signup-form") as HTMLElement
// const loginPage = document.querySelector("#login-form") as HTMLElement
// // login form view
// const loginFormView = document.querySelector("#loginNav") as HTMLAnchorElement
// const loginFormView1 = document.querySelector("#loginMain") as HTMLButtonElement
// const loginFormView2 = document.querySelector("#loginLast") as HTMLAnchorElement
// //view login form functionality
// const showLogin = () => {
// landingPage.classList.add("hide")
// signupPage.classList.add("hide")
// loginPage.classList.remove("hide")
// }
// loginFormView.addEventListener("click", showLogin)
// loginFormView1.addEventListener("click", showLogin)
// loginFormView2.addEventListener("click", showLogin)
// // sign up form view functionality
// const signupFormView = document.querySelector("#signupNav") as HTMLAnchorElement
// const signupFormView1 = document.querySelector(
// "#signupMain"
// ) as HTMLButtonElement
// const signupFormView2 = document.querySelector(
// "#signupLast"
// ) as HTMLAnchorElement
// //View Sign up form functionality
// const showSignup = () => {
// landingPage.classList.add("hide")
// signupPage.classList.remove("hide")
// loginPage.classList.add("hide")
// }
// signupFormView.addEventListener("click", showSignup)
// signupFormView1.addEventListener("click", showSignup)
// signupFormView2.addEventListener("click", showSignup)
// const logo = document.querySelector(".logo") as HTMLElement
// logo.addEventListener("click", () => {
// landingPage.classList.remove("hide")
// signupPage.classList.add("hide")
// loginPage.classList.add("hide")
// })
//form validations
// ********************************************
// Signup
// ********************************************
const signup = document.getElementById('signupbtn');
// name validation
const nameField = document.getElementById('name');
const nameError = () => {
    if (nameField.value === "") {
        nameField.placeholder = "Please Enter your name !";
        nameField.classList.add("error");
    }
};
// phone number validation
const phoneField = document.getElementById('mobile');
const phoneError = () => {
    if (phoneField.value === "") {
        phoneField.placeholder = "Please Enter your phone number !";
        phoneField.classList.add("error");
    }
    else if (phoneField.value.length != 10) {
        phoneField.placeholder = "Please Enter a 10 digit phone number !";
        phoneField.classList.add("error");
    }
};
// email validation
const emailField = document.getElementById('email');
const emailError = () => {
    if (emailField.value === "") {
        emailField.placeholder = "Please Enter your email !";
        emailField.classList.add("error");
    }
    else if (!emailField.value.includes("@")) {
        emailField.placeholder = "Please Enter a valid email !";
        emailField.classList.add("error");
    }
};
// password validation
const passwordField = document.getElementById('passwordSignup');
const passwordError = () => {
    if (passwordField.value === "") {
        passwordField.placeholder = "Please Enter your password !";
        passwordField.classList.add("error");
    }
    else if (passwordField.value.length < 6) {
        passwordField.placeholder = "Password must be at least 6 characters !";
        passwordField.classList.add("error");
    }
};
// confirm password validation
const confirmPasswordField = document.getElementById('confirmpassword');
const confirmPasswordError = () => {
    if (confirmPasswordField.value === "") {
        confirmPasswordField.placeholder = "Please Confirm your password !";
        confirmPasswordField.classList.add("error");
    }
    else if (confirmPasswordField.value != passwordField.value) {
        confirmPasswordField.placeholder = "Passwords do not match !";
        confirmPasswordField.classList.add("error");
    }
};
// date of birth validation
const dateField = document.getElementById('dob');
console.log(dateField.value);
const dateError = () => {
    if (dateField.value === "") {
        dateField.placeholder = "Please Enter your date of birth !";
        dateField.classList.add("error");
        dateField.style.color = "red";
    }
};
// occupation validation
const occupationField = document.getElementById('occupation');
const occupationError = () => {
    if (occupationField.value === "") {
        occupationField.placeholder = "Please Enter your occupation !";
        occupationField.classList.add("error");
    }
};
//signup validation implementation
signup.addEventListener("click", () => {
    console.log("hello");
    nameError();
    phoneError();
    emailError();
    passwordError();
    confirmPasswordError();
    dateError();
    occupationError();
});
// ********************************************
// Login
// ********************************************
const login = document.getElementById('loginbtn');
const loginID = document.getElementById('userID');
const password = document.getElementById('PasswordLogin');
const loginValidation = () => {
    if (loginID.value == "") {
        loginID.placeholder = "Please Registerd Phone Number !";
        loginID.classList.add("error");
    }
    else if (loginID.value.length != 10) {
        loginID.placeholder = "Please Enter a 10 digit phone number !";
        loginID.classList.add("error");
    }
};
const passwordValidation = () => {
    if (password.value == "") {
        password.placeholder = "Please Enter your password !";
        password.classList.add("error");
    }
    else if (password.value.length < 6) {
        password.placeholder = "Password must be at least 6 characters !";
        password.classList.add("error");
    }
};
const sampleLogin = () => {
    if (loginID.value == "9988776655" && password.value == "syam") {
        window.location.href = "/EvaluationPractice/Customer/dashboard/dashboard.html";
    }
};
// login implementation
login.addEventListener("submit", () => {
    console.log("hello");
    loginValidation();
    passwordValidation();
    sampleLogin();
});
