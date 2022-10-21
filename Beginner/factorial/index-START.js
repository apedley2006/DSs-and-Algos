/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

function factorial(n) {
    var result = n
    if (n <= 1) {
        return 1
    }
    while (n > 1) {
        n--
        result *= n
    }
    return result
}


function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

function factorial(n, memo) {
    memo = memo || {}
    if(memo[n]){
        return memo[n]
    }  
    if (n === 0) {
        return 1
    }
    return memo[n] = n * factorial(n - 1, memo)
}

module.exports = factorial