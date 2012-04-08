describe('Thing maker', function(){
	var maker;
	beforeEach(function(){
		 maker = generateThing(['Maker']);
	});
	it("should have a thing it makes", function(){
		expect(maker.kind.length).toBe(0);
	});
	it("should have a delayed action", function(){
		expect(maker.delayedActions[0].delay).toBe(0);
		expect(maker.delayedActions[0].delayReset).toBe(0);
		expect(maker.delayedActions[0].action).toNotBe(undefined);
	});
	it("should make things", function(){
		var gc = gameController();
		maker.kind = 'coin';
		maker.delayedActions[0].delayReset = 5;
		gc.register(gc, maker);
		expect(gc.nodes.length).toBe(1);
		// gc.tick(gc);
		// expect(gc.nodes.length).toBe(2);
				
	});

});