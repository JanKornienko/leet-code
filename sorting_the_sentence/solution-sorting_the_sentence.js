/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
	var arr = s.split(' ');
	var newArr = [];
	newArr.length = arr.length;
	arr.forEach(word => {
		var index = parseInt(word.slice(-1));
		word = word.slice(0, -1);
		newArr.splice(index, 1, word);
	});
	newArr.shift();
	return newArr.join(' ');
};