/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
	var result = "";
	var arr = address.split("");
	arr.forEach(letter => {
		if (letter == ".") {
			result += "[.]";
		} else {
			result += letter;
		}
	});
	return result;
};