foobar = {};

PropertyManager = function() {
		return {
		"BasicObject":{
			"properties":['l','d','life','maxLife','speed','power','radius']
		},
		"StupidHunter":{
			"properties":['l', 'd', 'target']
		},
		"Regeneration":{
			"properties":['life','maxLife','regenRate']
		},
		"Player":{
			"properties":['score']
		},
		"PointUp":{
			"properties":['l','power']
		},
		"CollisionManager":{
			"properties":[]
		},
		"DeadCleaner":{
			"properties":[]
		},
		"MovesWithMouse":{
			"properties":['l']
		},
		"Generator":{
			'properties':['kinds']
		}
	}
}

