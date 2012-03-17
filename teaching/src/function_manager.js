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
						console.log("t.target"+t.target);
						console.log("t.gc"+this.gc);
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
			"index":["registering"],
			"functions":{
				"registering":[
				function(args){
					var t = args.t;
					t.l = randomPoint();
				}]
			}
		}
	}
}