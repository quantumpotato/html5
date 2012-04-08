function makeThingProperties(){
	return {
		"coin":["BasicObject","PointUp"],
		"player-mouse":['BasicObject','MovesWithMouse']
	}
};

function newThingTeams(){
	return {
		"coin":['collision'],
		"player-mouse":['collision','player']
	}
};

function drawFunction(name) {
	return {
		"coin":function(args){
			var t = args.t;
			console.log(t.l.x + " " + t.l.y);
			drawCircle(t.l, 'yellow', 10);
		},
		"player-mouse":function(args){
			var t = args.t;
			drawCircle(t.l, 'red', 20);
		}
	}
};

function setupFunctions() {
	return {
		"coin":function(t){
			t.l.x = Math.random() * width;
			t.l.y = Math.random() * height;
		},
		"player-mouse":function(t) {
			
		}
	}
};

function makeThing(name, gc) {
	var newThing = generateThing(makeThingProperties()[name]);
	newThing.teams = newThingTeams()[name];
	setupFunctions()[name](newThing);
	gc.register(gc, newThing);
	newThing.functions['draw'] = [];
	newThing.functions['draw'].push(drawFunction(name));
	return newThing;
};

function mt(name, gc){
	return makeThing(name,gc);
};