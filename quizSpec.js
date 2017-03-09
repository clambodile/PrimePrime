describe('quiz.js', function() {

  var quiz = createQuiz(5, 5, findPrimes(50));
  it('should be an array', function() {
    expect(Array.isArray(quiz)).toEqual(true);
  });

  it('should have the correct number of problems', function() {
    expect(quiz.length).toEqual(5);
  });
});
