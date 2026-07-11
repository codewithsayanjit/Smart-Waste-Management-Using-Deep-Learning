// =====================================
// EcoBin Dashboard JS
// =====================================

// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (icon.classList.contains("fa-moon")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

// =====================================
// Counter Animation
// =====================================

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 150;

        function update() {

            count += speed;

            if (count < target) {

                counter.innerHTML = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerHTML = target.toLocaleString();

            }

        }

        update();

    });

}

startCounter();

// =====================================
// Line Chart
// =====================================

const lineCanvas = document.getElementById("lineChart");

if (lineCanvas) {

    new Chart(lineCanvas, {

        type: "line",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{

                label: "Waste Collected",

                data: [12, 18, 22, 30, 28, 35, 40],

                borderColor: "#00ff88",

                backgroundColor: "rgba(0,255,136,.2)",

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "white"

                    }

                },

                y: {

                    ticks: {

                        color: "white"

                    }

                }

            }

        }

    });

}

// =====================================
// Pie Chart
// =====================================

const pieCanvas = document.getElementById("pieChart");

if (pieCanvas) {

    new Chart(pieCanvas, {

        type: "pie",

        data: {

            labels: [

                "Plastic",

                "Paper",

                "Organic",

                "Metal"

            ],

            datasets: [{

                data: [

                    30,

                    25,

                    35,

                    10

                ],

                backgroundColor: [

                    "#00d084",

                    "#0ea5e9",

                    "#f59e0b",

                    "#ef4444"

                ]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            }

        }

    });

}

// =====================================
// Card Hover Animation
// =====================================

document.querySelectorAll(".dashboard-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// =====================================
// Bin Card Animation
// =====================================

document.querySelectorAll(".bin-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 30px rgba(0,255,136,.5)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

// =====================================
// Scroll Reveal
// =====================================

const revealItems = document.querySelectorAll(

    ".dashboard-card, .chart-box, .bin-card"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".8s";

    revealObserver.observe(item);

});

// =====================================
// Welcome Message
// =====================================

setTimeout(() => {

    console.log("Welcome to EcoBin Dashboard");

}, 500);

// =====================================
// Current Time
// =====================================

function updateClock() {

    const now = new Date();

    console.log(now.toLocaleTimeString());

}

setInterval(updateClock, 1000);