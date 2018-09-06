// #2 //

function capitalize(str) {
  var char = str[0];
  var strEn = new RegExp("[A-Za-z]");
  if(char === strEn){
	str = str.replace(char, function(s){return s.toUpperCase();});
  }
	return str;
	
}


