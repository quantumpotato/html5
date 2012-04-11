function makeThingProperties(){
	return {
		"coin":["BasicObject","PointUp"],
		"player-mouse":['Player','BasicObject','MovesWithMouse'],
		"player-cannon":['PlayerCannon'],
		"bullet":['BasicObject','Bullet'],
		"hunter":['BasicObject','Monster','StupidHunter'],
		"monster-picker":['HashPicker']
	}
};

function newThingTeams(){
	return {
		"coin":['collision'],
		"player-mouse":['collision','player','mouse-move'],
		"player-cannon":['ally','mouse-click'],
		"bullet":['collision','bullet'],
		"hunter":['collision']
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
		},
		"hunter":function(args){
			var t = args.t;
			drawCircle(t.l, 'purple', t.radius);
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
			
		},
		"hunter":function(t){
			t.speed = 3;
		},
		"bullet":function(t){
			t.speed = 5;
		},
		"monster-picker":function(t){
			t.hashes['monster-types'] = {'hash':{'hunter':2,'bullet':3}};
		}
	}
};

function deregisterFunctions(){
	return {
		'hunter':function(args){
			args.gc.findTarget(args.gc, 'player').score+= 1;
		}
	}
}

function makeThing(name, gc) {
	var newThing = generateThing(makeThingProperties()[name]);
	newThing.teams = newThingTeams()[name];
	
	if (setupFunctions()[name] != undefined) {	
		setupFunctions()[name](newThing);
	}
	
	if (deregisterFunctions()[name] != undefined) {
		newThing.functions['deregister'] = [];
		newThing.functions['deregister'].push(deregisterFunctions()[name]);
	}
	
	gc.register(gc, newThing);
	newThing.functions['draw'] = [];
	newThing.functions['draw'].push(drawFunctions()[name]);
	return newThing;
};

function mt(name, gc){
	return makeThing(name,gc);
};