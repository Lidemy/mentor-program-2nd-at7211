function alphaSwap(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str = str.replace(str[i], str[i].toLowerCase());
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            str = str.replace(str[i], str[i].toUpperCase());
        }
    }
    return str;
}

module.exports = alphaSwap

console.log(alphaSwap("timing"));