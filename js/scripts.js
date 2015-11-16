(function() {
	var evenInputField	= $('#evenNumber');
	var evenButton		= $('#calcEven');
	var oddInputField	= $('#oddNumber');
	var oddButton		= $('#calcOdd');
	var evenTotalP		= $('#evenTotal p');
	var oddTotalP		= $('#oddTotal p');
	function addEvenNumbers(endNumber) {
		var addingNumbers;
		var total = 0;
		if (!isNaN(endNumber) && endNumber !== '' ) {
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 !== 1) {
					total = total + addingNumbers;
				} 
			}
		} else {
			alert('Enter a number please!');
		}
		return total;
	}
	function addOddNumbers(endNumber) {
		var addingNumbers;
		var total = 0;
		if (!isNaN(endNumber) && endNumber !== '' ) {
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 === 1) {
					total = total + addingNumbers;
				} 
			}
		} else {
			alert('Enter a number please!');
		}	
		return total;
	}
	function evenListener() {
		var numberValue = evenInputField.val();
		var totalFromEvenNumbers = addEvenNumbers(numberValue);
		evenTotalP.html('Total: ' + totalFromEvenNumbers);
	}
	function oddListener() {
		var numberValue = oddInputField.val();
		var totalFromEvenNumbers = addOddNumbers(numberValue);
		oddTotalP.html('Total: ' + totalFromEvenNumbers);
	}
	evenButton.on('click', evenListener);
	oddButton.on('click', oddListener);
})();
