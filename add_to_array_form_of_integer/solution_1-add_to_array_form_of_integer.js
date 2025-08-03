/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
	var str = '';
	var num = 0;
	var result = [];
	var strResult = [];
	A.forEach(num => {
		str += num.toString();
	})
	num = BigInt(str) + BigInt(K);

	var resStr = num.toString();
	strResult = resStr.split('');
	strResult.forEach(letter => {
		result.push(Number(letter))
	})
	return result;
};