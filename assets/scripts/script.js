// I want to take a timed quiz on JS fundamentals that stores high scores

// Step 1 - When I click the start button to begin taking the code quiz, a time will start.
// Step 2 - When the timer starts, then I am presented with a question.
// Step 3 - When I answer a question, then I am presented with another question.
// Step 4 - If a question is answered incorrectly, then time is subtracted from the clock.
// Step 5 - When ALL the questions are answered OR the timer reaches 0, the game is over.
// Step 6 - When the game is over, then I can save my initials and score.

var quizContainer = document.getElementById('quiz');

var quizQuestions = [
    {
        question: "Arrays in JavaScript can be uses to store ______.",
        answers: {
            a: "Numbers and Strings",
            b: "Other Arrays",
            c: "Booleans",
            d: "All of the above"
        },
        correctAnswer: "d"
    }
];