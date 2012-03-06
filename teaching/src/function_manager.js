FunctionManager = function() {
	return {
			"BasicObject":{
			"index":["tick"],
			"functions":{
				"tick":[
					function(t){
						t.l.x = t.l.x + (t.d.x * t.speed);
						t.l.y = t.l.y + (t.d.y * t.speed);
					}
				]
			}
		},
		"StupidHunter":{
			"index":["tick"],
			"functions":{
				"tick":[
					function(t){
						if (t.target != null) {
							t.d = GetAngle(t.l, t.target.l);
						}
					}
				]
			}
		},
		"Regeneration":{
			"index":["tick"],
			"functions":{
				"tick":[
					function(t){
						if (t.life < t.maxLife){
							t.life += t.regenRate;
							if (t.life > t.maxLife) {
								t.life = t.maxLife;
							}
						}
					}
				]
			}
		}
	}
}