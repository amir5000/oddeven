(function() {
	var evenInputField	= $('#evenNumber');
	var evenButton		= $('#calcEven');
	var oddInputField	= $('#oddNumber');
	var oddButton		= $('#calcOdd');
	function addEvenNumbers(endNumber) {
		var addingNumbers;
		var total = 0;
		if (!isNaN(endNumber) && endNumber !== '' ) {
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 !== 1) {
					console.log('This is an even number: ' + addingNumbers);
					total = total + addingNumbers;
					console.log('This is the total so far: ' + total);
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
					console.log('This is an odd number: ' + addingNumbers);
					total = total + addingNumbers;
					console.log('This is the total so far: ' + total);
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
		$('#evenTotal p').html('Total: ' + totalFromEvenNumbers);
	}
	function oddListener() {
		var numberValue = oddInputField.val();
		var totalFromEvenNumbers = addOddNumbers(numberValue);
		$('#oddTotal p').html('Total: ' + totalFromEvenNumbers);
	}
	evenInputField.on('change', evenListener);
	evenButton.on('click', evenListener);
	oddInputField.on('change', oddListener);
	oddButton.on('click', oddListener);
})();
