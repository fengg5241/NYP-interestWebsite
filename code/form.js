//wrap our script in an annonymous function so that it can not be affected by other scripts and does not interact with other scripts
//ensures jQuery is the only thing declared as $
(function($){
	$(document).ready(function(){
		var isValid = null;
		var form = $('#donateForm');
		var submitButton = $("#submitButton")

		//submit form behavior
		var submitForm = function(e){
			console.log('form submit');
			//prevent form from submitting valid or invalid
			e.preventDefault();
			//user clicked and the form was not valid
			if(isValid === false){
				isValid = null;
				return false;
			}
			//user pressed enter, process as if they clicked save instead
			submitButton.trigger('click');
		};

		//override submit button behavior
		var submitClick = function(e){
			//Test form validitiy (HTML5) and store it in a global variable so both functions can use it
			isValid = form[0].checkValidity();
			if(false === isValid){
				//allow the browser's default submit event behavior 
				return true;
			}
			//prevent default behavior
			e.preventDefault();
			//additional processing - $.ajax() etc
			//.........
			save();
		};
		//override submit button click event
		submitButton.click(submitClick);
	    //override submit form event
		form.submit(submitForm);
		
		
		function save(){
			var elements = form[0].elements;
			var newRecord = {
				NRIC:elements.NRIC.value, // elements.NRIC只是组件 不是值
				"name":elements.name.value,
				'country':elements.country.value,
				email:elements.email.value,
				birthDate:elements.birthDate.value
			};
			newRecord["amount"] = parseInt(elements.amount.value);
			
			_updateRecords(newRecord);
			
			console.log(sessionStorage.donateRecords);
		}
		
		function _updateRecords(newRecord){
			if (sessionStorage.donateRecords) {
				var donateRecords = JSON.parse(sessionStorage.donateRecords);
				var isExist = false;
				for(var i=0;i < donateRecords.length ; i++){
					var temp =  donateRecords[i];
					if(donateRecords[i].NRIC == newRecord.NRIC){
						isExist = true;
						newRecord.amount += donateRecords[i].amount;
						donateRecords[i] = newRecord;
						break;
					}
				}
				
				if(!isExist){
					donateRecords.push((newRecord));
				}
				sessionStorage.donateRecords = JSON.stringify(donateRecords);
				
			} else {
				sessionStorage.donateRecords = JSON.stringify([newRecord]);
			}
		}
	});


    
})(jQuery);
