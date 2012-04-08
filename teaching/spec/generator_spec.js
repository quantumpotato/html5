describe('Thing generator', function(){
	var generator;
	beforeEach(function(){
		 generator = generateThing(['Generator']);
	});
	it("should have kinds of things it generates", function(){
		expect(generator.kinds.length).toBe(0);
	});
	it("should have a delayed function", function(){
		expect(generator.delayedFunctions[0]).toNotBe(undefined);
	});
});