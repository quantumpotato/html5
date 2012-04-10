describe("Collision Management", function(){
	var testGC;
	var cm;
	var player;
	var stupidHunter;
	beforeEach(function(){
		testGC = gameController();
		cm = generateThing(["CollisionManager"]);
		testGC.register(testGC, cm);
		player = generateThing(['BasicObject','Player']);
		player.teams = ["Player","collision"];
		stupidHunter = generateThing(['BasicObject','StupidHunter']);
		stupidHunter.teams = ["collision"];
		testGC.register(testGC,player);
		testGC.register(testGC, stupidHunter);
	});
	it("should know if two objects are not colliding", function(){
		stupidHunter.l.x = 50;
		stupidHunter.l.y = 50;
		var args = {"t":cm,"a":player,"b":stupidHunter};
		var result = vtf(cm, "evaluate", args);
		expect(result).toBe(false);
	});
	it("should know if two objects are colliding", function(){
		stupidHunter.l.x = player.l.x;
		stupidHunter.l.y = player.l.y;
		var args = {"t":cm,"a":player,"b":stupidHunter};
		var result = vtf(cm, "evaluate ", args);
		expect(result).toBe(true);
	});
});