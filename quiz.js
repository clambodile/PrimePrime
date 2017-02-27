function createQuiz(nProblems, nMult, primes) {
  var problems = [];
  for (var i = 0; i < nProblems; i++) {
    problems.push(createProblem(nMult, primes))
  }
  return problems;
}

function createProblem(nMult, primes) {
  var indexes = [];
  for (var i = 0; i < nMult; i++) {
    indexes.push(Math.round(Math.random() * (primes.length - 1)))
  }
  var multipliers = indexes.map(function(index) {
    return primes[index];
  })
  return {
    multipliers: multipliers,
    answer: multipliers.reduce(function product(accum, curr) {
      return accum * curr;
    })
  }
}

function formatProblem(problem) {
  return problem.multipliers.reduce(function(accum, curr) {
    return accum + ' &times; ' + curr;
  }) + ' = ';
}
