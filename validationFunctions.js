
//Javascript function document

// This file has the testing function that will be tested in the test file after importing it with require and the location of this function.



module.exports =  {
		
validEmail: function(inValue){
	let regex =/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
	const valid = regex.test(inValue);
	return valid;
},


	
	validInput: function(inValue){
		inValue += "";	//turns all inValues into strings
		if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
			return false;
		}
		return true;
	},
	/*
zip code testing plan
Input Value											Output Value

'null', '', 'undefined' 							should FAIL
non numeric characters 'abc', '@%*#( etc' 			should FAIL 
floats '4.123'										should FAIL 
negatives  '-4'										should FAIL 
digits '50265'										should PASS
additional identifier digits 502654578				should Pass
dash between additional digits 50265-4578			should Pass
*/

	validZip: function(inValue){
		const regex = /^(\d{5})(-)?(\d{4})?$/;
		const valid = regex.test(inValue);
		return valid;
	},

	/*
convert characters in string testing plan

inputValue 																						outPutValue
converts ' to - ( 'Apple' 'Grape' = -Apple- -Grape-)												PASS	
converts / to - (/Apple/ /Grape/ = -Apple- Grape-)													PASS 
converts < to - (<Apple< <Grape< = -Apple- -Grape-)													PASS  
converts > to - (>Apple> >Grape> = -Apple- -Grape-)													PASS 
converts any combination to - ('Apple' /Grape/ <Strawberry> = -Apple- -Grape- -Strawberry-)			PASS 
*/

	convertChar: function(inValue){
		const regex = /('|\/|<|>)/g;
		let str = inValue.replace(regex, "-");
		return str;
	}
};



  
 