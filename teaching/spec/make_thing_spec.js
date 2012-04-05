describe("Making a custom game thing", function(){
	it("should create a coin powerup", function(){
		var gc = gameController();
		var coin = mt('coin',gc);
		expect(coin.teams[0]).toBe('collision');
	});
});