/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var check = false;
	var stop = false;
	var result;
	var i = 0;
	while(stop === false) {
		if(check === true) {
			letters.forEach(letter => {
				if(alphabet[i] === letter) {
					result = letter;
					stop = true;
				}
			});
		}
		if(alphabet[i] === target) {
			check = true;
		}
		if(i < 26) {
			i++;
		} else {
			i = 0;
		}
	}
	return result;
};