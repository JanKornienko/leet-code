/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	for(var i = s.length - 1; i >= 0; i--) {
		s.push(s[i]);
		s.splice(i,1);
	}
};