describe('Thing maker', function(){
	var maker;
	beforeEach(function(){
		 maker = generateThing(['Maker']);
	});
	it("should have a thing it makes", function(){
		expect(maker.kind.length).toBe(0);
	});
	it("should generate things", function() {
		
	});
	it("should have a delayed function", function(){
		expect(maker.delayedFunctions[0]).toNotBe(undefined);
	});
});