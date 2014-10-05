/****************************** Validators ***********************************/
function isDate(value) {
	var reg = /(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
	if (value.match(reg)) {
		return true;
	}
	return false;
}

function isHashtag(value) {
	if (value[0] != "#") {
		return false;
	}
	var value_copy = "" + value;
	var aux_val = value_copy.replace(' ','');
	return value_copy == aux_val;
}

function isName(value) {
	return value.length > 0;
}

function isMsg(value) {
	return value.length > 0;
}

function isInteger(value) {
	var n = parseInt(value);
	var i = 0;
	while (value[i] == "0"){
		i += 1;
	}
	return !(isNaN(n) || (value.slice(i) != n.toString()));
}

function isIntegerPositive(value) {
	var n = parseInt(value);
	var i = 0;
	while (value[i] == "0"){
		i += 1;
	}
	return !(isNaN(n) || (value.slice(i) != n.toString()) || n <= 0);
}

function isEmail(value) {
	var reg = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+/;
	if (value.match(reg)) {
		return true;
	}
	return false;
}

function isTwitter(value) {
	var reg = /\@([a-zA-Z0-9_\-])+/;
	if (value.match(reg)) {
		return true;
	}
	return false;
}

function isTelephone(value) {
	return isIntegerPositive(value);
}

function isNumber(value) {
   return !isNaN(value) && value.length > 0;;
}