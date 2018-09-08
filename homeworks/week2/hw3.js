function isPrime(n) {
    var num = '';
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            num += i;
        }

    }

    if (num.length <= 2) {
        return true;
    } else {
        return false;
    }

}

isPrime(8)
module.exports = isPrime