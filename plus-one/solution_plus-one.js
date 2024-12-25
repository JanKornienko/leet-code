/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
	var overflow = false;
	var plusNum = true;
	for (var i = digits.length - 1; i >= 0; i--) {
		if ((overflow === true) && (digits[i] === 9)) {
			digits[i] = 0;
			overflow = true;
		} else if ((overflow === true) && (digits[i] < 9)) {
			digits[i]++;
			overflow = false;
		}
		if ((plusNum === true) && (digits[i] === 9)) {
			digits[i] = 0;
			overflow = true;
			plusNum = false;
		} else if ((plusNum === true) && (digits[i] < 9)) {
			digits[i]++;
			plusNum = false;
		}
	}
	if (overflow) {
		digits.unshift(1);
	}
	return digits;
};