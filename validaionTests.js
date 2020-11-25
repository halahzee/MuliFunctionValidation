
var assert = require('chai').assert;	//Chai assertion library

var app =  require('../app/validationFunctions.js');

describe('email Validation ', function(){

	it('Empty string should fail', function(){
		assert.isFalse(app.validEmail("")); // empty string --- false 

	});
	it('two @ should fail', function(){
		assert.isFalse(app.validEmail('emailtest@emailtest@us.org')); // email with @_@ - false 
	});
	
	
	it('Regular format with one @ and .xxx should pass', function(){
		assert.isTrue(app.validEmail('emailtest@us.org')); // regular format with one @ - true
	});
	
	it('Only letters should return false', function(){
		assert.isFalse(app.validEmail('abcdefg.org')); // Letters only will return- false
	});
	
	it('Only numbers should return false', function(){
		assert.isFalse(app.validEmail('21312131212')); // only Numbers - false
	});


}),


describe("Testing Valid Zip Codes", function(){
	
	it("Input is Required", function(){
		assert.isFalse(app.validZip(''));
	});
	it("Input must be numeric", function(){
		assert.isFalse(app.validZip('abc'));
	});
	it("Input must not be a float", function(){
		assert.isFalse(app.validZip('502.65'));
	});
	it("Input is not negative", function(){
		assert.isFalse(app.validZip('-50265'));
	});
	it("Input is 5 digits", function(){
		assert.isTrue(app.validZip('50265'));
	});
	it("Input may have 4 additional digits", function(){
		assert.isTrue(app.validZip('502651234'));
	});
	it("Input may have a dash between additional digits", function(){
		assert.isTrue(app.validZip('50317-1234'));
	});
	
}),

describe("Testing Character Converter", function(){
	const str = "'Apple' /Grape/ <Strawberry>";
	const resultValue = "-Apple- -Grape- -Strawberry-";
	it("converts ' to -", function(){
		assert.strictEqual(app.convertChar(str), resultValue);
	});
	it("converts / to -", function(){
		assert.strictEqual(app.convertChar(str), resultValue);
	});
	it("converts < to -", function(){
		assert.strictEqual(app.convertChar(str), resultValue);
	});
	it("converts > to -", function(){
		assert.strictEqual(app.convertChar(str), resultValue);
	});
	it("converts any at once to -", function(){
		assert.strictEqual(app.convertChar(str), resultValue);
	});
	
})







