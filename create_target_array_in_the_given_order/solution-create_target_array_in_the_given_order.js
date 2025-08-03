/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
	var result = [];
	var i = 0;
	nums.forEach(num => {
		result.splice(index[i],0,num);
		i++;
	});
	return result;
};