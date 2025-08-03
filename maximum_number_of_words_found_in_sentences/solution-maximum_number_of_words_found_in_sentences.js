/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
	var count = 0;
	sentences.forEach(sentence => {
		if(sentence.split(' ').length > count) {
			count = sentence.split(' ').length;
		}
	});
	return count;
};