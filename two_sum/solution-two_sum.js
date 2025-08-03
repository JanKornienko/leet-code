/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	for (var i = 0; i < nums.length; i++) {
		for (var u = 0; u < nums.length; u++) {
			if (i != u) {
				if ((nums[i] + nums[u]) == target) {
					return [i, u];
				}
			}
		}
	}
};