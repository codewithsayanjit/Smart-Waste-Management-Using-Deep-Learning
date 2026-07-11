// ======================================
// EcoBin Analytics JS
// ======================================

// Animated Counters
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = target / 150;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});

// ======================================
// Line Chart
// ======================================

const lineChart = document.getElementById("lineChart");

if (lineChart) {

    new Chart(lineChart, {

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

                data: [

                    120,
                    180,
                    220,
                    300,
                    280,
                    350,
                    420

                ],

                borderColor: "#00ff88",

                backgroundColor: "rgba(0,255,136,.2)",

                fill: true,

                tension: 0.4

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

// ======================================
// Pie Chart
// ======================================

const pieChart = document.getElementById("pieChart");

if (pieChart) {

    new Chart(pieChart, {

        type: "pie",

        data: {

            labels: [

                "Plastic",
                "Paper",
                "Metal",
                "Organic"

            ],

            datasets: [{

                data: [

                    35,
                    20,
                    15,
                    30

                ],

                backgroundColor: [

                    "#22c55e",
                    "#3b82f6",
                    "#facc15",
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

// ======================================
// Bar Chart
// ======================================

const barChart = document.getElementById("barChart");

if (barChart) {

    new Chart(barChart, {

        type: "bar",

        data: {

            labels: [

                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"

            ],

            datasets: [{

                label: "Waste (kg)",

                data: [

                    1200,
                    1400,
                    1700,
                    1600,
                    1900,
                    2200

                ],

                backgroundColor: [

                    "#00ff88",
                    "#00e676",
                    "#00c853",
                    "#64dd17",
                    "#76ff03",
                    "#aeea00"

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

// ======================================
// Doughnut Chart
// ======================================

const doughnutChart = document.getElementById("doughnutChart");

if (doughnutChart) {

    new Chart(doughnutChart, {

        type: "doughnut",

        data: {

            labels: [

                "Completed",
                "Pending"

            ],

            datasets: [{

                data: [

                    82,
                    18

                ],

                backgroundColor: [

                    "#22c55e",
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

// ======================================
// Card Hover Effect
// ======================================

document.querySelectorAll(".dashboard-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ======================================
// Scroll Reveal
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

document.querySelectorAll(".dashboard-card,.chart-box").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

    observer.observe(item);

});

// ======================================
// Console Message
// ======================================

console.log("EcoBin Analytics Loaded Successfully");