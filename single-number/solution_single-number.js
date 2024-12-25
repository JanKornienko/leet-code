/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var i = 1;
	var u = 0;
	var res = true;
	var result = 0;
	nums.forEach(num => {
		u = 0;
		res = true;
		nums.forEach(check => {
			if((i != u) && (num == check)){
				res = false;
			}
			u++;
		});
		if(res === true){
			result = num;
		}
		i++;
	});
	return result;
};