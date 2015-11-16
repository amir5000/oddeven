(function() {
	var evenContainer	= $('#even');
	var oddContainer	= $('#odd');
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
			evenContainer.removeClass('has-error has-feedback');
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 !== 1) {
					total = total + addingNumbers;
				} 
			}
			return total;
		} else {
			evenContainer.addClass('has-error has-feedback');
			evenInputField.focus();
			return '<span class="error-message">"' + evenInputField.val() + '" is not a valid number</span>';
		}
		
	}
	function addOddNumbers(endNumber) {
		var addingNumbers;
		var total = 0;
		if (!isNaN(endNumber) && endNumber !== '' ) {
			oddContainer.removeClass('has-error has-feedback');
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 === 1) {
					total = total + addingNumbers;
				} 
			}
			return total;
		} else {
			oddContainer.addClass('has-error has-feedback');
			oddInputField.focus();
			return '<span class="error-message">"' + evenInputField.val() + '" is not a valid number</span>';
		}	
		
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
