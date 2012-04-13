describe("Monster picker", function(){
	var mp;
	var gc;
	var mb;
	beforeEach(function(){
		gc = gameController();
		mp = mt('monster-picker', gc);
		mb = mt('monster-builder', gc);
	});
	it("should have weighted monster types", function(){
		expect(mp.hashes['monster-building'].hash.hunter).toBe(2);
		expect(mp.hashes['monster-building'].hash.bullet).toBe(3);
	});
	it("should create a monster when selecting", function(){
		var nodes = gc.nodes.length;
		etf(mp, 'select', {'t':mp,'hashName':'monster-building', 'action':mp.hashes['monster-building'].action});
		expect(gc.nodes.length).toBeGreaterThan(nodes);
	});
	describe('Monster builder', function(){
		it('should have speed attributes for its monsters', function(){
			expect(mb.hashes['monster-building'].hash.hunter.speed).toBeGreaterThan(0);
			expect(mb.hashes['monster-building'].hash.bullet.speed).toBeGreaterThan(0);			
		});
		it('should have power attributes for its monsters', function(){
			expect(mb.hashes['monster-building'].hash.hunter.power).toBeGreaterThan(0);
			expect(mb.hashes['monster-building'].hash.bullet.power).toBeGreaterThan(0);
		})
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