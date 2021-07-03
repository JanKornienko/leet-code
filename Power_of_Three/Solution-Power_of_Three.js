/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if (n === 1) {
		return true;
	}
	for (var i = 3; i <= (2**31) - 1; i *= 3) {
		if (n === i) {
			return true;
		}
	}
	return false;
};