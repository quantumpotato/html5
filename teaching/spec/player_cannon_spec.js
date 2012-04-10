describe('Player Cannon', function(){
	var pc;
	var gc;
	beforeEach(function(){
		gc = gameController();
		pc = mt('player-cannon', gc);
	});
	it("should have belong to the ally team", function(){
		expect(pc.teams[0]).toBe('ally');
	});
	it("should have a delay for launching a weapon", function(){
		expect(pc.delayedActions[0].delayReset).toBe(200);
	});
	it("should launch a bullet on mouse-click", function(){
		var player = mt('player-mouse', gc);
		alert(player);
		alert(gc);
		var nodes = gc.nodes.length;
		pc.ready = true;
		gc.mouseClick(gc, {'x':50,'y':50});
		expect(gc.nodes.length).toBeGreaterThan(nodes);
	});
	
});