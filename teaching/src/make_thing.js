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
			drawCircle(t.l, 'yellow', 10);
		},
		"player-mouse":function(args){
			var t = args.t;
			drawCircle(t.l, 'red', 20);
		}
	}
};

function makeThing(name, gc) {
	var newThing = generateThing(makeThingProperties()[name]);
	newThing.teams = newThingTeams()[name];
	gc.register(newThing);
	newThing.functions['draw'] = drawFunction(name);
	return newThing;
};

function mt(name, gc){
	return makeThing(name,gc);
};