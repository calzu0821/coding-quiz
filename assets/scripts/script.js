//Creating a new variable name from the element ID on the HTML
const startBtn = document.getElementById("start-btn");
const startPage = document.getElementById("start-screen");
const questionPage = document.getElementById("questions");
const questionBtns = document.getElementsByClassName("question-button");
const endPage = document.getElementById("end-screen");
const highscorelink = document.getElementById("highscores-button");
const timerDiv = document.getElementById("timer");
const timerbtn = document.getElementById("timer1");
const correctAnswer = document.getElementById("correct");
const incorrectAnswer = document.getElementById("incorrect");

//Added questions using an objects array
const questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
];

const answers = [];
let userFinal = [{ initials: "", score: 0 }];
const userHighscores = [];
for (let i = 0; i < questions.length; i++) {
    answers.push(questions[i].answer)
}
let seconds = 75;
let questionIndex = 0;
let score = 0;

function startQuiz() {
    startPage.setAttribute("class", "hide");
    questionPage.removeAttribute("class");
    questionPage.setAttribute("class", "index");
    timerDiv.removeAttribute("style");

    setInterval(function timer() {
        timerbtn.innerHTML = "Time: " + seconds;
        seconds--;
        if (seconds === 0 || seconds < 0) {
            endQuiz();
        }
    }, 1000);

    renderQuestion(questionIndex)
}

function renderQuestion(num) {
    const question = questions[num];
    if (question) {
      const questionTitle = document.getElementById("question-title");
      const questionBtn0 = document.getElementById("question0");
      const questionBtn1 = document.getElementById("question1");
      const questionBtn2 = document.getElementById("question2");
      const questionBtn3 = document.getElementById("question3");
  
      questionTitle.innerHTML = question.title;
      questionBtn0.innerHTML = question.choices[0];
      questionBtn1.innerHTML = question.choices[1];
      questionBtn2.innerHTML = question.choices[2];
      questionBtn3.innerHTML = question.choices[3];
    }
  }

for (let i = 0; i < questionBtns.length; i++) {
    const button = questionBtns[i];
    button.addEventListener("click", () => {
        correctAnswer.setAttribute("class", "hide");
        incorrectAnswer.setAttribute("class", "hide");
        let answer = button.innerHTML;
        if (answers.includes(answer) === true) {
            correctAnswer.removeAttribute("class");
            hideFeedBack();

            if (questionIndex < questions.length) {
                questionIndex++
                renderQuestion(questionIndex);
            }
            else if (questionIndex === questions.length) {
                score += seconds;
                endQuiz();
            }
        }   else {
            incorrectAnswer.removeAttribute("class");
            hideFeedBack();

            if (questionIndex < questions.length) {
                questionIndex++
                seconds -= 10;
                renderQuestion(questionIndex);
            }
            else if (questionIndex === questions.length) {
                seconds -= 10;
                score += seconds;
                endQuiz();
            }
        }
    });
}

function hideFeedBack(){
    setTimeout(() => {
       correctAnswer.setAttribute("class","hide");
       incorrectAnswer.setAttribute("class","hide");
    }, 800);
}
 
function endQuiz() {
    let finalScore = document.getElementById("score");
    finalScore.innerHTML = score;

    questionPage.setAttribute("class", "hide");
    endPage.removeAttribute("class");
    endPage.setAttribute("class", "index");
    timerbtn.setAttribute("class", "hide");
    highscorelink.setAttribute("class", "hide");
}

const submitBtn = document.getElementById("submit-form");
submitBtn.addEventListener("click", function () {
  let initials = document.getElementById("initials").value;
  let pastScores = JSON.parse(localStorage.getItem("highscores")) || [];
  let highScore = { initials: initials, score: score };
  pastScores.push(highScore);
  localStorage.setItem("highscores", JSON.stringify(pastScores));
  displayHighscores();
});

function submitClear() {
    alert("All highscores have been cleared!");
    localStorage.clear();
    window.location.reload();
}

const goBackBtn = document.getElementById("go-back-btn");
goBackBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

function displayHighscores() {
    let pastScores = JSON.parse(localStorage.getItem("highscores")) || [];
    let highscoreList = document.getElementById("highscore-list");
    highscoreList.innerHTML = "";
    for (let i = 0; i < pastScores.length; i++) {
      let highscore = pastScores[i];
      let li = document.createElement("li");
      li.textContent = highscore.initials + " - " + highscore.score;
      highscoreList.appendChild(li);
    }
}

highscorelink.addEventListener("click", function () {
  startPage.setAttribute("class", "hide");
  questionPage.setAttribute("class", "hide");
  endPage.removeAttribute("class");
  highscorelink.setAttribute("class", "hide");
  timerbtn.setAttribute("class", "hide")
  displayHighscores();
});


























// // I want to take a timed quiz on JS fundamentals that stores high scores

// // Step 1 - When I click the start button to begin taking the code quiz, a timer will start.
// var startButton = document.getElementById("start-button");
// var startScreen = document.getElementById("start-quiz");
// var questionScreen = document.getElementById("quiz-questions")
// var timer = document.getElementById("timer");
// var timer2 = document.getElementById("timer2");

// var secondsLeft = 60;
// var questionList = 0;
// var score = 0;

// startButton.onclick = startQuiz;

// // function startQuiz () {
// //     startScreen.setAttribute("class", "hide");
// //     questionScreen.removeAttribute("class");
// //     questionScreen.setAttribute("class", "highscores-container");
// //     timer.removeAttribute("style")

// //     setInterval(function timer() {
// //         timer2.textContent = "Time: " + secondsLeft;
// //         secondsLeft--;
// //         if (secondsLeft <= 0) {
// //             endQuiz();
// //         }
// //     }, 1000);
// // }
// // startQuiz();

// // Step 2 - When the timer starts, then I am presented with a question.
// // Step 3 - When I answer a question, then I am presented with another question.
// // Step 4 - If a question is answered incorrectly, then time is subtracted from the clock.
// // Step 5 - When ALL the questions are answered OR the timer reaches 0, the game is over.
// // Step 6 - When the game is over, then I can save my initials and score.

// // var quizContainer = document.getElementById('quiz');
// // var timer = document.getElementById("time-box");
// // var secondsLeft=60;

// var quizQuestions = [
//     {
//         question: "Arrays in JavaScript can be uses to store ______.",
//         choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
//         answer: "All of the above"
//     },
//     {
//         question: "Commonly used data types do NOT include:",
//         choices: ["Strings","Booleans", "Alerts", "Numbers",],
//         answer: "Booleans"
//     },
//     {
//         question: "The condition in an if/else statement is enclosed within ______.",
//         choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
//         answer: "Parentheses"
//     },
//     {
//         question: "String values must be enclosed within ______ when being assigned to variables.",
//         choices: ["Commans", "Curly Brackets", "Quotes", "Parentheses"],
//         answer: "Parentheses"
//     },
//     {
//         question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//         choices: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],
//         answer: "Parenthesis"
//     }
// ];



// // function startQuiz() {
// //     // timer=setInterval(clockTick, 1000);
// //     timer.textContent=setInterval(clockTick, 1000);
// //     console.log(secondsLeft);
// // }

// // function clockTick() {
// //     secondsLeft--;
// //     timer.textContent=secondsLeft
// //     if (secondsLeft <= 0) {
// //         console.log ("Times up!");
// //     }
// // }
// // startQuiz();

// // function getQuestion() {
// //     var currentQuestion=quizQuestions[0];
// //     var questionTitle=document.getElementById("question-title");
// //     questionTitle.textContent=currentQuestion.title

// // }

// // document.getElementById("start-button").onclick = function() {
// //     var quizContainer = document.getElementById('quiz-container');
// //     quizContainer.setAttribute('class', 'hidden');
// //     getQuestion();
// // }