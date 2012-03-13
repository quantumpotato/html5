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
			"index":["tick"],
			"functions":{
				"tick":[
					function(args){
						var t = args.t;
						if (t.target != undefined) {
							t.d = getAngle(t.l, t.target.l);
						}
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
		}
	}
}