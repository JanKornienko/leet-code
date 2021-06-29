/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
	var arr = Array.from(String(n.toString()), Number);
	var prod = 1;
	var sum = 0;
	arr.forEach(digit => {
			prod *= digit;
			sum += digit
	});
	return prod - sum;
};