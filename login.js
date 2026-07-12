// ========================================
// EcoBin Login JavaScript
// ========================================

// Password Show / Hide

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        } else {

            password.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

}

// ========================================
// Login Form
// ========================================

const form = document.getElementById("loginForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("password").value.trim();
        const button = form.querySelector("button");

        // Validation

        if (email === "" || pass === "") {

            alert("Please enter your email and password.");
            return;

        }

        if (!email.includes("@")) {

            alert("Please enter a valid email.");
            return;

        }

        // Loading Animation

        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Logging In...
        `;

        // Fake Login Delay

        setTimeout(() => {

            alert("✅ Login Successful!");

            // Redirect
            window.location.href = "dashboard.html";

        }, 2000);

    });

}

// ========================================
// Floating Effect
// ========================================

const card = document.querySelector(".login-card");

document.addEventListener("mousemove", (e) => {

    if (!card) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    card.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;

});

// Reset Position

document.addEventListener("mouseleave", () => {

    if (card) {

        card.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    }

});

// ========================================
// Input Glow
// ========================================

document.querySelectorAll("input").forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.03)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});

// ========================================
// Social Login Animation
// ========================================

document.querySelectorAll(".social-login i").forEach(icon => {

    icon.addEventListener("click", () => {

        icon.style.transform = "scale(1.2) rotate(360deg)";

        setTimeout(() => {

            icon.style.transform = "";

            alert("Social login is a demo in this frontend project.");

        }, 400);

    });

});

// ========================================
// Remember Me
// ========================================

const remember = document.querySelector("input[type='checkbox']");

if (remember) {

    if (localStorage.getItem("savedEmail")) {

        document.getElementById("email").value =
            localStorage.getItem("savedEmail");

        remember.checked = true;

    }

    form.addEventListener("submit", () => {

        if (remember.checked) {

            localStorage.setItem(
                "savedEmail",
                document.getElementById("email").value
            );

        } else {

            localStorage.removeItem("savedEmail");

        }

    });

}

// ========================================
// Console
// ========================================

console.log("🌍 EcoBin Login Loaded Successfully");