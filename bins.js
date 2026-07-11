// ======================================
// EcoBin - bins.js
// ======================================

// Search Smart Bins
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".bin-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        cards.forEach(card => {

            const title = card.querySelector("h2").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ======================================
// Card Hover Animation
// ======================================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ======================================
// Random Fill Level Update (Demo)
// ======================================

function updateBins() {

    cards.forEach(card => {

        const fill = card.querySelector(".fill");

        if (!fill) return;

        let level = Math.floor(Math.random() * 101);

        fill.style.width = level + "%";

        let status = card.querySelector(".online, .warning, .overflow");

        if (!status) return;

        if (level < 40) {

            fill.style.background = "#22c55e";
            status.className = "online";
            status.innerHTML = "🟢 Empty";

        }

        else if (level < 75) {

            fill.style.background = "#facc15";
            status.className = "warning";
            status.innerHTML = "🟡 Half Full";

        }

        else {

            fill.style.background = "#ef4444";
            status.className = "overflow";
            status.innerHTML = "🔴 Overflow";

        }

        // Update Fill Percentage Text
        const paragraphs = card.querySelectorAll("p");

        paragraphs.forEach(p => {

            if (p.innerHTML.includes("Fill Level")) {

                p.innerHTML = "Fill Level : " + level + "%";

            }

        });

    });

}

// Update every 10 seconds
setInterval(updateBins, 10000);

// ======================================
// Welcome Message
// ======================================

setTimeout(() => {

    console.log("EcoBin Smart Bins Loaded Successfully");

}, 500);

// ======================================
// Fade In Cards
// ======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s";

    observer.observe(card);

});

// ======================================
// Click Animation
// ======================================

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.boxShadow = "0 0 30px rgba(0,255,136,.7)";

        setTimeout(() => {

            card.style.boxShadow = "";

        }, 400);

    });

});

// ======================================
// Live Clock (Optional)
// ======================================

function liveClock() {

    const now = new Date();

    console.log(now.toLocaleTimeString());

}

setInterval(liveClock, 1000);