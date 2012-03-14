function sortAndRemoveDuplicates(arr) {
    arr.sort( function(a, b) { return a - b; } );
    var copy = arr.slice(0);
    arr.length = 0;

    for (var i = 0, len = copy.length; i < len; ++i) {
        if (i == 0 || copy[i] != copy[i - 1]) {
            arr.push(copy[i]);
        }
    }
    return arr;
}

distance = function(a,b) {
	var xdist = (a.x - b.x) * (a.x - b.x);
	var ydist = (a.y - b.y) * (a.y - b.y);
	return Math.sqrt(xdist + ydist);
}

randomPoint = function() {
	goalX = Math.random() * width;
  goalY = Math.random() * height;
  
	return {"x":goalX,"y":goalY};
}

oob = function(a) {
		if (a.l.x > width + 10 || a.l.x < -10 || a.l.y < -10 || a.l.y > height + 10) {
			return true;
		}
		
		return false;
}

resetIfOob = function(a){
	if (oob(a)) {
		a.l = randomPoint();
		a.vel = {"x":0,"y":0};
	};
}

drawCircle = function(p,colour,radius) {
	context.fillStyle = colour;
	context.beginPath();
	context.arc(p.x,p.y,radius,0,Math.PI*2,true);
	context.closePath();
	context.fill();
}

setBackground = function() {
	context.clearRect(0, 0, width, height);
	context.fillStyle = "black";
	context.fillRect(0,0,width,height);
}

combineVel = function(a, b) {
	return {"x":a.x+bx,"y":a.y+b.y};
}

getAngle = function(a,b) {
	var dist = distance(a,b);
	
	if (dist == 0) {
		return {"x":0,"y":0};
	}
	
	var distX = Math.abs(a.x-b.x) / dist;
	var distY = Math.abs(a.y-b.y) / dist;
	
	if (b.x < a.x) {
		distX = -distX;
	}
	
	if (b.y < a.y) {
		distY = -distY;
	}
	
	return {"x":distX,"y":distY};
}

gravitize = function(a,b, multiplier) {
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
		
	b.vel = combineVel(b.vel, {"x":forceX,"y":forceY});
}
