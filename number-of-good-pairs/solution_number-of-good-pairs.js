/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
	var result = 0;
	var arrNum = 1;
	nums.forEach(num => {
		for (i = arrNum; i < nums.length; i++) {
			if (num == nums[i]) {
				result++;
			}
		}
		arrNum++;
	});
	return result;
};