/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	var overflow = false;
	var arr1;
	var arr2;
	if(a.length >= b.length) {
		arr1 = a.split("");
		arr2 = b.split("");
	} else {
		arr1 = b.split("");
		arr2 = a.split("");
	}
	arr2.unshift("0");
	var j = arr2.length - 1;
	for(var i = arr1.length - 1; i >= 0; i--) {
		arr1[i] = parseInt(arr1[i]) + parseInt(arr2[j]);
		if(overflow) {
			arr1[i]++;
			overflow = false;
		}
		switch(arr1[i]) {
			case 0:
				arr1[i] = "0";
				break;
			case 1:
				arr1[i] = "1";
				break;
			case 2:
				arr1[i] = "0";
				overflow = true;
				break;
			case 3:
				arr1[i] = "1";
				overflow = true;
				break;
		}
		j > 0 ? j-- : j = 0;
	}
	if(overflow) {
		arr1.unshift("1");
	}
	return arr1.join("");
};
