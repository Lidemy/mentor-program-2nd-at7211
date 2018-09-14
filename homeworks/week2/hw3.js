function isPrime(n) {
    var num = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            num += 1;
        }

    }

    if (num === 2) {
        return true;
    } else {
        return false;
    }

}


module.exports = isPrime