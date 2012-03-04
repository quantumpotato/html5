foobar = {};

PropertyManager = function() {
		return {
		"BasicObject":{
			"properties":['l','d','life','maxLife','speed']
		},
		"StupidHunter":{
			"properties":['l', 'd', 'target']
		}
	}
}

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
		}
	}
}

function DefaultPropertyManager() {
	return {
		"l":{"x":0,"y":0},
		"d":{"x":0,"y":0},
		"life":1,
		"maxLife":1,
		"speed":1
	}
}