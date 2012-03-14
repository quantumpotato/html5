describe("Registering", function(){
	var testGC;
	var player;
	beforeEach(function(){
		testGC = gameController();
		player = generateThing(["BasicObject","Player"]);			
	});
	describe("a new game controller", function(){
		it("should have no nodes", function(){
			expect(testGC.nodes.length).toBe(0);
		});		
	});
	it("should register objects with the game controller", function(){
		testGC.register(player);
		expect(testGC.nodes[0]).toBe(player);
	});
	it("should listen to game controller events it registered for", function(){
		var regenner = generateThing(['BasicObject','Regeneration']);
		regenner.maxLife = 8;
		testGC.register(regenner);
		var oldLife = regenner.life;
		testGC.tick();
		testGC.tick();
		var newLife = regenner.life;
		expect(newLife).toBeGreaterThan(oldLife);		
	});
	it("should pull targets from registered objects", function(){
		expect(1).toBe(0);
	});
});