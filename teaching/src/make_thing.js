function makeThingProperties(){
	return {
		"coin":["BasicObject","PointUp"],
		"player-mouse":['Player','BasicObject','MovesWithMouse'],
		"player-cannon":['PlayerCannon','BasicObject'],
		"bullet":['BasicObject']
	}
};

function newThingTeams(){
	return {
		"coin":['collision'],
		"player-mouse":['collision','player','mouse-move'],
		"player-cannon":['ally','mouse-click'],
		"bullet":['collision','bullet']
	}
};

function drawFunctions() {
	return {
		"coin":function(args){
			var t = args.t;
			drawCircle(t.l, 'yellow', 10);
		},
		"player-mouse":function(args){
			var t = args.t;
			drawCircle(t.l, 'red', t.radius);
		},
		"bullet":function(args){
			var t = args.t;			
			drawCircle(t.l, 'red', t.radius);			
		},
		"player-cannon":function(args) {
			var t = args.t;			
			//todo: radius by delay
			var radius = ((t.delayedActions[0].delay + t.radius) / t.radius) + 10;
			drawCircle(t.l, 'blue', radius);
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
	
	if (setupFunctions[name] != undefined) {	
		setupFunctions()[name](newThing);
	}
	gc.register(gc, newThing);
	newThing.functions['draw'] = [];
	newThing.functions['draw'].push(drawFunctions()[name]);
	return newThing;
};

function mt(name, gc){
	return makeThing(name,gc);
};