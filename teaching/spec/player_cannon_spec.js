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
		expect(pc.delayedActions[0].delayReset).toBe(80);
	});
	it("should launch a bullet on mouse-click", function(){
		var player = mt('player-mouse', gc);
		var nodes = gc.nodes.length;
		pc.ready = true;
		gc.mouseClick(gc, {'x':50,'y':50});
		expect(gc.nodes.length).toBeGreaterThan(nodes);
	});
	it("should launch a bullet aiming at player", function(){
		var player = mt('player-mouse', gc);
		player.l.x = 300;
		player.l.y = 400;
		var nodes = gc.nodes.length;
		pc.ready = true;
		gc.mouseClick(gc, {'x':50,'y':50});
		var bullet = gc.findTarget(gc, 'bullet');
		expect(bullet.d.x).toBe(getAngle(pc.l, player.l).x);		
		expect(bullet.d.y).toBe(getAngle(pc.l, player.l).y);		
	});
});
