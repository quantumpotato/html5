describe("Regeneration", function(){
	var regenner;
	beforeEach(function(){
		regenner = generateThing('BasicObject','Regeneration');
	});
	it("should not regenerate life when at maxLife", function(){
		regenner.maxLife = 5;
		regenner.life = 5;
		regenner.functions["tick"]
	});
});