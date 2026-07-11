// =======================================
// EcoBin Notifications JS
// =======================================

// Search Notifications
const searchInput = document.getElementById("searchNotification");
const notificationCards = document.querySelectorAll(".notification-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        notificationCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =======================================
// Clear All Notifications
// =======================================

const clearBtn = document.getElementById("clearBtn");

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to clear all notifications?")) {

            document.querySelector(".notification-list").innerHTML =
                `
                <div class="notification-card info">
                    <i class="fa-solid fa-circle-info"></i>
                    <div>
                        <h3>No Notifications</h3>
                        <p>You have no new notifications.</p>
                        <small>Just now</small>
                    </div>
                </div>
                `;

        }

    });

}

// =======================================
// Fade-in Animation
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

notificationCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

// =======================================
// Auto Demo Notifications
// =======================================

const messages = [

{
icon:"fa-triangle-exclamation",
title:"Overflow Alert",
text:"Bin-401 has reached maximum capacity.",
type:"danger"
},

{
icon:"fa-truck",
title:"Collection Completed",
text:"Truck-07 completed Sector C.",
type:"success"
},

{
icon:"fa-battery-quarter",
title:"Low Battery",
text:"Bin-122 battery is below 15%.",
type:"warning"
},

{
icon:"fa-camera",
title:"New Waste Report",
text:"Citizen reported garbage near Library.",
type:"info"
}

];

function addNotification(){

    const list = document.querySelector(".notification-list");

    if(!list) return;

    const data = messages[Math.floor(Math.random()*messages.length)];

    const card = document.createElement("div");

    card.className = "notification-card " + data.type;

    card.innerHTML = `
        <i class="fa-solid ${data.icon}"></i>
        <div>
            <h3>${data.title}</h3>
            <p>${data.text}</p>
            <small>Just Now</small>
        </div>
    `;

    list.prepend(card);

}

// Add a new notification every 20 seconds
setInterval(addNotification, 20000);

// =======================================
// Notification Click Effect
// =======================================

document.addEventListener("click", function(e){

    const card = e.target.closest(".notification-card");

    if(card){

        card.style.background = "rgba(0,255,136,.15)";
        card.style.transform = "scale(1.02)";

        setTimeout(()=>{

            card.style.background = "";
            card.style.transform = "";

        },400);

    }

});

// =======================================
// Welcome Message
// =======================================

console.log("🔔 EcoBin Notifications Loaded Successfully");