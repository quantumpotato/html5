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
	it("should listen for events with the game controller when registering", function(){
		testGC.register(player);
		// var functionsRegistered = player.functions;
		// alert(player);
		// alert(functionsRegistered);
	});
	it("should pull targets from registered objects", function(){
		
	});
});