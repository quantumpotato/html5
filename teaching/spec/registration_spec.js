describe("Registering", function(){
	var testGC;
		beforeEach(function(){
			testGC = gameController();
		});
		it("should register objects with the game controller", function(){
			var player = generateThing(["BasicObject","Player"]);
			testGC.register(player);
			expect(testGC.nodes[0]).toBe(player);
		});
		it("should pull targets from registered objects", function(){
			
		});
});