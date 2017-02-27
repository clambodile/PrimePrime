/* Global Variables */
var currentProblem;
var quiz;

/* Attach Event Handlers */
document.getElementById('getInputs').addEventListener('click', start);
document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

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
  showQViewer();

}

function submitAnswer() {
  quiz[currentProblem].attempt = document.getElementById('answer').value;
  quiz[currentProblem].correct = quiz[currentProblem].attempt == quiz[currentProblem].answer;
  currentProblem++;  
  updateQuestion();
}

function updateQuestion() {
  if (currentProblem < quiz.length) {
    var question = document.getElementById('question');
    question.innerHTML = formatProblem(quiz[currentProblem]);
  }
  else {
    resetQuiz();
  }
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
}
