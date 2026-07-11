// ===============================
// EcoBin - app.js
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.remove();
    }
});

// ===============================
// Dark Mode Toggle
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (icon) {

            if (document.body.classList.contains("dark")) {
                icon.classList.replace("fa-moon", "fa-sun");
            } else {
                icon.classList.replace("fa-sun", "fa-moon");
            }

        }

    });

}
window.onload = function () {
    alert("JavaScript is working!");
    const loader = document.getElementById("loader");
    if (loader) {
        loader.remove();
    }
};

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".counter");

const counterAnimation = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const update = () => {

            const current = Number(counter.innerText);

            const increment = target / 150;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        update();

    });

};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            counterAnimation();

            observer.unobserve(statsSection);

        }

    });

}, {
    threshold: 0.4
});

observer.observe(statsSection);

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".feature, .card, .about, .contact"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s ease";

    revealObserver.observe(el);

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";
                valid = false;

            } else {

                input.style.border = "none";

            }

        });

        if (!valid) {

            alert("Please fill all fields.");

            return;

        }

        alert("Message Sent Successfully!");

        form.reset();

    });

}

// ===============================
// Navbar Background on Scroll
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,0.35)";
        navbar.style.backdropFilter = "blur(20px)";

    } else {

        navbar.style.background = "rgba(255,255,255,0.12)";
        navbar.style.backdropFilter = "blur(15px)";

    }

});

// ===============================
// Hero Floating Icon Animation
// ===============================

const circle = document.querySelector(".circle");

let angle = 0;

function animateCircle() {

    angle += 0.01;

    circle.style.transform =
        `translateY(${Math.sin(angle) * 12}px)
         rotate(${angle * 8}deg)`;

    requestAnimationFrame(animateCircle);

}

if (circle) {
    animateCircle();
}

// ===============================
// Button Hover Glow
// ===============================

document.querySelectorAll(".btn, .btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow = "0 0 25px rgba(255,255,255,0.6)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});

// ===============================
// Current Year in Footer
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} EcoBin | All Rights Reserved`;

}