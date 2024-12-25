/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
	var arr = s.split("");
	var result = "";
	var i = 0;
	var u = 0;
	while (s.length != result.length) {
		indices.forEach(number => {
			if(number == i) {
				result += arr[u];
			}
			u++;
		});
		i++;
		u = 0;
	}
	return result;
};