var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz() {}

function showResults() {}

buildQuiz();

submitButton.addEventListener('click', showResults);

var myQuestions = [
	{
		question: 'Commonly Used Data Types Do NOT Include:',
		answers: {
			a: 'Strings',
			b: 'Booleans',
			c: 'Alerts',
			d: 'Numbers'
		},
		correctAnswer: 'c'
	},
	{
		question: 'The conditions of an IF/ELSE statement are inclosed within:',
		answers: {
			a: 'Quotes',
			b: 'Curly Brackets',
            c: 'Parentheses'
            d: "Square Brackets"
		},
		correctAnswer: 'c'
	},
	{
		question: 'Arrays in JavaScript can be used to store _________.',
		answers: {
			a: "Numbers and Strings",
			b: "Other Arrays",
			c: "Booleans",
			d: "All of the Above"
		},
		correctAnswer: 'd'
    }
    {
        question: "String values must be enclosed within ______ when being assigned to variables."
        answers: {
            a: "Commas"
            b: "Curly Brackets"
            c: "Quotes"
            d: "Parentheses"
        },
        correctAnswer: "c"
    }
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:"
        answers: {
            a: "JavaScript"
            b: "terminal/bash"
            c: "for loops"
            d: "console.log()"
        }
    }
];

