describe("Monster picker", function(){
	var mp;
	var gc;
	var mb;
	var player;
	beforeEach(function(){
		gc = gameController();
		player = mt('player-mouse', gc);
		mp = mt('monster-picker', gc);
		mb = mt('monster-builder', gc);
		mb.l.x = 350;
		mb.l.y = 350;
	});
	it("should have weighted monster types", function(){
		expect(mp.hashes['monster-building'].hash.hunter).toBe(2);
		expect(mp.hashes['monster-building'].hash.bullet).toBe(3);
	});
	it("should create a monster when selecting", function(){
		var nodes = gc.nodes.length;
		etf(mp, 'select', {'t':mp,'hashName':'monster-building'});
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
		});
		it('should increase speed and power for a kind when it builds that kind of monster', function(){
			var hunterSpeed = mb.hashes['monster-building'].hash.hunter.speed;
			var hunterPower = mb.hashes['monster-building'].hash.hunter.power;
			var bulletSpeed = mb.hashes['monster-building'].hash.bullet.speed;
			var bulletPower = mb.hashes['monster-building'].hash.bullet.power;			
	
			etf(mp, 'select', {'t':mp,'hashName':'monster-building'});
			
			var totalSpeed = mb.hashes['monster-building'].hash.hunter.speed + mb.hashes['monster-building'].hash.bullet.speed;
			expect(totalSpeed).toBeGreaterThan(hunterSpeed + bulletSpeed);
			
			var totalPower = mb.hashes['monster-building'].hash.hunter.power + mb.hashes['monster-building'].hash.bullet.power;
			expect(totalPower).toBeGreaterThan(hunterPower + bulletPower);			
		});
		it('should set target for built monsters', function(){
			etf(mp, 'select', {'t':mp,'hashName':'monster-building'});
			var monster = gc.findTarget(gc, 'enemy');
			expect(monster.t).toBe(player);
		});
		it("should set location for built monsters", function(){
			etf(mp, 'select', {'t':mp,'hashName':'monster-building'});
			var monster = gc.findTarget(gc, 'enemy');
			expect(monster.l.x).toBe(mb.l.x);
			expect(monster.l.y).toBe(mb.l.y);			
		});
		it("should select over time", function(){
			expect(mp.delayedActions[0]).toNotBe(undefined);
		});
	});
});