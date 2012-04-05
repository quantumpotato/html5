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

function makeThing(name, gc) {
	var newThing = generateThing(makeThingProperties()[name]);
	newThing.teams = newThingTeams()[name];
	gc.register(newThing);
	return newThing;
};

function mt(name, gc){
	return makeThing(name,gc);
};