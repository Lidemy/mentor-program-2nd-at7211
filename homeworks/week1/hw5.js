function join(str, concatStr) {
	var combine='';
	for(var i =0; i < str.length; i++){
		var j= i;
		combine += str[j] + concatStr;
	}
	return combine;
}

function repeat(str, times) {
	var rep ='';
	for(var i =0; i<= times; i++){
		rep += str;
	}
	return rep;
}

