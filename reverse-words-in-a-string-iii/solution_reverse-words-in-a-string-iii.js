/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	var arr = s.split(' ');
	var reverseS = '';
	arr.forEach(word => {
		reverseS += word.split('').reverse().join('');
		reverseS += " ";
	});
	reverseS = reverseS.slice(0, -1);
	return reverseS;
};