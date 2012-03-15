describe("Collision Management", function(){
	var testGC;
	var cm;
	var player;
	var stupidHunter;
	beforeEach(function(){
		testGC = gameController();
		cm = generateThing(["collision-manager"]);
		testGC.register(cm);
		player = generateThing(['BasicObject','Player']);
		stupidHunter = generateThing(['BasicObject','StupidHunter']);
		testGC.register(player);
		testGC.register(stupidHunter);
	});
	it("should compare distances between objects each tick", function(){
		//compare distances
		//send collide message, expect player life to have decremented
		expect(0).toBe(-1);
	});
});