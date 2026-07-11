// =======================================
// EcoBin Collection JS
// =======================================

// Truck Search
const search = document.getElementById("searchTruck");
const truckCards = document.querySelectorAll(".truck-card");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        truckCards.forEach(card => {

            const title = card.querySelector("h2").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =======================================
// Card Hover Effect
// =======================================

truckCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// =======================================
// Random Truck Status Update
// =======================================

const statusList = [
    "Running",
    "Collecting",
    "Returning",
    "Refueling",
    "Maintenance"
];

function updateTruckStatus() {

    truckCards.forEach(card => {

        const status = card.querySelector("span");

        const fuelText = card.querySelectorAll("p")[2];

        const progress = card.querySelector(".fill");

        const fuel = Math.floor(Math.random() * 100) + 1;

        fuelText.innerHTML = "<strong>Fuel:</strong> " + fuel + "%";

        progress.style.width = fuel + "%";

        if (fuel > 70) {

            progress.style.background = "#22c55e";

        } else if (fuel > 40) {

            progress.style.background = "#facc15";

        } else {

            progress.style.background = "#ef4444";

        }

        const randomStatus =
            statusList[Math.floor(Math.random() * statusList.length)];

        status.innerText = randomStatus;

        status.className = "";

        if (randomStatus === "Running") {

            status.classList.add("online");

        } else if (
            randomStatus === "Collecting" ||
            randomStatus === "Returning"
        ) {

            status.classList.add("warning");

        } else {

            status.classList.add("danger");

        }

    });

}

// Update every 8 seconds
setInterval(updateTruckStatus, 8000);

// =======================================
// Fade In Animation
// =======================================

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

truckCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s";

    observer.observe(card);

});

// =======================================
// Welcome Message
// =======================================

setTimeout(() => {

    console.log("🚛 EcoBin Collection Page Loaded");

}, 500);

// =======================================
// Collection Counter Animation
// =======================================

const counters = document.querySelectorAll(".dashboard-card h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText.replace("%", "")) || 0;

    let current = 0;

    function animate() {

        if (current < target) {

            current++;

            if (counter.innerText.includes("%")) {

                counter.innerText = current + "%";

            } else {

                counter.innerText = current;

            }

            requestAnimationFrame(animate);

        }

    }

    animate();

});

// =======================================
// Truck Card Click Effect
// =======================================

truckCards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.boxShadow = "0 0 30px rgba(0,255,136,0.8)";

        setTimeout(() => {

            card.style.boxShadow = "";

        }, 500);

    });

});

// =======================================
// Live Clock (Console Demo)
// =======================================

setInterval(() => {

    console.log("Time:", new Date().toLocaleTimeString());

}, 1000);