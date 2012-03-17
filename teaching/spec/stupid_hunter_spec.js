describe("Stupid Hunter", function(){
	var stupidHunter;
	var target = {"l":{"x":10,"y":10}};
		beforeEach(function(){
			stupidHunter = generateThing(['BasicObject','StupidHunter']);
		});
	
	it("should not move when it has no target", function() {
		var oldX = stupidHunter.l.x;
		var oldY = stupidHunter.l.y;
		stupidHunter.speed = 1;
		stupidHunter.functions["tick"][0]({"t":stupidHunter});
		expect(stupidHunter.l.x).toBe(oldX);
		expect(stupidHunter.l.y).toBe(oldY);
	});
	
	it("should move when it has a target", function() {
		stupidHunter.target = target;
		var oldDistance = distance(stupidHunter.l, stupidHunter.target.l);
		etf(stupidHunter, "tick", {"t":stupidHunter});
		etf(stupidHunter, "tick", {"t":stupidHunter});		
		expect(distance(stupidHunter.l, stupidHunter.target.l)).toBeLessThan(oldDistance);
	});
});