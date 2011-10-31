(function Understanding() {
	this.l = new point(0,0);
	this.mass = 1;
	
	this.tick = function() {
	 	drawCircle(this.l,"white",10);
		resetIfOob(this);
	}
})