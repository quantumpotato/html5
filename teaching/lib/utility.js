function distance(a,b) {
	var xdist = (a.x + b.x) * (a.x + b.x);
	var ydist = (a.y + b.y) * (a.y + b.y);
	return Math.sqrt(xdist * ydist);
}

function randomPoint() {
	goalX = Math.random() * width;
  goalY = Math.random() * height;
  
	return new point(goalX, goalY);
}

function oob(a) {
		if (a.l.x > width + 10 || a.l.x < -10 || a.l.y < -10 || a.l.y > height + 10) {
			return true;
		}
		
		return false;
}

function resetIfOob(a) {
	if (oob(a)) {
		a.l = randomPoint();
		a.vel = new point(0,0);
	};
}

function drawCircle(p,colour,radius) {
	context.fillStyle = colour;
	context.beginPath();
	context.arc(p.x,p.y,radius,0,Math.PI*2,true);
	context.closePath();
	context.fill();
}

function setBackground() {
	context.clearRect(0, 0, width, height);
	context.fillStyle = "black";
	context.fillRect(0,0,width,height);
}

function combineVel(a, b) {
	return new point (a.x+b.x,a.y+b.y);
}

function getAngle(a,b) {
	var dist = distance(a,b);
	
	if (dist == 0) {
		return new point(0,0);
	}
	
	var distX = Math.abs(a.x-b.x) / dist;
	var distY = Math.abs(a.y-b.y) / dist;
	
	if (b.x < a.x) {
		distX = -distX;
	}
	
	if (b.y < a.y) {
		distY = -distY;
	}
	
	return new point(distX,distY);
}

function gravitize(a,b, multiplier) {
	if (distance(a.l, b.l) > 3) {
		var dx = a.l.x - b.l.x;
		var dy = a.l.y - b.l.y;
		var distx = Math.pow(dx,2);
		var disty = Math.pow(dy,2);
		if (distx + disty == 0) {
			distx = .001;
			disty = .001;
		}
		
		var dist = Math.sqrt(distx+disty);
		if (dist == 0) {
			dist = 1;
		}
		
		var forceY = Math.abs(dy) / Math.pow(dist,2) * a.mass;
		var forceX = Math.abs(dx) / Math.pow(dist,2) * a.mass;
		
		forceX = forceX * multiplier;
		forceY = forceY * multiplier;
		if (dy < 0) {
			forceY = forceY * -1;
		}
		if (dx < 0) {
			forceX = forceX * -1;
		}
	}
		
	b.vel = combineVel(b.vel, new point(forceX,forceY));
}
