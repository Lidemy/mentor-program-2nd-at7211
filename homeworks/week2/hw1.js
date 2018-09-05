function stars(n) {
	var image = '';
	var Newimage= [];

	if(1 <= n <=30){

		for(var i=1; i<=n; i++){
			image += '*';
			Newimage[i-1] = image;
		}
	}
	return Newimage;
}

module.exports = stars;    
