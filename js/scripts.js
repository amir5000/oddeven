(function() {
	var evenContainer	= $('#even');
	var oddContainer	= $('#odd');
	var evenInputField	= $('#evenNumber');
	var evenButton		= $('#calcEven');
	var oddInputField	= $('#oddNumber');
	var oddButton		= $('#calcOdd');
	var evenTotalP		= $('#evenTotal p');
	var oddTotalP		= $('#oddTotal p');
	var messageEven		= $('#message-even');
	var messageOdd		= $('#message-odd');
	function addEvenNumbers(endNumber) {
		var addingNumbers;
		var total = 0;
		if (!isNaN(endNumber) && endNumber !== '' ) {
			messageEven.html('');
			evenContainer.removeClass('has-error');
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 !== 1) {
					total = total + addingNumbers;
				} 
			}
		} else {
			evenContainer.addClass('has-error');
			evenInputField.focus();
			messageEven.html('<p class="error-message">"' + evenInputField.val() + '" is not a valid number</p>');
		}
		return total;
	}
	function addOddNumbers(endNumber) {
		var addingNumbers;
		var total = 0;
		if (!isNaN(endNumber) && endNumber !== '' ) {
			messageEven.html('');
			oddContainer.removeClass('has-error');
			for (var i = 1; i <= endNumber; i++) {
				addingNumbers = i;
				if (addingNumbers % 2 === 1) {
					total = total + addingNumbers;
				} 
			}
		} else {
			oddContainer.addClass('has-error');
			oddInputField.focus();
			messageOdd.html('<p class="error-message">"' + oddInputField.val() + '" is not a valid number</p>');
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
