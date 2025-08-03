/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
	var arr = Array.from(command);
	var letter = '';
	var result = '';
	arr.forEach(char => {
		letter += char;
		switch (letter) {
			case 'G':
				result += 'G';
				letter = '';
				break;
			case '()':
				result += 'o';
				letter = '';
				break;
			case '(al)':
				result += 'al';
				letter = '';
				break;
		}
	});
	return result;
};