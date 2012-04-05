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
							t.target = t.gc.findTarget('Player');
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
					console.log("colliding");
					if (b.score != undefined) {
						b.score += a.power;
						a.life = 0;
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
					console.log("evaluating distance between a & b" + a +" " + b);
					var dist = distance(a.l,b.l);
					return dist < (a.radius + b.radius);
				}],
				"tick":[
				function(args){
					console.log("ticking collision manager");
					var t = args.t;
					var gameController = t.gc;
					if (gameController.registeredNodes["collision"] === undefined) {
						return;
					}
					var a;
					var b;					
					console.log("looping through game controller:" + gameController);										
					for (var i = 0; i < gameController.registeredNodes["collision"].length; i++) {
						a = gameController.registeredNodes["collision"][i];
						for (var ii = 0; ii < gameController.registeredNodes["collision"].length; ii++) {
							b = gameController.registeredNodes["collision"][ii];
							var dist = distance(a.l, b.l);							
							if (dist < 10) {
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
						
					}
				]
			}
		}
	}
}