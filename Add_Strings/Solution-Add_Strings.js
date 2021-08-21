/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var overflow = false;
var num;
var addStrings = function(num1, num2) {
	var arr1;
	var arr2;
	var resArr = [];
	if(num1.length < num2.length) {
		arr1 = num2.split("");
		arr2 = num1.split("");
	} else {
		arr1 = num1.split("");
		arr2 = num2.split("");
	}
	var lenArr2 = arr2.length - 1;
	for(var i = arr1.length - 1; i >= 0; i--) {
		num = parseInt(arr1[i]);
		if(overflow) {
			num++;
			overflow = false;
			overflowFun();
		}
		if(lenArr2 >= 0) {
			num += parseInt(arr2[lenArr2]);
			overflowFun();
			lenArr2--;
		}
		resArr.unshift(num.toString());
	}
	if(overflow) {
		resArr.unshift("1");
	}
	return resArr.join("");
};

var overflowFun = function() {
	if(num >= 10) {
		num -= 10;
		overflow = true;
	}
};