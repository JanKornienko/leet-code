/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    if(!num.toString().includes("6")) {
		return num;
	}
	var nums = num.toString().split("");
	var i = 0;
	while(i <= nums.length) {
		if(nums[i] === "6") {
			nums[i] = "9";
			break;
		} else {
			i++;
		}
	}
	return parseInt(nums.join(""));
};