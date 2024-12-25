/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
	var i = 0;
	while(i < words.length) {
		var reverseWord = words[i].split('').reverse().join('');
		if(words[i] === reverseWord) {
			return reverseWord;
		}
		i++;
	}
	return "";
};