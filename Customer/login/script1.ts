







//form validations
// ********************************************
// Signup
// ********************************************

const signup = document.getElementById('signupbtn') as HTMLButtonElement

// name validation
const nameField = document.getElementById('name') as HTMLInputElement
const nameError = () => {
    if (nameField.value === "") {
        nameField.placeholder = "Please Enter your name !"
        nameField.classList.add("error")
    }
}
// phone number validation
const phoneField = document.getElementById('mobile') as HTMLInputElement
const phoneError = () => {
    if (phoneField.value === "") {
        phoneField.placeholder = "Please Enter your phone number !"
        phoneField.classList.add("error")
    } else if (phoneField.value.length != 10) {
        phoneField.placeholder = "Please Enter a 10 digit phone number !"
        phoneField.classList.add("error")
    }
}
// email validation
const emailField = document.getElementById('email') as HTMLInputElement
const emailError = () => {
    if (emailField.value === "") {
        emailField.placeholder = "Please Enter your email !"
        emailField.classList.add("error")
    } else if (!emailField.value.includes("@")) {
        emailField.placeholder = "Please Enter a valid email !"
        emailField.classList.add("error")
    }
}
// password validation
const passwordField = document.getElementById('passwordSignup') as HTMLInputElement
const passwordError = () => {
    if (passwordField.value === "") {
        passwordField.placeholder = "Please Enter your password !"
        passwordField.classList.add("error")
    } else if (passwordField.value.length < 6) {
        passwordField.placeholder = "Password must be at least 6 characters !"
        passwordField.classList.add("error")
    }
}
// confirm password validation
const confirmPasswordField = document.getElementById('confirmpassword') as HTMLInputElement
const confirmPasswordError = () => {
    if (confirmPasswordField.value === "") {
        confirmPasswordField.placeholder = "Please Confirm your password !"
        confirmPasswordField.classList.add("error")
    } else if (confirmPasswordField.value != passwordField.value) {
        confirmPasswordField.placeholder = "Passwords do not match !"
        confirmPasswordField.classList.add("error")
    }
}
// date of birth validation
const dateField = document.getElementById('dob') as HTMLInputElement
console.log(dateField.value)
const dateError = () => {
    if (dateField.value === "") {
        dateField.placeholder = "Please Enter your date of birth !"
        dateField.classList.add("error")
        dateField.style.color = "red"
    }
}
// occupation validation
const occupationField = document.getElementById('occupation') as HTMLInputElement
const occupationError = () => {
    if (occupationField.value === "") {
        occupationField.placeholder = "Please Enter your occupation !"
        occupationField.classList.add("error")
    }
}
//signup validation implementation

signup.addEventListener("click", () => {
    console.log("hello")
    nameError()
    phoneError()
    emailError()
    passwordError()
    confirmPasswordError()
    dateError()
    occupationError()
})








// ********************************************
// Login
// ********************************************
const login = document.getElementById('loginbtn') as HTMLButtonElement

const loginID = document.getElementById('userID') as HTMLInputElement
const password = document.getElementById('PasswordLogin') as HTMLInputElement

const loginValidation = () => {
    if (loginID.value == "") {
        loginID.placeholder = "Please Registerd Phone Number !"
        loginID.classList.add("error")
    } else if (loginID.value.length != 10) {
        loginID.placeholder = "Please Enter a 10 digit phone number !"
        loginID.classList.add("error")
    }
}
const passwordValidation = () => {
    if (password.value == "") {
        password.placeholder = "Please Enter your password !"
        password.classList.add("error")
    } else if (password.value.length < 6) {
        password.placeholder = "Password must be at least 6 characters !"
        password.classList.add("error")
    }
}
const sampleLogin = () => {
    if (loginID.value == "9988776655" && password.value == "syam") {
        window.location.href = "/EvaluationPractice/Customer/dashboard/dashboard.html"
    }
}
// login implementation

login.addEventListener("submit", () => {
    console.log("hello");
    loginValidation()
    passwordValidation()
    sampleLogin()
})
