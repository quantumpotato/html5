describe("Registering", function(){
	var testGC;
	var player;
	beforeEach(function(){
		testGC = gameController();
		player = generateThing(["BasicObject","Player"]);			
		player.teams = ['Player'];
	});
	describe("a new game controller", function(){
		it("should have no nodes", function(){
			expect(testGC.nodes.length).toBe(0);
		});		
	});
	it("should register objects with the game controller", function(){
		testGC.register(testGC, player);
		expect(testGC.nodes[0]).toBe(player);
	});
	it("should listen to game controller events it registered for", function(){
		var regenner = generateThing(['BasicObject','Regeneration']);
		regenner.maxLife = 8;
		testGC.register(testGC, regenner);
		var oldLife = regenner.life;
		testGC.tick(testGC);
		testGC.tick(testGC);
		var newLife = regenner.life;
		expect(newLife).toBeGreaterThan(oldLife);		
	});
	it("should pull targets from registered objects", function(){
		var hunter = generateThing(['BasicObject','StupidHunter']);
		var oldTarget = hunter.target;
		testGC.register(testGC, player);
		testGC.register(testGC, hunter);
		testGC.tick(testGC);
		testGC.tick(testGC);
		expect(hunter.target).toBe(player);		
	});
});