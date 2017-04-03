// Sal DeMarco
// Program name: HW#6 – Distance Converter
// Write an application that allows a user to convert from inches, feet or yards to
// inches, feet or yards. If the users picks the same unit from both selections, the
// converted value will be the same as the value entered.
// Author: Salvatore DeMarco, Jr.
// Date last modified: 25-Feb-2015

function process() {

	var enterNum, // user enters number
	    lengthOfMsr, // selects first length conversion
	    convertMsr, // selects 2nd length conversion
	    result;
	//tally

	// Collect input from user

	enterNum = document.inputForm.number.value;
	lengthOfMsr = document.inputForm.unit.value;
	convertMsr = document.inputForm.convert.value;

	// Calculate user's input

	if (enterNum == "") {//this is in case the user enters nothing in the field
		alert("Please enter a number, thank you.");
	}
	
	enterNum = parseFloat(enterNum);
	result = parseFloat(result);

	if (lengthOfMsr == "inches") {// begin with the if statement using inch value
		result = enterNum;

		if (convertMsr == "inches") {
			result = enterNum;
		} else if (convertMsr == "feet") {
			result = enterNum / 12;
		} else if (convertMsr == "yards") {
			result = ((enterNum / 12) / 3);
		}
	}

	if (lengthOfMsr == "feet") {// if statement using feet value
		result = enterNum;

		if (convertMsr == "feet") {
			result = enterNum;
		} else if (convertMsr == "inches") {
			result = enterNum * 12;
		} else if (convertMsr == "yards") {
			result = enterNum / 3;
		}
	}

	if (lengthOfMsr == "yards") {// if statement using inch yards
		result = enterNum;

		if (convertMsr == "yards") {
			result = enterNum;
		} else if (convertMsr == "inches") {
			result = (enterNum * 12) * 3;
		} else if (convertMsr == "feet") {
			result = enterNum * 3;
		}
	}

	// show results
	document.inputForm.majorOutput.value = enterNum.toFixed(2) + " " + lengthOfMsr + " = " + result.toFixed(2) + " " + convertMsr;
}
