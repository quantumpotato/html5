describe("Bullet", function(){
	var b;
	var gc;
	beforeEach(function(){
		gc = gameController();
		b = mt('bullet', gc);
	});
	it("should have power", function(){
		expect(b.power).toBeGreaterThan(0);
	});
	it("should die when it collides with a living thing", function(){
		var player = mt('player-mouse',gc);
		var cm = generateThing(['CollisionManager']);
		gc.register(gc, cm);
		b.l.x = 50;
		b.l.y = 50;
		player.l.x = 50;
		player.l.y = 50;
		gc.tick(gc);
		expect(b.life).toBe(0);
	});
	it("should decrease its targets life by its power", function(){
		var player = mt('player-mouse',gc);
		var cm = generateThing(['CollisionManager']);
		gc.register(gc, cm);
		b.l.x = 50;
		b.l.y = 50;
		player.l.x = 50;
		player.l.y = 50;
		player.life = 20;
		b.power = 5;
		gc.tick(gc);
		expect(player.life).toBe(15);
	});
});