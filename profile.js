// ======================================
// EcoBin Profile JS
// ======================================

// Current Date
const today = document.getElementById("today");

if (today) {
    const date = new Date();

    today.innerHTML = date.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

// ======================================
// Profile Image Preview
// ======================================

const uploadImage = document.getElementById("uploadImage");
const profileImage = document.getElementById("profileImage");
const changePhoto = document.getElementById("changePhoto");

if (changePhoto) {

    changePhoto.addEventListener("click", () => {
        uploadImage.click();
    });

}

if (uploadImage) {

    uploadImage.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            profileImage.src = e.target.result;

        };

        reader.readAsDataURL(file);

    });

}

// ======================================
// Save Profile
// ======================================

const saveBtn = document.getElementById("saveBtn");

if (saveBtn) {

    saveBtn.addEventListener("click", () => {

        const passwords = document.querySelectorAll(".password-grid input");

        const current = passwords[0].value.trim();
        const newPass = passwords[1].value.trim();
        const confirmPass = passwords[2].value.trim();

        if (current === "" || newPass === "" || confirmPass === "") {

            alert("Please fill all password fields.");
            return;

        }

        if (newPass !== confirmPass) {

            alert("New passwords do not match.");
            return;

        }

        alert("✅ Profile Updated Successfully!");

        passwords.forEach(input => input.value = "");

    });

}

// ======================================
// Statistics Counter Animation
// ======================================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const target = parseFloat(counter.innerText);

    if (isNaN(target)) return;

    let current = 0;

    const speed = target / 80;

    function updateCounter() {

        if (current < target) {

            current += speed;

            if (target % 1 !== 0) {

                counter.innerText = current.toFixed(1);

            } else {

                counter.innerText = Math.ceil(current);

            }

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    }

    updateCounter();

});

// ======================================
// Scroll Animation
// ======================================

const elements = document.querySelectorAll(
    ".profile-card, .password-card, .stat-card, .activity"
);

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

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".7s ease";

    observer.observe(el);

});

// ======================================
// Input Focus Effect
// ======================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.boxShadow = "0 0 15px rgba(0,255,153,.5)";

    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "none";

    });

});

// ======================================
// Activity Hover Effect
// ======================================

document.querySelectorAll(".activity li").forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateX(10px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateX(0px)";

    });

});

// ======================================
// Welcome Message
// ======================================

console.log("👤 EcoBin Profile Loaded Successfully");