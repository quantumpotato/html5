describe("Making a custom game thing", function(){
	it("should create a coin powerup and register with the game controller", function(){
		var gc = gameController();
		var coin = mt('coin',gc);
		expect(coin.teams[0]).toBe('collision');
		expect(gc.registeredNodes['living'][0]).toBe(coin);
		expect(coin.functions['draw'][0]).toNotBe(undefined);
	});
});