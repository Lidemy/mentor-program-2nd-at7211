function isPalindromes(str) {
    for (var i = 0; i <= str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            var paslindrome = 1;
        }
    }

    if (paslindrome === 1) {
        console.log("false");
    } else {
        console.log("true")
    }

}

isPalindromes("abcsasdasdsba");
module.exports = isPalindromes