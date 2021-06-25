/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	var custMoney = 0;
	var wealth = [];
	var result = 0;
	accounts.forEach(customer => {
		customer.forEach(money => {
			custMoney += money;
		});
		wealth.push(custMoney);
		custMoney = 0;
	});
	wealth.forEach(item => {
		if (item > result) {
			result = item;
		}
	});
	return result;
};