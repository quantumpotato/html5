describe("Moving with mouse movements", function(){
	var mouseMover;
	beforeEach(function(){
		mouseMover = generateThing(['MovesWithMouse']);
	});
	
	it("should update x and y to match mouse x and y", function(){
		var gc = gameController();
		mouseMover.teams = ['player', 'mouse-move'];
		gc.register(gc, mouseMover);
		var mouse = {'x':50,'y':60};
		gc.mouseMove(gc, mouse);
		expect(mouseMover.l.x).toBe(50);
	});
});