// ===============================
// EcoBin Register Page
// ===============================

// Show / Hide Password

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    const type = password.getAttribute("type") === "password"
        ? "text"
        : "password";

    password.setAttribute("type", type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

});

// Show / Hide Confirm Password

const toggleConfirm = document.getElementById("toggleConfirm");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirm.addEventListener("click", () => {

    const type = confirmPassword.getAttribute("type") === "password"
        ? "text"
        : "password";

    confirmPassword.setAttribute("type", type);

    toggleConfirm.classList.toggle("fa-eye");
    toggleConfirm.classList.toggle("fa-eye-slash");

});

// ===============================
// Register Form
// ===============================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms");

    // Empty Fields

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        city === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Email Validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }

    // Phone Validation

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    // Password Length

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Confirm Password

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Terms

    if (!terms.checked) {
        alert("Please accept the Terms & Conditions.");
        return;
    }

    // Save User

    const user = {

        fullname,
        email,
        phone,
        city,
        password

    };

    localStorage.setItem("ecobinUser", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";

});