var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winningScoreDisplay = document.querySelector("p span");
// Above selects span inside a p tag

var p1Button = document.getElementById("playerOne");
var p2Button = document.getElementById("playerTwo");
var resetButton = document.getElementById("reset");

var p1Score = 0;
var p2Score = 0;

var numInput = document.querySelector("input[type='number']");
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener('click', function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

numInput.addEventListener('change', function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

resetButton.addEventListener('click', function() {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
}