describe("Regeneration", function(){
if (window.File && window.FileReader && window.FileList && window.Blob) {
 alert('hi great success'); // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}	
var regenner;
	beforeEach(function(){
		regenner = generateThing(['BasicObject','Regeneration']);
	});
	it("should not regenerate life when at maxLife", function(){
		regenner.maxLife = 5;
		regenner.life = 5;
		regenner.functions["tick"]
	});
});
