function makeThingProperties(){
	return {
		"coin":["BasicObject","PointUp"],
		"player-mouse":['Player','BasicObject','MovesWithMouse'],
		"player-cannon":['PlayerCannon'],
		"bullet":['BasicObject','Bullet'],
		"hunter":['BasicObject','Monster','StupidHunter'],
		"monster-picker":['HashPicker','Looper'],
		"monster-builder":['Builder']
	}
};

function newThingTeams(){
	return {
		"coin":['collision'],
		"player-mouse":['collision','player','mouse-move'],
		"player-cannon":['ally','mouse-click'],
		"bullet":['collision','bullet','enemy'],
		"hunter":['collision','enemy'],
		"monster-builder":['monster-builder']
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
			var makeMonsterFunc = function(args) {
				var gc = args.t.gc;
				var mp = args.t;
				var monster = args.result;
				
				var builder = gc.findTarget(gc, 'monster-builder');
				//use t.hashes['monster-building'] for kind
				var buildArgs = {'t':builder,'kind':monster};
				etf(builder, 'build', buildArgs);
				gc.newestNode.t = gc.findTarget(gc, 'player');
				gc.newestNode.l.x = builder.l.x;
				gc.newestNode.l.y = builder.l.y;
				etf(gc.newestNode, 'fire', {'t':gc.newestNode, 'launcher':builder, 'targetTeam':'player'});
				builder.hashes['monster-building'].hash[monster].speed += 1;
				builder.hashes['monster-building'].hash[monster].power += 1;				
			}
			t.hashes['monster-building'] = {'hash':{'hunter':2,'bullet':3},'action':makeMonsterFunc};
			t.loopingFunctionName = 'select';
			t.loopingArgs = {'t':t,'hashName':'monster-building'};
		},
		'monster-builder':function(t) {
			t.hashes['monster-building'] = {'hash':{'hunter':{'speed':3,'power':1},'bullet':{'speed':4,'power':1}}};
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