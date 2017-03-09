describe('primes.js', function() {
  it('should return seeded primes up to 47.', function() {
    var primes = findPrimes(15);
    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });

  it('should be able to generate a bunch of primes', function() {
    var primes = findPrimes(1000);
    var last = primes[primes.length - 1];
    expect(last).toEqual(7919);
  });
});
