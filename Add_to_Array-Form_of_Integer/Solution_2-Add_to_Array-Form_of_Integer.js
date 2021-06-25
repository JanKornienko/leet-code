/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
	var arrK = [];
	arrK = Array.from(K.toString()).map(Number);
	if (arrK.length > A.length) {
		return loop(arrK, A);
	} else {
		return loop(A, arrK);
	}
};
var loop = function(C, D) {
	var result = [];
	var revRes = [];
	var number = 0;
	var overflow = false;
	var lenC = C.length-1;
	var lenD = D.length-1;
	for (i = lenC; i >= 0; i--) {
		if (lenD >= 0) {
			number += D[lenD];
			lenD--;
		}
		number += C[i];
		if (overflow === true) {
			number++;
			overflow = false;
		}
		if (number > 9) {
			overflow = true;
			number -= 10;
		}
		revRes.push(number);
		number = 0;
	}
	if (overflow === true) {
		revRes.push(1);
	}
	for (u = revRes.length-1; u >= 0; u--) {
		result.push(revRes[u]);
	}
	return result;
};