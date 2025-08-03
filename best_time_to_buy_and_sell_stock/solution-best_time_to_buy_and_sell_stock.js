/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var number = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let u = i; u < prices.length; u++) {
			if ((prices[i] < prices[u]) && ((prices[u] - prices[i]) > number)) {
				number = prices[u] - prices[i];
			}
		}
	}
	return number;
};