/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	s = s.toLowerCase();
	var arr = s.split("");
	for(var i = 0; i < arr.length; i++) {
		if(!arr[i].match(/[a-z0-9]/i)) {
			arr.splice(i, 1);
			i--;
		}
	}
	var str1 = arr.join();
	var str2 = arr.reverse().join();
	return (str1 === str2) ? true : false;
};