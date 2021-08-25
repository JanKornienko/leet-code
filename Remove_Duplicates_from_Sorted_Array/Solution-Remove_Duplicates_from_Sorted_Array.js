/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var length = nums.length;
	for(var i = 0; i < length; i++) {
		while(nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1);
			length--;
		}
	}
	return length;
};