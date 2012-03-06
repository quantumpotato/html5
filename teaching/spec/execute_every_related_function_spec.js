describe("executing every related function", function(){
	var regenHunter;
	beforeEach(function(){
		regenHunter = generateThing('BasicObject','Regeneration','StupidHunter');
	});
	it("should execute all functions for the same name", function(){
		var target = {"l":{"x":20,"y":20}};
		regenHunter.t = target;
		var oldDistance = distance(regenHunter.l, target.l);
		regenHunter.maxLife = 5;
		regenHunter.life = 2;
		var oldLife = regenHunter.life;
		regenHunter.execute("tick");
		expect(regenHunter.life).toBe(oldLife+regenHunter.regenRate);
		var newDistance = distance(regenHunter.l, target.l);
		expect(newDistance).toBeLessThan(oldDistance);
	});
});