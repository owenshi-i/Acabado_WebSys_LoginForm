const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

let hidden = true;

// SHOW / HIDE PASSWORD
togglePassword.addEventListener("click", () => {
    if (hidden) {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
        hidden = false;
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
        hidden = true;
    }
});

// LOGIN FORM SUBMIT
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = passwordInput.value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let loginError = document.getElementById("loginError");

    // clear messages
    emailError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";

    let isValid = true;

    // validation
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Minimum of 6 characters required";
        isValid = false;
    }

    // STOP if validation failed
    if (!isValid) return;

    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    // LOGIN CHECK
    if (email === correctEmail && password === correctPassword) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("successContainer").style.display = "block";
    } else {
        loginError.textContent = "Invalid email or password";
    }
});

// LOGOUT
function logout() {
    document.getElementById("successContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
}