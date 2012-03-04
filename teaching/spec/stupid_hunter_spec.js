describe("Stupid Hunter", function(){
	// var stupidHunter;
	// beforeEach(function(){
	// 	var stupidHunter = generateThing('BasicObject', 'StupidHunter');
	// 	console.log("new stupid hunter d.x" + stupidHunter.d.x);
	// });
	
	it("should not move when it has no target", function() {
		var stupidHunter = generateThing('BasicObject', 'StupidHunter');		
	 	console.log("new stupid hunter d.x" + stupidHunter.d.x);
		var oldX = stupidHunter.l.x;
		var oldY = stupidHunter.l.y;
		stupidHunter.speed = 1;
	//	alert(stupidHunter.d.x);
		stupidHunter.functions["tick"][0](stupidHunter);
		expect(stupidHunter.l.x).toBe(oldX);
		expect(stupidHunter.l.y).toBe(oldY);
	});
});