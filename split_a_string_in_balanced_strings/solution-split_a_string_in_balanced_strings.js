/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
	var result = 0;
	var r = 0;
	var l = 0;
	var arr = s.split('');
	arr.forEach(letter => {
		switch (letter) {
			case "R":
				r++;
				break;
			case "L":
				l++;
				break;
		}
		if (r == l) {
			result++;
			r = 0;
			l = 0;
		}
	});
	return result;
};