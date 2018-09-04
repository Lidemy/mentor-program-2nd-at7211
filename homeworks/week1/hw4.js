function calculate(num) {
    var str = "";
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += i + ',' ;
        }
    }
    str = str.substring(0, str.length-1);
    return str;
}

console.log(calculate(640));