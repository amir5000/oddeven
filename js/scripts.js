(function() {
	
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
			alert('Enter a number!');
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
			alert('Enter a number!');
		}	
		return total;
	}

	var evenInputField = $('#evenNumber');
	var oddInputField = $('#oddNumber');
	evenInputField.on('change', function () {
		var numberValue = evenInputField.val();
		var totalFromEvenNumbers = addEvenNumbers(numberValue);
		$('#evenTotal').html('<p>Total: ' + totalFromEvenNumbers + '</p>');
	});
	oddInputField.on('change', function () {
		var numberValue = oddInputField.val();
		var totalFromEvenNumbers = addOddNumbers(numberValue);
		$('#oddTotal').html('<p>Total: ' + totalFromEvenNumbers + '</p>');
	});

})();