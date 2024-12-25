/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums,target) {
	var result = 0;
	var waitForRes = true;
	for(var i = 0; i < nums.length; i++) {
		if(nums[i] < target) {
			result = i + 1;
		} else if(target === nums[i]) {
			result = i;
		}
	}
	return result;
};