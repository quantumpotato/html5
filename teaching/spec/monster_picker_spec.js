describe("Monster picker", function(){
	var mp;
	var gc;
	beforeEach(function(){
		gc = gameController();
		mp = mt('monster-picker', gc);
	});
	it("should have weighted monster types", function(){
		expect(mp.hashes['monster-building'].hash.hunter).toBe(2);
		expect(mp.hashes['monster-building'].hash.bullet).toBe(3);
	});
	it("should create a monster when selecting", function(){
		var nodes = gc.nodes.length;
		etf(mp, 'build-monster', {'t':mp});
		expect(gc.nodes.length).toBeGreaterThan(nodes);
	});
});

// {'monster-types':{'a':3,'b':4}}
// 
// function valueWeightedHash(hash, success) {
// 	..arc4random
// }
// 
// var args = {'t':t, 'monster':processWeightedHash(t.monster-types)}
// etf(gc.findTarget('monster-builder', gc), 'build-monster', args)
// processWeightedHash(t.monster_types, gc.findTarget('monster-builder', gc).functions)