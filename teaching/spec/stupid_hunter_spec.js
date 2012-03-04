describe("Stupid Hunter", function(){
	var stupidHunter;
	beforeEach(function(){
		stupidHunter = generateThing('BasicObject', 'StupidHunter');
	});
	
	it("should not move when it has no target", function() {
		var oldX = stupidHunter.l.x;
		var oldY = stupidHunter.l.y;
		stupidHunter.speed = 1;
	//	alert(stupidHunter.d.x);
		stupidHunter.functions["tick"][0](stupidHunter);
		expect(stupidHunter.l.x).toBe(oldX);
		expect(stupidHunter.l.y).toBe(oldY);
	});
});