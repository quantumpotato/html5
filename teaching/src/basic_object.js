foobar = {};

PropertyManager = {
	"BasicObject":{
		"properties":['l','vel','life','maxLife']
	}	
}

FunctionManager = {
	"BasicObject":{
		"index":["tick"],
		"functions":{
			"tick":[
				function(t){
					t.l.x = t.l.x + t.vel.x;
					t.l.y = t.l.y + t.vel.y;
				}
			]
		}
	}
}

DefaultPropertyManager = {
	"l":{"x":0,"y":0},
	"vel":{"x":0,"y":0},
	"life":1,
	"maxLife":1
}