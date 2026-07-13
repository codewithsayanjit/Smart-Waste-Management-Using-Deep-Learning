// =====================================
// EcoBin - app.js
// Part 1
// =====================================

// ----------------------
// Loader
// ----------------------

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ----------------------
// Theme Toggle
// ----------------------

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

// ----------------------
// Animated Counter
// ----------------------

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const update = () => {

            const increment = Math.ceil(target / 150);

            current += increment;

            if (current >= target) {

                counter.innerText = target.toLocaleString();

            } else {

                counter.innerText = current.toLocaleString();

                requestAnimationFrame(update);

            }

        };

        update();

    });

}

const stats = document.querySelector(".stats");

if (stats) {

    const statsObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                statsObserver.unobserve(stats);

            }

        });

    }, {

        threshold: 0.4

    });

    statsObserver.observe(stats);

}

// ----------------------
// Scroll Reveal Animation
// ----------------------

const revealItems = document.querySelectorAll(

    ".feature,.card,.about,.contact,.quote"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: .2

});

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = ".8s ease";

    revealObserver.observe(item);

});
// =====================================
// EcoBin - app.js
// Part 2
// =====================================

// ----------------------
// Smooth Scroll
// ----------------------

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ----------------------
// Contact Form
// ----------------------

const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

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

            alert("Please fill in all fields.");

            return;

        }

        const button = contactForm.querySelector("button");

        button.innerHTML = "✓ Message Sent";
        button.style.background = "#16a34a";

        setTimeout(() => {

            button.innerHTML = "Send Message";
            button.style.background = "";
            contactForm.reset();

        }, 2000);

    });

}

// ----------------------
// Navbar Scroll Effect
// ----------------------

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.backdropFilter = "blur(20px)";

    } else {

        navbar.style.background = "rgba(255,255,255,.12)";
        navbar.style.backdropFilter = "blur(15px)";

    }

});

// ----------------------
// Floating Hero Icon
// ----------------------

const circle = document.querySelector(".circle");

if (circle) {

    let angle = 0;

    function animateCircle() {

        angle += 0.02;

        circle.style.transform =
            `translateY(${Math.sin(angle) * 12}px) rotate(${angle * 8}deg)`;

        requestAnimationFrame(animateCircle);

    }

    animateCircle();

}

// ----------------------
// Button Glow Effect
// ----------------------

document.querySelectorAll(".btn, .btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 25px rgba(255,255,255,.6)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});
// =====================================
// EcoBin - app.js
// Part 3
// =====================================

// ----------------------
// Digital Clock
// ----------------------

function updateClock() {

    const now = new Date();

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock) {

        clock.innerHTML = now.toLocaleTimeString();

    }

    if (date) {

        date.innerHTML = now.toDateString();

    }

}

updateClock();

setInterval(updateClock, 1000);

// ----------------------
// Eco Quotes
// ----------------------

const quotes = [

    "🌱 The Earth is what we all have in common.",

    "♻️ Reduce. Reuse. Recycle.",

    "🌍 Small actions make a big difference.",

    "🗑️ Keep your city clean and green.",

    "🌿 Nature doesn't need us. We need nature.",

    "💚 Waste isn't waste until we waste it.",

    "🌳 Plant trees, save lives.",

    "♻️ Every recycled bottle counts.",

    "🌎 Together we can build a cleaner future."

];

const quoteText = document.getElementById("quoteText");

if (quoteText) {

    function changeQuote() {

        const random = Math.floor(Math.random() * quotes.length);

        quoteText.innerHTML = quotes[random];

    }

    changeQuote();

    setInterval(changeQuote, 5000);

}

// ----------------------
// Notification Button
// ----------------------

const notificationBtn = document.getElementById("notificationBtn");
const notifyCount = document.getElementById("notifyCount");
const notificationPanel = document.getElementById("notificationPanel");

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        if (notifyCount) {

            notifyCount.innerHTML = "0";

            notifyCount.style.display = "none";

        }

        if (notificationPanel) {

            notificationPanel.classList.toggle("show");

        }

    });

}

// ----------------------
// Back To Top Button
// ----------------------

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
// =====================================
// EcoBin - app.js
// Part 4
// =====================================

// ----------------------
// Active Navbar Highlight
// ----------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ----------------------
// Footer Year
// ----------------------

const footerYear = document.getElementById("footerYear");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} EcoBin | All Rights Reserved`;

}

// ----------------------
// Welcome Message
// ----------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("🌱 Welcome to EcoBin!");

    }, 500);

});

// ----------------------
// Notification Panel Close
// ----------------------

document.addEventListener("click", (e) => {

    if (
        notificationPanel &&
        notificationBtn &&
        !notificationBtn.contains(e.target) &&
        !notificationPanel.contains(e.target)
    ) {

        notificationPanel.classList.remove("show");

    }

});

// ----------------------
// Weather Demo
// ----------------------

const weatherTemp = document.getElementById("weatherTemp");
const weatherCity = document.getElementById("weatherCity");

if (weatherTemp && weatherCity) {

    weatherTemp.innerHTML = "29°C";
    weatherCity.innerHTML = "Kolkata";

}
// FAQ

document.querySelectorAll(".faq-question").forEach(question=>{

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

if(answer.style.maxHeight){

answer.style.maxHeight=null;

}else{

answer.style.maxHeight=answer.scrollHeight+"px";

}

});

});
const galleryImage = document.getElementById("galleryImage");

if (galleryImage) {

    const images = [
        "https://picsum.photos/id/1018/1000/550",
        "https://picsum.photos/id/1025/1000/550",
        "https://picsum.photos/id/1035/1000/550",
        "https://picsum.photos/id/1040/1000/550",
        "https://picsum.photos/id/1050/1000/550",
        "https://picsum.photos/id/1060/1000/550",
        "https://picsum.photos/id/1074/1000/550",
        "https://picsum.photos/id/1084/1000/550"
    ];

    let index = 0;

    setInterval(() => {

        galleryImage.style.opacity = "0";

        setTimeout(() => {

            index = (index + 1) % images.length;

            galleryImage.src = images[index];

            galleryImage.style.opacity = "1";

        }, 500);

    }, 3000);

}
// ================= AI ChatBot =================

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

chatToggle.onclick = () => {

    chatBox.style.display =
        chatBox.style.display === "block" ? "none" : "block";

};

function botReply(message){

    let reply = "";

    message = message.toLowerCase();

    if(message.includes("hello") || message.includes("hi")){

        reply = "Hello 👋 How can I help you?";

    }
    else if(message.includes("report")){

        reply = "You can report waste from the Dashboard page.";

    }
    else if(message.includes("recycle")){

        reply = "♻️ Separate dry and wet waste before recycling.";

    }
    else if(message.includes("contact")){

        reply = "Use the Contact section below to reach us.";

    }
    else if(message.includes("dashboard")){

        reply = "Open the Dashboard from the navigation menu.";

    }
    else if(message.includes("login")){

        reply = "Click Login from the top navigation bar.";

    }
    else{

        reply = "I'm EcoBin AI 🤖. I can help with waste management, recycling, dashboard, login, and reporting.";
    }

    chatMessages.innerHTML +=
    `<div class="bot">${reply}</div>`;

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.onclick = () => {

    const text = userInput.value.trim();

    if(text==="") return;

    chatMessages.innerHTML +=
    `<div class="user">${text}</div>`;

    userInput.value="";

    setTimeout(()=>{

        botReply(text);

    },500);

};

userInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        sendBtn.click();

    }

});

// =====================================
// End of EcoBin app.js
// =====================================