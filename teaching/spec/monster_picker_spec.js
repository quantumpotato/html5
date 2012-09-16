describe("Monster picker", function(){
	var mp;
	var gc;
	beforeEach(function(){
		gc = gameController();
		mp = mt('monster-picker', gc);
	});
	it("should have weighted monster types", function(){
		expect(mp.weightedHashes['monster-types'].hash.hunter).toBe(2);
		expect(mp.weightedHashes['monster-types'].hash.bullet).toBe(3);		
	});
	it("should have a function", function(){
		expect(mp.weightedHashes['monster-types'].action).toNotBe(undefined);
	});
});

