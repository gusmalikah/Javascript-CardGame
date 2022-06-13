let firstCard = 10;
let secondCard =11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
function startGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " "+ secondCard;
        message = "Do you want to draw a new card?";
        if(sum <= 20) {
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            message = "You've got Blackjack!";
            hasBlackJack = true;
        } else {
            message = "You're out of the game!";
            isAlive = false;

    }
    messageEl.textContent = message;
}

