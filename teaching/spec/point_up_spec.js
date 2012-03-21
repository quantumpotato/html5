describe("PointUps", function(){
	var pointUp;
	var gc;
	var cm;
	beforeEach(function(){
		pointUp = generateThing(["BasicObject","PointUp"]);
		pointUp.teams = ['pod','collision','living'];
		gc = gameController();
		cm = generateThing(["CollisionManager"]);
		gc.register(cm);		
	});
	it("should generate a random location when registering", function(){
		var oldX = pointUp.l.x;
		var oldY = pointUp.l.y;
		gc.register(pointUp);
		expect(pointUp.l.x).toNotBe(oldX);
		expect(pointUp.l.y).toNotBe(oldY);
	});
	it("should not increase score for non-players colliding", function(){
		gc.register(pointUp);
		var stupidHunter = generateThing(["BasicObject","StupidHunter"]);
		gc.register(stupidHunter);
		var oldScore = stupidHunter.score;
		stupidHunter.l.x = pointUp.l.x;
		stupidHunter.l.y = pointUp.l.y;
		gc.tick();
		expect(stupidHunter.score).toBe(oldScore);
		gc.tick();
		expect(stupidHunter.score).toBe(oldScore);
	});
	it("should increase score for players when colliding", function(){
		gc.register(pointUp);
		var player = generateThing(['BasicObject','Player']);
		player.teams = ["Player","collision"];
		gc.register(player);
		pointUp.l.x = player.l.x;
		pointUp.l.y = player.l.y;
		var oldScore = player.score;
		gc.tick();		
		expect(player.score).toBeGreaterThan(oldScore);
	});
	it("should die after colliding", function(){
		gc.register(pointUp);
		var player = generateThing(['BasicObject','Player']);
		player.teams = ["Player","collision"];
		gc.register(player);
		alert("living" + gc.registeredNodes['living'].length);		
		pointUp.l.x = player.l.x;
		pointUp.l.y = player.l.y;
		var oldScore = player.score;
		gc.tick();		
		gc.tick();		
		var deadCleaner = generateThing(['DeadCleaner']);
		deadCleaner.teams = ['controller'];
		gc.register(deadCleaner);
		gc.tick();
		alert("living" + gc.registeredNodes['living'].length);
		expect(pointUp).toBe(undefined);
	});
});