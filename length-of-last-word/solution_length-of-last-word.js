/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var arr = s.split("").reverse();
	var stopCount = false;
	var length = 0;
	arr.forEach(char => {
		if((char !== " ") && (stopCount === false)) {
			length++;
		} else if((char === " ") && (length > 0)) {
			stopCount = true;
		}
	});
	return length;
};