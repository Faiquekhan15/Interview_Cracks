function getPrimes(n) {
    const primes = [];
    
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    
    return primes;
}

console.log(getPrimes(30));  // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
