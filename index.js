/* Global Variables */
var currentProblem;
var quiz;

/* Attach Event Handlers */
document.getElementById('getInputs').addEventListener('click', start);
document.getElementById('submitAnswer').addEventListener('click', submitAnswer);
document.getElementById('answer').addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    submitAnswer();
  }
});

/* Event Handlers */
function start() {

  var nProblems = document.getElementById('nProblems').value;
  var nMult = document.getElementById('nMult').value;
  var nPrimes = document.getElementById('nPrimes').value;
  var primes = findPrimes(nPrimes);
  var probViewer = document.getElementById('currentProblem');
  quiz = createQuiz(nProblems, nMult, primes);
  currentProblem = 0;
  updateQuestion(quiz, currentProblem);
  hideScoreViewer();
  var answers = document.getElementById('answers');
  while(answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
  showQViewer();
}

function submitAnswer() {

  var curr = quiz[currentProblem]
  curr.attempt = document.getElementById('answer').value;
  quiz.attempts++;
  curr.correct = curr.attempt == curr.answer;
  if (curr.correct) quiz.corrects++;

  updateScore();
  currentProblem++;  
  updateQuestion();

}

function updateQuestion() {
  clear('answer');
  if (currentProblem < quiz.length) {
    var question = document.getElementById('question');
    question.innerHTML = formatProblem(quiz[currentProblem]);
  } else {
    resetQuiz();
  }

}

function updateScore() {
  var curr = quiz[currentProblem]
  var attempt = curr.attempt;
  var answer = curr.answer;
  var tr = document.createElement('tr');
  var attemptCell = document.createElement('td');
  attemptCell.appendChild(document.createTextNode(attempt));
  tr.appendChild(attemptCell);
  var answerCell = document.createElement('td');
  answerCell.appendChild(document.createTextNode(answer));
  tr.appendChild(answerCell);
  document.getElementById('answers').appendChild(tr);
  var scoreEl = document.getElementById('scoreDisplay');
  scoreEl.innerHTML = Math.round((quiz.corrects/quiz.attempts) * 100) + '%';
}

function hideScoreViewer() {
  document.getElementById('scoreCard').classList.add('hidden');
}

function showScoreViewer() {
  document.getElementById('scoreCard').classList.remove('hidden');
}

function hideQViewer() {
  document.getElementById('currentProblem').classList.add('hidden');
}

function showQViewer() {
  document.getElementById('currentProblem').classList.remove('hidden');
}


function resetQuiz() {
  currentProblem = null;
  hideQViewer();
  showScoreViewer();
}

function clear(id, def) {
  var el = document.getElementById(id);
  el.value = def || '';
}
