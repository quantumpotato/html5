describe("executing every related function", function(){
	var regenHunter;
	beforeEach(function(){
		regenHunter = generateThing('BasicObject','Regeneration','StupidHunter');
		console.log("regenrate" + regenHunter.regenRate);
		console.log(regenHunter.life);
	});
	it("should execute all functions for the same name", function(){
		var target = {"l":{"x":20,"y":20}};
		regenHunter.t = target;
		var oldDistance = distance(regenHunter.l, target.l);
		regenHunter.maxLife = 5;
		regenHunter.life = 2;
		var oldLife = regenHunter.life;
		etf(regenHunter, 'tick', {"t":regenHunter});
		console.log("oldlife" + oldLife);
		console.log("regenrate" + regenHunter.regenRate);
		expect(regenHunter.life).toBe(oldLife+regenHunter.regenRate);
		var newDistance = distance(regenHunter.l, target.l);
		expect(newDistance).toBeLessThan(oldDistance);
	});
});