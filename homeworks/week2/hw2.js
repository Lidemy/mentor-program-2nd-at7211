function alphaSwap(str) {
    if (str[0] >= 'A' && str[0] <= 'Z') {
        str = str.replace(str[0], function(s) { return s.toLowerCase(); });
    } else if (str[0] >= 'a' && str[0] <= 'z') {
        str = str.replace(str[0], function(a) { return a.toUpperCase(); });
    }
    return str;
}

module.exports = alphaSwap