// ==========================================
// EcoBin Waste Sorting Game
// Part 3A
// ==========================================
const restartBtn = document.querySelector(".restart");
const wasteItem = document.getElementById("wasteItem");
const wasteName = document.getElementById("wasteName");
const bins = document.querySelectorAll(".bin");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const highScoreText = document.getElementById("highScore");
const message = document.getElementById("message");

// -------------------------------
// Waste Database
// -------------------------------

const wastes = [

{
emoji:"🥤",
name:"Plastic Bottle",
type:"plastic"
},

{
emoji:"🧴",
name:"Shampoo Bottle",
type:"plastic"
},

{
emoji:"🥛",
name:"Glass Bottle",
type:"glass"
},

{
emoji:"🍾",
name:"Glass Jar",
type:"glass"
},

{
emoji:"📰",
name:"Newspaper",
type:"paper"
},

{
emoji:"📦",
name:"Cardboard",
type:"paper"
},

{
emoji:"📄",
name:"Notebook",
type:"paper"
},

{
emoji:"🍌",
name:"Banana Peel",
type:"organic"
},

{
emoji:"🍎",
name:"Apple Core",
type:"organic"
},

{
emoji:"🥬",
name:"Vegetable Waste",
type:"organic"
},

{
emoji:"🍃",
name:"Leaves",
type:"organic"
},

{
emoji:"🥫",
name:"Tin Can",
type:"plastic"
},

{
emoji:"🥤",
name:"Soft Drink Bottle",
type:"plastic"
},

{
emoji:"🍷",
name:"Wine Bottle",
type:"glass"
},

{
emoji:"📚",
name:"Old Books",
type:"paper"
},

{
emoji:"🌿",
name:"Garden Waste",
type:"organic"
}

];

// -------------------------------

let currentWaste;

let score = 0;

let highScore = localStorage.getItem("ecoHighScore") || 0;

highScoreText.innerHTML = highScore;

// -------------------------------

function nextWaste(){

currentWaste = wastes[Math.floor(Math.random()*wastes.length)];

wasteItem.innerHTML = currentWaste.emoji;

wasteName.innerHTML = currentWaste.name;

}

nextWaste();

// -------------------------------
// Drag
// -------------------------------

wasteItem.addEventListener("dragstart",(e)=>{

e.dataTransfer.setData("type",currentWaste.type);

});

// -------------------------------
// Bin Events
// -------------------------------

bins.forEach(bin=>{

bin.addEventListener("dragover",(e)=>{

e.preventDefault();

});

bin.addEventListener("drop",(e)=>{

e.preventDefault();

const type=e.dataTransfer.getData("type");

checkAnswer(type,bin);

});

});
// Click Bin Support

bins.forEach(bin => {

    bin.addEventListener("click", () => {

        checkAnswer(currentWaste.type, bin);

    });

});
// ==========================================
// EcoBin Waste Sorting Game
// Part 3B
// ==========================================

// -------------------------------
// Timer
// -------------------------------

let time = 60;
let gameOver = false;

timeText.innerHTML = time;

let timer = setInterval(() => {

    if (gameOver) return;

    time--;

    timeText.innerHTML = time;

    if (time <= 0) {

        clearInterval(timer);
        endGame();

    }

}, 1000);

// -------------------------------
// Check Answer
// -------------------------------

function checkAnswer(type, bin) {

    if (gameOver) return;

    const correct = bin.dataset.type;

if (type === correct) {

    score += 10;

    message.innerHTML = "✅ Correct!";
    message.style.color = "#22c55e";


    // ⭐ Falling stars effect
    fallingStars();


    wasteItem.style.transform = "scale(1.2) rotate(15deg)";

    setTimeout(() => {
        wasteItem.style.transform = "scale(1)";
    }, 250);

}else {

        score -= 5;

        if (score < 0) score = 0;

        message.innerHTML = "❌ Wrong Bin!";
        message.style.color = "#ef4444";

        wasteItem.style.transform = "translateX(-10px)";

        setTimeout(() => {
            wasteItem.style.transform = "translateX(10px)";
        }, 80);

        setTimeout(() => {
            wasteItem.style.transform = "translateX(0)";
        }, 160);

    }

    scoreText.innerHTML = score;

    // High Score

    if (score > highScore) {

        highScore = score;

        localStorage.setItem("ecoHighScore", highScore);

        highScoreText.innerHTML = highScore;

    }

    // Next Waste

    nextWaste();

}

// -------------------------------
// Hover Effect
// -------------------------------

bins.forEach(bin => {

    bin.addEventListener("mouseenter", () => {

        bin.style.transform = "translateY(-8px) scale(1.05)";

    });

    bin.addEventListener("mouseleave", () => {

        bin.style.transform = "translateY(0) scale(1)";

    });

});

// -------------------------------
// Waste Animation
// -------------------------------

wasteItem.style.transition = ".3s";

wasteItem.classList.add("floating");
// ==========================================
// EcoBin Waste Sorting Game
// Part 3C (Final)
// ==========================================

// -------------------------------
// End Game
// -------------------------------

function endGame() {

    gameOver = true;

    wasteItem.innerHTML = "🏁";

    message.style.color = "#ffffff";

    if (score >= 200) {

        message.innerHTML =
        `🎉 Amazing!<br>Final Score: ${score}`;

        celebrate();

    }
    else if (score >= 120) {

        message.innerHTML =
        `👏 Great Job!<br>Final Score: ${score}`;

    }
    else {

        message.innerHTML =
        `🙂 Keep Practicing!<br>Final Score: ${score}`;

    }

    // Disable Bins

    bins.forEach(bin => {

        bin.style.pointerEvents = "none";
        bin.style.opacity = ".6";

    });

    restartBtn.style.display = "inline-block";

}

// -------------------------------
// Restart Game
// -------------------------------

restartBtn.addEventListener("click", () => {

    score = 0;
    time = 60;
    gameOver = false;

    scoreText.innerHTML = score;
    timeText.innerHTML = time;

    message.innerHTML = "";
    restartBtn.style.display = "none";

    bins.forEach(bin => {

        bin.style.pointerEvents = "auto";
        bin.style.opacity = "1";

    });

    nextWaste();

    // Restart Timer

    clearInterval(timer);

    const newTimer = setInterval(() => {

        if (gameOver) return;

        time--;

        timeText.innerHTML = time;

        if (time <= 0) {

            clearInterval(newTimer);
            endGame();

        }

    }, 1000);

});

// -------------------------------
// Celebration Animation
// -------------------------------

function celebrate() {

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.background =
            `hsl(${Math.random()*360},90%,60%)`;

        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}
// ==========================================
// Falling Stars Effect
// ==========================================

function fallingStars(){

    for(let i = 0; i < 25; i++){

        const star = document.createElement("div");

        star.className = "gameStar";

        star.innerHTML = "⭐";

        star.style.left = Math.random()*100 + "%";

        star.style.animationDuration =
        (1 + Math.random()*2) + "s";


        document.querySelector(".game")
        .appendChild(star);


        setTimeout(()=>{

            star.remove();

        },3000);

    }

}

// -------------------------------
// Start Game
// -------------------------------

nextWaste();

console.log("♻ EcoBin Waste Sorting Game Loaded!");