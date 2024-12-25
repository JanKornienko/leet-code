/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	var squArr = [];
	var bigArr = [];
	var resArr = [];
	var bigNum = 0;
	var item = 0;
	var count = 0;
	nums.forEach(num => {
		squArr.push(num ** 2);
	});
	while (nums.length != bigArr.length) {
		squArr.forEach(bArrNum => {
			if (bArrNum > bigNum) {
				bigNum = bArrNum;
				item = count;
			}
			count++;
		});
		bigArr.push(bigNum);
		squArr.splice(item, 1);
		bigNum = 0;
		item = 0;
		count = 0;
	}
	for (var i = bigArr.length - 1; i >= 0; i--) {
		resArr.push(bigArr[i]);
	}
	return resArr;
};