/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	var number = 0;
	var result = [];
	nums.forEach(num => {
		number += num;
		result.push(number);
	});
	return result;
};