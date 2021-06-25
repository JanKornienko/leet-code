/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
	var arrJ = jewels.split("");
	var arrS = stones.split("");
	var result = 0;
	arrJ.forEach(jewel => {
		arrS.forEach(stone => {
			if (stone == jewel) {
				result++;
			}
		});
	});
	return result;
};