describe("Making a custom game thing", function(){
	it("should create a coin powerup and register with the game controller", function(){
		var gc = gameController();
		var coin = mt('coin',gc);
		expect(coin.teams[0]).toBe('collision');
		expect(gc.registeredNodes['living'][0]).toBe(coin);
		expect(coin.functions['draw']).toNotBe(undefined);
	});
	it("should create a player", function(){
		var gc = gameController();
		var player = mt('player-mouse', gc);
		expect(player.teams[0]).toBe('collision');
		expect(player.teams[1]).toBe('player');
		expect(gc.registeredNodes['living'][0]).toBe(player);
		expect(gc.registeredNodes['player'][0]).toBe(player);
		expect(player.functions['draw']).toNotBe(undefined);
	});
	it("should call setup for a new coin", function(){ 
		var gc = gameController();
		var coin = mt('coin',gc);
		expect(coin.l.x).toBeGreaterThan(0);
		expect(coin.l.y).toBeGreaterThan(0);
	});
});