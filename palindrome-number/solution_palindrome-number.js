/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	var reverse = parseInt(x.toString().split('').reverse().join(''));
	if(reverse === x) {
		 return true;
	} else {
		return false;
	}
};