var questions = document.querySelector("#question")
var choices = Array.from(document.querySelectorAll(".choice-text"))
var progressText = document.querySelector("#progressText")
var scoreText = document.querySelector("#score")
var progressBarFull = document.querySelector("#progressBarFull")

var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0

var questions = [
    {
        question: Commonly used DATA types DO NOT include:
        choice1 "strings",
        choice2 "boolean",
        choice3 "alert",
        choice4 "number",
        answer: alert,
    }
    {
        question: The condition in an if/else statement is enclosed withing _______:
        choice1 "quotes",
        choice2 "curly brackets",
        choice3 "parentheses",
        choice4 "square brackets",
        answer: curly brackets,
    }
    {
        question: Arrays in Javascripts can be used to store _______:
        choice1 "numbers and strings",
        choice2 "other arrays",
        choice3 "boolean",
        choice4 "all of above",
        answer: all of above,

    }
    {
        question: String values must be enclosed within _______ when being assigned to variables:
        choice1 "commas",
        choice2 "curly brackets",
        choice3 "quotes",
        choice4 "parentheses",
        answer: quotes,
    }
    {
        question: A very useful tool used during development and debugging for printing content to the debugger is:
        choice1 "Javascript",
        choice2 "terminal / bash",
        choice3 "for loops",
        choice4 "console.log",
        answer: console.log,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 5

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choices => {
        var number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choices => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset["number"]

        var classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.removconsole.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})
