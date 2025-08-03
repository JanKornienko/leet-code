/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
	var index;
	var result = 0;
	switch (ruleKey) {
		case "type":
			index = 0;
			break;
		case "color":
			index = 1;
			break;
		case "name":
			index = 2;
			break;
	}
	items.forEach(item => {
		if (item[index] === ruleValue) {
			result++;
		}
	});
	return result;
};