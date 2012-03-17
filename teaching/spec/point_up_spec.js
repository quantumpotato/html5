describe("PointUps", function(){
	var pointUp;
	var gc;
	beforeEach(function(){
		pointUp = generateThing(["BasicObject","PointUp"]);
		gc = gameController();
	});
	it("should generate a random location when registering", function(){
		var oldX = pointUp.l.x;
		var oldY = pointUp.l.y;
		gc.register(pointUp);
		expect(pointUp.l.x).toNotBe(oldX);
		expect(pointUp.l.y).toNotBe(oldY);
	});
	// it("should not increase score for non-players colliding", function(){
	// 	var stupidHunter = generateThing("BasicObject","StupidHunter");
	// 	gc.register(stupidHunter);
	// });
});