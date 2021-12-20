/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
	var freq = 0;
	var arrIns = false;
	var arr = [];
	nums.forEach(num => {
		if(arrIns === true) {
			for(var i = freq; i > 0; i--) {
				arr.push(num);
			}
			arrIns = false;
		} else {
			freq = num;
			arrIns = true;
		}
	});
	return arr;
};