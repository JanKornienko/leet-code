/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
	var result = [];
	var bigNum = 0;
	candies.forEach(big => {
		if (big > bigNum) {
			bigNum = big;
		}
	});
	candies.forEach(candy => {
		if ((candy + extraCandies) >= bigNum) {
			result.push(true);
		} else {
			result.push(false);
		}
	});
	return result;
};