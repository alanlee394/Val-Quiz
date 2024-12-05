localStorage.setItem("score", 0);

const buttons = document.getElementsByClassName("WrongButton");
const popup = document.getElementById("popup1");
const overlay = document.getElementById("overlay1");
const closePopup = document.getElementById("closePopup1");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function () {
        popup.style.display = "block";
        overlay.style.display = "block";
    });
});


closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
});

const button2 = document.getElementById("correctAnswer");
const popup2 = document.getElementById("popup2");
const overlay2 = document.getElementById("overlay2");

button2.addEventListener("click", function () {
    popup2.style.display = "block";
    overlay2.style.display = "block";
});

overlay2.addEventListener("click", function () {
    popup2.style.display = "none";
    overlay2.style.display = "none";
});

const closeButtons = document.querySelectorAll(".close-btn");
console.log("Number of close buttons found:", closeButtons.length);

closeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        console.log("Close button clicked! Navigating...");
        window.location.href = "question2.html";
    });
});

if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
  }

  const scoreDisplay = document.getElementById('totalScore');
  scoreDisplay.textContent = localStorage.getItem('score');


  document.getElementById('correctAnswer').addEventListener('click', () => {
    let score = parseInt(localStorage.getItem('score'), 10);
    score += 5; 
    localStorage.setItem('score', score); 
    scoreDisplay.textContent = score;
  });