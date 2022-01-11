/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
	var arr = s.split(' ');
	s = "";
	for(var i = 0; i < k; i++) {
		s += arr[i] + " ";
	}
	s = s.slice(0, -1);
	return s;
};