describe("PointUps and Death", function(){
	var pointUp;
	var gc;
	var cm;
	beforeEach(function(){
		pointUp = generateThing(["BasicObject","PointUp"]);
		pointUp.teams = ['pod','collision','living'];
		gc = gameController();
		cm = generateThing(["CollisionManager"]);
		gc.register(gc, cm);		
	});
	it("should generate a random location when registering", function(){
		var oldX = pointUp.l.x;
		var oldY = pointUp.l.y;
		gc.register(gc, pointUp);
		expect(pointUp.l.x).toNotBe(oldX);
		expect(pointUp.l.y).toNotBe(oldY);
	});
	it("should not increase score for non-players colliding", function(){
		gc.register(gc, pointUp);
		var stupidHunter = generateThing(["BasicObject","StupidHunter"]);
		gc.register(gc, stupidHunter);
		var oldScore = stupidHunter.score;
		stupidHunter.l.x = pointUp.l.x;
		stupidHunter.l.y = pointUp.l.y;
		gc.tick(gc);
		expect(stupidHunter.score).toBe(oldScore);
		gc.tick(gc);
		expect(stupidHunter.score).toBe(oldScore);
	});
	it("should increase score for players when colliding", function(){
		gc.register(gc, pointUp);
		var player = generateThing(['BasicObject','Player']);
		player.teams = ["Player","collision"];
		gc.register(gc, player);
		pointUp.l.x = player.l.x;
		pointUp.l.y = player.l.y;
		var oldScore = player.score;
		gc.tick(gc);		
		expect(player.score).toBeGreaterThan(oldScore);
	});
	it("should die after colliding", function(){
		gc.register(gc, pointUp);
		var player = generateThing(['BasicObject','Player']);
		player.teams = ["Player","collision"];
		gc.register(gc, player);
		pointUp.l.x = player.l.x;
		pointUp.l.y = player.l.y;
		var oldRegisteredNodes = gc.registeredNodes['living'].length;
		var oldNodes = gc.nodes.length;
		gc.tick(gc);		
		gc.tick(gc);
		var newRegisteredNodes = gc.registeredNodes['living'].length;
		expect(newRegisteredNodes).toBeLessThan(oldNodes);
		var newNodes = gc.nodes.length;
		expect(newNodes).toBeLessThan(oldNodes);
	});
});