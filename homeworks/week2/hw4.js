function isPalindromes(str) {
    for (var i = 0; i <= str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            var paslindrome = 1;
        }
    }

    if (paslindrome === 1) {
        return false;
    } else {
        return true;
    }

}

isPalindromes("abcsasdasdsba");
module.exports = isPalindromes