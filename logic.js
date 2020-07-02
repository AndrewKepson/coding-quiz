var secondsLeft = 60;
var startQuiz = document.querySelector('#start');
var submitScore = document.querySelector('#submit-button');
var questions = [
	{
		question: 'Commonly Used Data Types Do NOT Include:',
		answers: [ 'Strings', 'Booleans', 'Alerts', 'Numbers' ],
		correct: 'Alerts'
	},
	{
		question: 'The conditions of an IF/ELSE statement are inclosed within:',
		answers: [ 'Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets' ],
		correct: 'Curly Brackets'
	},
	{
		question: 'Arrays in JavaScript can be used to store _________.',
		answers: [ 'Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above' ],
		correct: 'All of the Above'
	},
	{
		question: 'String values must be enclosed within ______ when being assigned to variables.',
		answers: [ 'Commas', 'Curly Brackets', 'Quotes', 'Parentheses' ],
		correct: 'Quotes'
	},
	{
		question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		answers: [ 'JavaScript', 'terminal/bash', 'for loops', 'console.log()' ],
		correct: 'console.log()'
	}
];
var score = 0; //Should be stored in local storage. High scores will need to be retrieved from local storage. Use JSON.stringify and JSON.parse
var j = 0;
var interval;

function generateQuestion() {
	document.querySelector('.questions').innerHTML = '';
	startQuiz.setAttribute('style', 'display:none');
	document.querySelector('.quiz').setAttribute('style', 'display:block;');
	var q = questions[j].question;
	var questionEl = document.createElement('h2');
	var ans = questions[j].answers;
	questionEl.textContent = q;
	document.querySelector('.questions').appendChild(questionEl);

	for (var i = 0; i < ans.length; i++) {
		var ansBtn = document.createElement('button');
		ansBtn.textContent = ans[i];
		document.querySelector('.questions').appendChild(ansBtn);
		ansBtn.addEventListener('click', checkAnswer);
	}
}
//Check the index of the chosen answer to determine if the answer is correct or not and increase the score or decrease the timer appropriately
function checkAnswer(event) {
	//If the index chosen is not correct, log incorrect and decrease the timer by 5 seconds
	if (questions[j].correct !== event.target.textContent) {
		console.log('incorrect');
		secondsLeft -= 5;
	//Else alert correct and increase the score and index
	} else {
		alert('correct');
		score++;
		j++;
	}
	//Ensures that the game continues if there are questions left in the array, else triggers the endGame function
	if (j < questions.length-1) {
		j++;
		generateQuestion();
	} else {
		endGame();
	}
}
//End's the game; is triggered by reaching the end of the question array or the timer reaching 0 seconds
function endGame() {
	clearInterval;
	document.querySelector('.quiz').setAttribute('style', 'display:none;');
	document.getElementById('results').removeAttribute('class');
	localStorage.getItem();
	document.querySelector('#final-message').textContent = 'Your final score is: ' + score;
}

function counter() {
	interval = setInterval(function() {
		//Sets the document text content to display the timer and decrease the timer by one interval (second) per second
		document.querySelector('#timer').textContent = secondsLeft;
		secondsLeft--;
		//When the timer reaches 0, clears the timer and ends the game
		if (secondsLeft === 0) {
			//When the timer gets to zero, or when all questions have been answered (whichever comes first), card appears showing score and how much time was used.
			clearInterval(interval);
			endGame();
		} else {
			return secondsLeft;
		}
	}, 1000);
}

//Commit the scores to local storage so that they can be used in High scores
function storeScores() {
	//Turn the user's input into a variable to use in the score
	var userName = document.querySelector('#score-name').value.trim();
	//Use the score global variable and set the name variable to the user's input
	var finalScore = {
		score: score,
		name: userName
	};
	//Creates a variable to access the scores that are stored in local storage
	var hiScores = JSON.parse(window.localStorage.getItem('High Scores')) || [];
	//Sends the hiScores value to the array
	hiScores.push(finalScore);
	window.localStorage.setItem('High Scores', JSON.stringify(hiScores));
}

function displayScores() {
	var hiScores = JSON.parse(window.localStorage.getItem('High Scores')) || [];

	hiScores.forEach(function(score) {
		//Create a new paragraph for each new score
		var pTag = document.createElement('p');
		pTag.textContent = score.name + ' ' + score.score;
		//Add the paragraph to the document
		document.querySelector('#high-scores').appendChild(pTag);
	});
}
//Call scores from local storage to retrieve high scores

//Event listener to start button to begin question function and start counter
startQuiz.addEventListener('click', generateQuestion);
startQuiz.addEventListener('click', counter);
//Event listener to trigger the score storage to and display from local storage
submitScore.addEventListener('click', storeScores);
submitScore.addEventListener('click', displayScores);
