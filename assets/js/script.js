var timeBar = document.getElementById("time-numb");
var userInput;
var timeLeft = questions.length*10;
var questionIndex = 0;
var timer = document.getElementById("time-bar");
var userScore = 0;
// Saying to either keep the pre inserted info or start fresh.
// Order matters. as to array.
var highScores = JSON.parse(localStorage.getItem("High Score Info")) || [];

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const innitials = document.getElementById("innitials-input");
const displayedIn = document.getElementById("displayes-in");
const displayedScore = document.getElementById("displayed-score");

function startGame() {
    start.style.display = "none";
    quiz.style.display = "block";
    timer = setInterval(countdown, 1000);
    timeBar.textContent = timeLeft;
    getQuestion();
}

function countdown() {
  timeLeft--,
  timeBar.textContent = timeLeft; 
  // if statement, see if the time reaches 0.
  if (timeLeft <= 0 ) {
    endGame();
  }
}

const submitBtn = document.getElementById("submit-innitial");
submitBtn.addEventListener("click", setHighScores)

function setHighScores(event) {
  submitBtn.style.display = "none";
  var innitials = document.getElementById("user-innitials");
  event.preventDefault();
  var userInnitial = innitials.value;
  var scoreObj = {innitials:userInnitial, score:userScore}
  highScores.push(scoreObj)
  localStorage.setItem('High Score Info', JSON.stringify(highScores))
}

function getHighScores() {
  var userInnitial = innitials.value;
  var userData = [userInnitial, userScore];
  localStorage.getItem("High Score Info", userData);
  displayedIn.textContent = userData;
  displayedScore.textContent = userData;
  
}
  
function endGame() {
  quiz.style.display = "none";
  innitials.style.display = "block";
  var choicesEl = document.getElementById("q-choices");
  var scoreDislay = document.getElementById("final-score");
  // var userInnitials = document.getElementById("user-innitials");
  scoreDislay.textContent = "Your Score: " + userScore;
  choicesEl.textContent = "";
  clearInterval(timer);
  console.log(userScore);
  // Set innitials
}



function getQuestion() {
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("question-title");
  var choicesEl = document.getElementById("q-choices");
  titleEl.textContent = currentQuestion.qTitle;
  choicesEl.innerHTML = "";
  // continue here
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var qChoice = currentQuestion.choices[i];
    var choiceBtn = document.createElement("button")
    choiceBtn.textContent = qChoice;
    choiceBtn.addEventListener("click", checkAnswer)
    choicesEl.append(choiceBtn);
  }
}

function checkAnswer(event) {
  var currentQuestion = questions[questionIndex];
  var currentBtn = event.target;
  var btnChoice = currentBtn.textContent;
  var resultTxt = document.getElementById("correctness")
  // console.log(currentBtn);
  if (currentQuestion.correct === btnChoice) {
    userScore += 20;
    resultTxt.textContent = "Correct!"
  } else {
    // window.alert('Incorrect.')
    timeLeft -= 10;
    resultTxt.textContent = "Incorrect!"
  }
  questionIndex++;
  if (questionIndex >= questions.length) {
  endGame();
  } else {
    getQuestion();
  }
}


start.addEventListener("click", startGame);


// TODO:
// Get highscore                                                                                        <----- TODO
// set highscore


