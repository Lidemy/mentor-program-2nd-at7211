// #2 //

function capitalize(str) {
  var char = str[0];
  if(char >= 'a' && char <= 'z'){
	str = str.replace(char, function(s){return s.toUpperCase();});
  }
	return str;
	
}


console.log("timing");