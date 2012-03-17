describe("PointUps", function(){
	var pointUp;
	var gc;
	beforeEach(function(){
		pointUp = generateThing(["BasicObject","PointUp"]);
		pointUp.teams = ['pod'];
		gc = gameController();
	});
	it("should generate a random location when registering", function(){
		var oldX = pointUp.l.x;
		var oldY = pointUp.l.y;
		gc.register(pointUp);
		expect(pointUp.l.x).toNotBe(oldX);
		expect(pointUp.l.y).toNotBe(oldY);
		console.log(pointUp.l.x);
		console.log(pointUp.l.y);
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
		
	});
});