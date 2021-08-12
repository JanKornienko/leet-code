/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var num = 0;
	var romanArr = s.split("");
	var intArr = [];
	var symDict = {
		"I" : 1,
		"V" : 5,
		"X" : 10,
		"L" : 50,
		"C" : 100,
		"D" : 500,
		"M" : 1000
	};
	romanArr.forEach(symbol => {
		intArr.push(symDict[symbol]);
	});
	for(var i = intArr.length - 1; i >= 0; i--) {
		if(intArr[i] < intArr[i + 1]) {
			num -= intArr[i];
		} else {
			num += intArr[i];
		}
	}
	return num;
};