/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var begStr;
		var endStr = "";
		var zeroStop = 0;
		begStr = x.toString().split("");
		if (x === 0) {
			return 0;
		}
		if (begStr[0] == "-") {
			zeroStop = 1;
			endStr += "-";
		}
		for (var i = begStr.length - 1; i >= zeroStop; i--) {
			if (begStr !== 0) {
				endStr += begStr[i];
			}
		}
		if ((-(2**31) > parseInt(endStr)) || (parseInt(endStr) > (2**31) - 1)) {
			return 0;
		}
		return parseInt(endStr);
};