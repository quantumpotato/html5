function makeThingProperties(){
	return {
		"coin":["BasicObject","PointUp"]
	}
};

function newThingTeams(){
	return {
		"coin":['collision']
	}
};

function drawFunction(name) {
	return {
		"coin":function(args){
			var t = args.t;
			drawCircle(t.l, 'blue', 10);
		}
	}
};

function makeThing(name, gc) {
	var newThing = generateThing(makeThingProperties()[name]);
	newThing.teams = newThingTeams()[name];
	gc.register(newThing);
	newThing.functions['draw'] = [];
	newThing.functions['draw'].push(drawFunction(name));
	return newThing;
};

function mt(name, gc){
	return makeThing(name,gc);
};