// I want to take a timed quiz on JS fundamentals that stores high scores

// Step 1 - When I click the start button to begin taking the code quiz, a timer will start.
// Step 2 - When the timer starts, then I am presented with a question.
// Step 3 - When I answer a question, then I am presented with another question.
// Step 4 - If a question is answered incorrectly, then time is subtracted from the clock.
// Step 5 - When ALL the questions are answered OR the timer reaches 0, the game is over.
// Step 6 - When the game is over, then I can save my initials and score.

var quizContainer = document.getElementById('quiz');

var quizQuestions = [
    {
        question0: "Arrays in JavaScript can be uses to store ______.",
        choices0: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer0: "All of the above"
    },
    {
        question1: "Commonly used data types do NOT include:",
        choices1: ["Strings","Booleans", "Alerts", "Numbers",],
        answer1: "Booleans"
    },
    {
        question2: "The condition in an if/else statement is enclosed within ______.",
        choices2: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer2: "Parentheses"
    },
    {
        question3: "String values must be enclosed within ______ when being assigned to variables.",
        choices3: ["Commans", "Curly Brackets", "Quotes", "Parentheses"],
        answer3: "Parentheses"
    },
    {
        question4: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices4: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],
        answer4: "Parenthesis"
    }
];