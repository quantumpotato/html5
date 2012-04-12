FunctionManager = function() {
	return {
			"BasicObject":{
			"index":["tick"],
			"functions":{
				"tick":[
					function(args){
						var t = args.t;
						t.l.x = t.l.x + (t.d.x * t.speed);
						t.l.y = t.l.y + (t.d.y * t.speed);
					},
				]
			}
		},
		"DeadCleaner":{
			"index":['tick'],
			"functions":
				{"tick":
					[function(args){
						var t = args.t;
						var dead = [];
						for (var i = 0; i < t.gc.registeredNodes["living"].length; i++){
							if (t.gc.registeredNodes['living'][i].life <= 0) {
								t.gc.remove(t.gc.registeredNodes['living'][i]);
								i--;
								dead.push(t.gc.registeredNodes['living'][i]);
							}
						};
					}]
				}
		},
		"StupidHunter":{
			"index":["tick", "tick2"],
			"functions":{
				"tick":[
					function(args){
						var t = args.t;
						if (t.target != undefined) {
							t.d = getAngle(t.l, t.target.l);
						}
					},
					function(args){
						var t = args.t;
						if (t.target === undefined && t.gc != undefined) {						
							t.target = t.gc.findTarget(t.gc, 'player');
						}
					}
				],
				"tick2":[
					function(args){
						
					}
				]
			}
		},
		"Regeneration":{
			"index":["tick"],
			"functions":{
				"tick":[
					function(args){
						var t = args.t;
						if (t.life < t.maxLife){
							t.life += t.regenRate;
							if (t.life > t.maxLife) {
								t.life = t.maxLife;
							}
						}
					}
					]
			}
		},
		"Player":{
			"index":["tick"],
			"functions":{
				"tick":[
				function(args){
					
				}]
			}
		},
		"PointUp":{
			"index":["registering","collision", "removal"],
			"functions":{
				"removal":[
				function(args){
					args.t.gc.remove(args.t);
				}],
				"registering":[
				function(args){
					var t = args.t;
					t.l = randomPoint();
				}],
				"collision":[
				function(args){
					var a = args.a;
					var b = args.b;
					if (b.score != undefined) {
						b.score += a.power;
						a.life = 0;
						a.l.x = -500;
					}
				}
				]
			}
		},
		"CollisionManager":{
			"index":['tick','evaluate'],
			"functions":{
				"evaluate":[
				function(args){
					var t = args.t;
					var a = args.a;
					var b = args.b;
					var dist = distance(a.l,b.l);
					return dist < (a.radius + b.radius);
				}],
				"tick":[
				function(args){
					var t = args.t;
					var gameController = args.gc;
					if (gameController.registeredNodes["collision"] === undefined) {
						return;
					}
					var a;
					var b;					
					for (var i = 0; i < gameController.registeredNodes["collision"].length; i++) {
						a = gameController.registeredNodes["collision"][i];
						for (var ii = 0; ii < gameController.registeredNodes["collision"].length; ii++) {
							b = gameController.registeredNodes["collision"][ii];
							var dist = distance(a.l, b.l);							
							if (dist < a.radius + b.radius) {
								etf(a,"collision",{"a":a,"b":b});
							}
						}
					};
				}]
			}
		},
		"MovesWithMouse":{
			"index":['mouse-move'],
			"functions":{
				"mouse-move":[
					function(args){
						var t = args.t;
						t.l.x = args.mouse.x;
						t.l.y = args.mouse.y;
					}
				]
			}
		},
		"PlayerCannon":{
			"index":['mouse-click','tick'],
			"functions":{
				"mouse-click":[
					function(args){
						var pc = args.t;
						if (pc.ready) {
 							var bullet = mt('bullet',args.gc);
							bullet.l.x = pc.l.x;
							bullet.l.y = pc.l.y;
							bullet.d = getAngle(pc.l, args.gc.findTarget(args.gc, 'mouse-move').l);
							bullet.owner = pc;
							pc.ready = false;
							pc.delayedActions[0].delay = pc.delayedActions[0].delayReset;
						}
					}
				],
				"tick":[
					function(args){
					var pc = args.t;
						if (pc.delayedActions[0].delay === 1) {
							pc.delayedActions[0].delay+= 1;
							pc.ready = true;
						}
					}
				]
			}
		},
		"Bullet":{
			"index":['collision'],
			"functions":{
				"collision":[
					function(args){
						var a = args.a;
						var b = args.b;
						if (b != a) {
							if (b.life && b.life > 0) {
								b.life -= a.power;
								a.life = 0;
							}
						}
					}
				]
			}
		},
		"Monster":{
			"index":['collision'],
			"functions":{
				"collision":[
					function(args) {
						var a = args.a;
						var b = args.b;
						if (b === a.target) {
							b.life -= a.power;
							var knockBackAngle = getAngle(a.l, b.l);
							b.l.x += knockBackAngle.x * 20;
							b.l.y += knockBackAngle.y * 20;
						}
					}
				]
			}
		},
		"HashPicker":{
			"index":['select'],
			"functions":{
				'select':[
					function(args){
						var t = args.t;
						var hash = args.t.weightedHashes[args.hashName];
						pwh(hash['hash'], hash['action'])
					}
				]
			}
		}
	}
}