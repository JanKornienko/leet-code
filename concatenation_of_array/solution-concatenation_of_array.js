/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
	var result = [];
	for (var i = 0; i < nums.length * 2; i++) {
		if (i >= nums.length) {
			result.push(nums[i - nums.length]);
		} else {
			result.push(nums[i]);
		}
	}
	return result;
};