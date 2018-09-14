function stars(n) {
    var image = '';
    var Newimage = [];

    for (var i = 1; i <= n; i++) {
        image += '*';
        Newimage[i - 1] = image;
    }
    return Newimage;
}

module.exports = stars;


console.log(stars(8));