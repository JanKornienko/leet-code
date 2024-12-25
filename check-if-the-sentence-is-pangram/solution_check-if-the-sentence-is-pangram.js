/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
	var result = true;
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	alphabet.forEach(letter => {
		if(!sentence.includes(letter)) {
			result = false;
			return result;
		}
	});
	return result;
};