const questionsElement = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const progressText = document.querySelector("#progressText")
const scoreText = document.querySelector("#score")
const progressBarFull = document.querySelector("#progressBarFull")

const currentQuestion = {}
const acceptingAnswers = truesection-end-game
let score = 0
let questionCounter = 0
const questions = [
    {
        question: "Commonly used DATA types DO NOT include",
        choice1: "strings",
        choice2: "boolean",
        choice3: "alert",
        choice4: "number",
        answer: "alert",
    },
    {
        question: "The condition in an if/else statement is enclosed withing _______",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: "curly brackets",
    },
    {
        question: "Arrays in Javascripts can be used to store ______",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "boolean",
        choice4: "all of above",
        answer: "all of above",

    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        choice1: "Javascript",
        choice2: "terminal / bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: "console.log",
    },
]

let SCORE_POINTS = 100
let MAX_QUESTIONS = 5

const startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choices => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
};

choices.forEach(choices => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.removconsole.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
});

const incrementScore = num => {
    score +=numscoreText.innerText = score
};

const startQuiz = () => {
    start.addEventListener("click", e => {
        questions
} 