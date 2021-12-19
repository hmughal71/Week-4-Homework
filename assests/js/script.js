const startGameButton = document.getElementById("btn-start-game");
const navTimer = document.getElementById("nav-timer");
const sectionEndGame = document.getElementById("section-end-game");
const spanTimer = document.getElemtById("span-timer");

let timeRemaining = 60; // 60 sec by default
let timerId;

functionnStartTimer() {
    // show timer in nav
    navTimer.classList.remove("hide");

    timerId = setInterval(function() {
        timeRemaining--;

        if(timeRemaining <= 0){
            sectionEndGame();
        }
        spanTimer.textContent = timeRemaining;
    }, 1000);
}

function endGame(){
    stopTimer();
    //hide landing page

    sectionStartGame.classList.add("hide");
    // hide the questions
    sectionQuestion.classList.add("hide");
    // show the end game screen
    sectionEndGame.classList.remove("hide");

}

//when I click the start button
startGameButton.addEventListener("click", function(event){
    event.preventDefault();
    // start the timer
    startTimer();
    //hide the landing page
    sectionStartGame.classList.add("hide");
    // show the first question
    sectionQuestion.classList.remove("hide");

});

// when I click on a choice on the question
// if correct
// 1 sec delay, highlight choice with green bg
// then move on to the next question

// if incorrect
// 1 sec delay, highlight choice with red bg
// deduct timer by 10sec
// move on to next question

// if we hit the last question,
// then end game

// if we reach timer === 0 sec
// then end game




// in the end game screen
// if we click on submit,
// save the user initial and final time remaining to local storage
// redirect the user to the high score page







