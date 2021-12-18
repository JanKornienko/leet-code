/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
	var x = 0;
	operations.forEach(op => {
		op.includes("+") ? x++ : x--;
	});
	return x;
};