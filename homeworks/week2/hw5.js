function add(a, b) {
    //和數預設空字串
    var c = ''

    //進位
    var carry = 0

    //位數應相加次數
    var addTimes = (a.length >= b.length ? a.length : b.length)

    for (var i = 0; i < addTimes; i++) {

        //判斷進行相加的位數是否有值, 沒有值就補0
        var a1 = Number.isNaN(parseInt(a.charAt(a.length - 1 - i))) ? 0 : parseInt(a.charAt(a.length - 1 - i))

        var b1 = Number.isNaN(parseInt(b.charAt(b.length - 1 - i))) ? 0 : parseInt(b.charAt(b.length - 1 - i))

        //兩位數相加，並加上前一位數的進位 
        var s = a1 + b1 + carry

        if (s >= 10) {

            carry = 1

            c = ((s - 10).toString().concat(c))

        } else {

            carry = 0

            c = (s.toString().concat(c))

        }

    }


    //加上最大位數相加的進位
    if (carry === 1) {

        c = ('1'.concat(c))

    }

    return c;
}

module.exports = add;


a = 5234 b = 328
addTimes = 4
//parseInt() 函式能將輸入的字串轉成整數。


a1 = 4 b1 = 8
c = 2

a1 = 3 b1 = 2
c = 52

a1 = 2 b1 = 3
c = 552

a1 = 5 b1 = 0

c = 5552