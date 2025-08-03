/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	var result = [];
	var digits;
	var check = true;
	for(left; left <= right; left ++) {
		check = true;
		if(!left.toString().includes("0")){
			digits = (""+left).split("");
			digits.forEach(digit => {
				if(left % digit !== 0) {
					check = false;
				}
			});
		} else {
			check = false;
		}
		if(check === true) {
			result.push(left);
		}
	}
	return result;
};