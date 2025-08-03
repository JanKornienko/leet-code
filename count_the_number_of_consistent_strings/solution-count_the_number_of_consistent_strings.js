/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
	var result = 0;
	var push = true;
	words.forEach(word => {
		push = true;
		var wordArr = word.split("");
		wordArr.forEach(wordLetter => {
			if(!allowed.includes(wordLetter)) {
				push = false;
			}
		});
		if(push === true) {
			result++;
		}
	});
	return result;
};