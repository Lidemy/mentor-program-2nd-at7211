function add(a, b) {
    var c = ''
    var carry = 0
    var strLength = (a.length >= b.length ? a.length : b.length)

    for (var i = 0; i < strLength; i++) {
        var a1 = Number.isNaN(parseInt(a.charAt(a.length - 1 - i))) ? 0 : parseInt(a.charAt(a.length - 1 - i))
        var b1 = Number.isNaN(parseInt(b.charAt(b.length - 1 - i))) ? 0 : parseInt(b.charAt(b.length - 1 - i))
        var sum = a1 + b1 + carry

        if (sum >= 10) {
            carry = 1
            c = ((sum - 10).toString().concat(c))
        } else {
            carry = 0
            c = (sum.toString().concat(c))
        }

    }
    if (carry === 1) {
        c = ('1'.concat(c))
    }
    return c;
}

module.exports = add;