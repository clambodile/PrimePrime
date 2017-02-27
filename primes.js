/* Generate Primes */
function findPrimes(n) {
  var primeSeed = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  if (n < primeSeed.length) {
    return primeSeed.slice(0, n);
  }
  else {
    var primes = primeSeed.slice();
    for (var i = primeSeed.length; i < n; i++){
      primes.push(nextPrime(primes));
    }
    return primes;
  }
}

//take a list of primes, return next prime in the list
function nextPrime(primes) {
  var last = primes[primes.length - 1];
  var maybePrime = last + 2;
  function checkPrime(accum, curr) {
    return accum && !divides(curr, maybePrime)
  }
  while (!primes.reduce(checkPrime)) {
    maybePrime += 2;
  }
  return maybePrime;
}

function divides(a, b) {
  return b % a === 0;
}

