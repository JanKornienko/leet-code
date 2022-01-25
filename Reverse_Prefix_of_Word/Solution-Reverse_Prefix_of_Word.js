/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
	if(word.includes(ch)) {
		var arr = word.split('');
		var reverseStr = '';
		var index = 0;
		do {
			reverseStr += arr[index];
			index++;
		} while(arr[index - 1] !== ch);
		arr = arr.slice(index);
		reverseStr = reverseStr.split('').reverse().join('');
		arr.unshift(reverseStr);
		word = arr.join('');
	}
	return word;

};