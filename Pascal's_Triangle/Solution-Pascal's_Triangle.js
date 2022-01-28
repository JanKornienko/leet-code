/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var trArr = [];
	for(var i = 0; i < numRows; i++) {
		var rowArr = [];
		for(var j = 0; j <= i; j++) {
			if((j === 0) || (trArr[i - 1][j] == null)) {
				rowArr.push(1);
			} else {
				rowArr.push(trArr[i - 1][j - 1] + trArr[i - 1][j]);
			}
		}
		trArr.push(rowArr);
	}
	return trArr;
};