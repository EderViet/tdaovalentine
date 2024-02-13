const question = [
    {
        question: "Be la nguoi yeu cua ai?",
        answers: [
            {text: "Bop", correct: true},
            {text: "Ong hang xom", correct: false},
            {text: "Bim", correct: false},
            {text: "Chi Yvonne", correct: false},
        ]
    },
    {
        question: "Lan a to tinh dau tien la o dau?",
        answers: [
            {text: "Townhall", correct: false},
            {text: "George Streets", correct: false},
            {text: "Tram", correct: false},
            {text: "House", correct: true},
        ]
    },
    {
        question: "Mon dau tien minh an la mon gi?",
        answers: [
            {text: "Hotpot", correct: false},
            {text: "BBQ", correct: false},
            {text: "Pho mai nuong", correct: true},
            {text: "Thai", correct: false},
        ]
    },
    {
        question: "Co yeu anh khonggggggggggg?",
        answers: [
            {text: "Khong", correct: false},
            {text: "Co", correct: true},
            {text: "Khong", correct: false},
            {text: "Khong", correct: false},
        ]
    },
    {
        question: "Ngui iu ban yeu gi nhat o ban?",
        answers: [
            {text: "Zu", correct: false},
            {text: "Mong", correct: false},
            {text: "Personality, kindness, good, But kiep truoc", correct: true},
            {text: "Appearance", correct: false},
        ]
    },
    {
        question: "Khong duoc gian doi~ vu vo anh nua nha?",
        answers: [
            {text: "Okie ne", correct: true},
            {text: "Tat nhien roi", correct: true},
            {text: "Oke anh iu", correct: true},
            {text: "Okela", correct: true},
        ]
    },
    {
        question: "And again, will you be my valentine?",
        answers: [
            {text: "No", correct: false},
            {text: "No", correct: false},
            {text: "No", correct: false},
            {text: "Yes", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "none"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Diem cua be ${score} tren ${question.length} ne!`;
    nextButton.innerHTML = "Hoac lam lai nhe?";
    //create a button
    const redirectToAnotherPageButton = document.createElement("button");
    redirectToAnotherPageButton.innerHTML = "Qua trang ke tiep ne ================>";
    redirectToAnotherPageButton.classList.add("btn");
    redirectToAnotherPageButton.addEventListener("click", redirectToAnotherPage);
    answerButtons.appendChild(redirectToAnotherPageButton);
    nextButton.style.display = "block";
}

function redirectToAnotherPage() {
    // Change the URL to the desired HTML site
    window.location.href = "Addon.html";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
