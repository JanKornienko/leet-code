/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
	var res = [];
	var resNum = 0;
	nums.forEach(num => {
		nums.forEach(compare => {
			if (num > compare) {
				resNum++;
			}
		});
		res.push(resNum);
		resNum = 0;
	});
	return res;
};