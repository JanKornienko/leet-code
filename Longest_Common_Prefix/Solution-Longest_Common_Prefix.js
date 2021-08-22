/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var startsBool = true;
	var prefix = "";
	var testArr = strs[0].split("");
	testArr.forEach(letter => {
		strs.forEach(word => {
			if(!word.startsWith(prefix + letter)) {
				startsBool = false;
				return prefix;
			}
		});
		if(startsBool === true) {
			prefix += letter;
		}
	});
	return prefix;
};