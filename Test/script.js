
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2 
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = Array(questions.length).fill(null);

function loadQuestion() {
    const questionContainer = document.getElementById("question-text");
    const answerOptions = document.getElementById("answer-options");

    answerOptions.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const answerLabel = document.createElement("label");
        answerLabel.className = "answer-option";
        
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answer";
        radioInput.value = index;
        radioInput.checked = userAnswers[currentQuestionIndex] === index;
        radioInput.onclick = () => selectAnswer(index);

        answerLabel.appendChild(radioInput);
        answerLabel.appendChild(document.createTextNode(answer));
        answerOptions.appendChild(answerLabel);
    });

    document.getElementById("prev-btn").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    document.getElementById("next-btn").style.display = currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submit-btn").style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    score = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
    }, 0);

    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.textContent = `Your Score: ${(score / questions.length) * 100}%`;
}

loadQuestion();
