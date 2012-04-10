describe("Game controller", function() {
	it("should kill out of bounds targets", function(){
		var gc = gameController();
		var bullet = mt('bullet', gc);
		expect(gc.nodes.length).toBe(1);
		bullet.l.x = -50;
		bullet.l.y = -50;
		gc.tick(gc);
		gc.tick(gc);
		expect(gc.nodes.length).toBe(0);
	});
});