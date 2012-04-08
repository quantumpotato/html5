describe('Player Cannon', function(){
	var pc;
	beforeEach(function(){
		pc = mt('player-cannon', gc);
	});
	it("should have belong to the ally team", function(){
		expect(pc.teams[0]).toBe('ally'));
	});
	// it("should have a delay for launching a weapon", function(){
	// 	expect(pc.delayedActions.length).toBe(1);
	// });
});